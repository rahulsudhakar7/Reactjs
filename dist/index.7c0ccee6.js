// const root = document.createElement('h1');
// root.innerHTML = 'Hello React';
// const getId = document.getElementById('root');
// getId.appendChild(root);
//First create the React Element.
/*const jsHeading = document.createElement('h1');
jsHeading.innerHTML = 'something';
console.log(jsHeading)*/ /*<div id='parent'>
    <div id='child'>
        <h1>Hello, I'm H1 Tag.</h1>
    </div>
</div>  */ //const heading = React.createElement('h1',{id:'h1',xyz:'xyz'},'Hello React');
// const heading = React.createElement('div',{id:'parent'},React.createElement('div',{id:'child'},[React.createElement('h1',{},'Hello I am H1 Tag'),React.createElement('h2',{},'Hello I am H2 Tag')]));
const heading = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "Hello I am H1 Tag"),
        React.createElement("h2", {}, "Hello I am H2 Tag")
    ]),
    [
        React.createElement("div", {
            id: "child2"
        }, [
            React.createElement("h1", {}, "Hello I am H1 Tag"),
            React.createElement("h2", {}, "Hello I am H2 Tag")
        ])
    ]
]);
// We will create React DOM Node.
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the React Element in the DOM Node
root.render(heading);

//# sourceMappingURL=index.7c0ccee6.js.map
