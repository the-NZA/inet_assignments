import express from 'express';
import fs from 'fs';
import path from 'path';

// define __dirname
const __dirname = path.resolve();

const app = express();

// add parsers
const urlencodedParser = express.urlencoded({extended: false});
const jsonParser = express.json();

app.use(express.static(__dirname + "/public"));

// log middleware
app.use((r, w, next) => {
    const currentTime = new Date().toISOString();
    fs.appendFileSync('log.txt', `${currentTime}: ${r.method} ${r.path}\n`);
    next();
});

app.get('/', (r, w) => {
    w.sendFile(__dirname + '/index.html');
})

app.post("/", urlencodedParser, function (r, w) {
    if(!r.body) return w.sendStatus(400);
    w.send(`${r.body.userName} - ${r.body.userAge}`);
});

app.get("/about", function(r, w){
    let id = r.query.id;
    let userName = r.query.name;
    w.send("<h1>Информация</h1><p>id=" + id +"</p><p>name=" + userName + "</p>");
});

const productRouter = express.Router();

productRouter.get('/', (r, w) => {
    w.send('Product list');
});

productRouter.get('/:id', (r, w) => {
    w.send(`Product ${r.params.id}`);
});

app.use('/product', productRouter);

app.post("/user", jsonParser, function (r, w) {
    console.log(r.body);
    if(!r.body) return w.sendStatus(400);
     
    w.json(r.body);
});

app.use("/meta",function (r, w) {
    w.redirect("https://metanit.com")
});

app.use("/home/foo/bar",function (r, w) {
    w.status(404).send("<h1>Страница не найдена</h1><hr><a href='/'>На главную</a>");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})