
const parent = React.createElement(
    "div" , 
    {id: "parent"} ,
    React.createElement(
        "div" ,
        {id:"child"},
        React.createElement("h1" , {} , "i m an h1 tag"),
    )
);

// const heading = React.createElement("h1" ,
//      {id:"heading" , xyz:"abc" } , "hellow world from react");
console.log(parent);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);