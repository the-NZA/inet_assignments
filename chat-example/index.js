const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

// Add json parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const users = new Map();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/reg', (req, res) => {
  const user = req.body;
  if (users.has(user.id)) {
    res.json({ error: 'User already exists' });
  } else {
    users.set(user.id, user);
    res.json({ success: true });
  }
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    const fmt_msg = `${users.get(socket.id).name}: ${msg}`;
    io.emit('chat message', fmt_msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
