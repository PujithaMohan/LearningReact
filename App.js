const headReact = React.createElement("h1", { id: "reactHeading", xyz: "abc" }, "Hello World from React js file");
const rooter = ReactDOM.createRoot(document.getElementById("head"));
rooter.render(headReact);

/**
 * <div id=parent>
 *  <div id=child>
 *   <h1>I am H1</h1>
 *   <h2>I am H2</h2>
 *  </div>
 *  <div id=child1>
 *   <h1>I am H1</h1>
 *   <h2>I am H2</h2>
 *  </div>
 * </div>
 */

const nestedElements = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I am H1"),
    React.createElement("h2", {}, "I am H2")
    ]),
    React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "I am H1"),
    React.createElement("h2", {}, "I am H2")])]);

const r = ReactDOM.createRoot(document.getElementById("nestedElements"));

r.render(nestedElements);
