// 3) creating "Hello World by JavaScript" using React 



// const heading = React.createElement("h1" , {id: "heading" , xyz: "abc"} , "Hello World by JavaScript!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);




//...............................................................................................................





// Create these using React


// 1) 

//<div id="parent">
//  <div id="class">
//    <h1>I' am h1 tag</h1>
// </div>
//</div>


// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1" , {} , "I'm an h1 tag")
//   )
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);




// 2)

//<div id="parent">
//  <div id="class">
//    <h1>I' am h1 tag</h1>
//    <h2>I' am h2 tag</h2>
// </div>
//</div>


// const parent = React.createElement("div" , {id : "parent" }, React.createElement("div" , { id: "child"} , [React.createElement("h1" , {} , "I'm an h1 tag") , React.createElement("h2" , {} , "I'm an h2 tag")]
// )
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);




// 3)

//<div id="parent">
//  <div id="class">
//    <h1>I' am h1 tag</h1>
//    <h2>I' am h2 tag</h2>
//   </div>

//  <div id="class2">
//    <h1>I' am h1 tag</h1>
//    <h2>I' am h2 tag</h2>
//   </div>
//</div>



// const parent = React.createElement("div" , {id: "parent"} ,[
//    React.createElement("div" , { id: "class" } , [
//    React.createElement("h1" , {} , "I'm am h1 tag") , 
//    React.createElement("h2" , {} , "I'm am h2 tag")
// ]),
//   React.createElement("div" , { id: "class2" } , [
//     React.createElement("h1" , {} , "I'm am h1 tag") ,
//     React.createElement("h2" , {} , "I' am h2 tag"),
//   ]),
// ]);

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);






