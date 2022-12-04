# Введение в React

Создадим минимальный html-файл:

```html
<html>
<head>
</head>
<body>
    <h1>Hi, there!</h1>
</body>
</html>
```


## Подключаем библиотеки React

Нам понадобится две библиотеки собственно React: `react` и `react-dom`, а также Babel (`babel`), выполняющего функцию компиляции или транспиляции (то есть преобразования исходного кода программы из одного языка программирования в другой) исходного кода на языке JSX, используемого React, в обычный Javascript. JSX представляет собой расширение или диалект Javascript.

Добавим ссылки на библиотеки внутри элемента `head` документа `html`.

В тело документа (элемент `body`) добавим пустой элемент `div`, которому зададим уникальный идентификатор (атрибут `id`), например, `react-root`. К этому элементу в дальнейшем будем привязывать все элементы React.

Кроме него, добавим элемент `script` с атрибут `id`, равным `text/babel`.


```html
<html>
<head>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script> 
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</head>
<body> 
    <h1>Hi, there!</h1>
    
    <div id="react-root"></div>
    <script type="text/babel">
    
    /* 
    ADD REACT CODE HERE 
    */
    
    </script>
</body>
</html>
```

При загрузке в браузере, `babel-standalone` автоматически преобразует и выполнит все теги `script`, у которых указан тип `text/babel` или `text/jsx`.


## Первый компонент React

Приложение React состоит из компонент. 
Имя компонента React всегда должно начинаться с большой буквы. 
Простейший компонент может быть реализован одной единственной функцией. Такие компоненты называются функциональными (function component) и выглядят следующим образом:

```jsx harmony
function HelloWorld(props) {
  
    return <h1>Hello, world!</h1>;
    
}
```

Добавим этот компонент в элемент `script`.

Чтобы отобразить наш компонент на странице, необходимо добавить следующий код:

```jsx harmony
ReactDOM.render(
    <HelloWorld />, 
    document.getElementById("react-root")
);
```

Он буквально означает "отрисовать компонент `HelloWorld` внутри элемента с идентификатором `react-root`.

Сохраните страницу, обновите её в браузере.


## Задание 1.

Создайте новый компонент `GoodbyeWorld` с соответствующим текстом и отобразите его на странице вместо элемента `HelloWorld`. 



## Передача свойств компоненту с помощью `props`


Компоненту React передается объект с набором входных параметров.  
Этот объект принято называть `props`, то есть "свойства", "properties". 
Свойства объекта `props` не могут изменяться внутри компонента.

В следующем примере компоненту `HelloWorld` передаётся параметр `who`: 

```jsx harmony
function HelloWorld(props) {

    return <h1>Hello {props.who}!</h1>;

}
```


Параметры компоненту передаются как атрибуты:

```jsx harmony
ReactDOM.render(
    <HelloWorld who="everyone" />, 
    document.getElementById("react-root")
);
```

## Задание 2

Вместо текста "everyone" передайте в компонент два props: отдельно своё имя, и отдельно - фамилию.


## "Классовые" компоненты React 

Наш компонент React можно преобразовать к следующему виду:

```jsx harmony
class HelloWorld extends React.Component {
  
    render() {
        return <h1>Hello {this.props.who}!</h1>;
    }
    
}
```

Как видно, у этого компонента, по-прежнему только один метод, `render`, который возвращает HTML-код, отображаемый на странице.  
Такие компоненты называются "классовые" (class components).


## state

```jsx harmony
class HelloWorld extends React.Component {
  
    constructor() {
        super();
        this.state = {
            what: "Goodby"
        };
    }

    render() {
        return <h1>{this.state.what}, {this.props.who}!</h1>;
    }
    
}
```


## Изменение `state` компонента

```jsx harmony
class Hello extends React.Component {
    
    constructor(){
        super();
        this.state = {
            what: "Goodby"
        };
        this.updateMessage = this.updateMessage.bind(this);
   }
   
    updateMessage() {
        this.setState({
            what: "Hello"
        });
    }    
    
    render() {
        return <h1>{this.state.what}, {this.props.who}!</h1>;
    }
    
}
```

Теперь добавим кнопку. Замените метод `render` на следующий. 

```jsx harmony
render() {
  return (
     <div>
        <h1>{this.state.what}, {this.props.who}!</h1>;
        <button onClick={this.updateMessage}>Click me!</button>
     </div>   
  )
}
```

Метод `render`, как и функциональный компонент React, не могут возвращать более одного компонента (элемента) React верхнего уровня. Если нужно вернуть несколько компонент, их необходимо "завернуть" в один компонет, например, `div`. В последних версиях React существует специальный компонент `React.Fragment`, предназначенный для этого, и не добавляющий в DOM дополнительных элеменов (`div`).


## Задание 3
Измените текст программы так, чтобы при нажатии на клавишу слова "Goodbye" и "Hello" выводились поочередно.

## Задание 4
Добавьте новое свойство у state, в котором будет храниться количество нажатий на кнопку, и выводите его в новом заголовке `h2`, непосредственно под существующим.

## Задание 5.
Добавьте на форму новую кнопку, при нажатии на которую счетчик будет сбрасываться.

