import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import TodoAppPages from "./pages/todo.app.pages";
import "../src/assets/css/style.css";

export default function App() {
  return (
    <>
      <TodoAppPages />
    </>
  );
}

//function base
// export default function App(props) {
//   return <h1>{props.type} Bishal shrees</h1>;
// }

//class base
// export default class App extends React.Component {
//   render() {
//     return <h1>{this.props.type} Bishal Shrees Magar</h1>;
//   }
// }

// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.type}</h1>
//         <p>Bishal Shrees Magar</p>
//       </div>
//     );
//   }
// }

// export default function App() {
//   const date = new Date();
//   const hours = date.getHours();

//   let timeOfDay;

//   if (hours < 12) {
//     timeOfDay = "morning";
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon";
//   } else {
//     timeOfDay = "night";
//   }
//   return <h1>Good {timeOfDay} to you sir or madam</h1>;
// }

// export default class App extends React.Component {
//   render() {
//     const date = new Date();
//     const hours = date.getHours();

//     let timeOfDay;

//     if (hours < 12) {
//       timeOfDay = "morning";
//     } else if (hours >= 12 && hours < 17) {
//       timeOfDay = "afternoon";
//     } else {
//       timeOfDay = "night";
//     }

//     return <h1>Good {timeOfDay} to you sir or madam</h1>;
//   }
// }

// export default function App() {
//   const [goOut, setGoOut] = React.useState("Yes");

//   function toggleGoOut() {
//     setGoOut((prevState) => {
//       return prevState === "Yes" ? "No" : "Yes";
//     });
//   }

//   return (
//     <div>
//       <h1>Should i go out tonight?</h1>
//       <div onClick={toggleGoOut}>
//         <h1>{goOut}</h1>
//       </div>
//     </div>
//   );
// }

// export default class App extends React.Component {
//   state = {
//     goOut: "Yes",
//   };

//   toggleGoOut = () => {
//     this.setState((prevState) => {
//       return {
//         goOut: prevState.goOut === "Yes" ? "No" : "Yes",
//       };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Should i go out tonight?</h1>
//         <div onClick={this.toggleGoOut}>
//           <h1>{this.state.goOut}</h1>
//         </div>
//       </div>
//     );
//   }
// }

// export default class Apps extends React.Component {
//   state = {
//     goOut: "Yse",
//   };

//   toggleGoOut = () => {
//     this.setState((prevState) => {
//       return {
//         goOut: prevState.goOut === "Yes" ? "No" : "Yes",
//       };
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1>Should i go out tonight?</h1>
//         <div onClick={this.toggleGoOut}>
//           <h1>{this.state.goOut}</h1>
//         </div>
//       </div>
//     );
//   }
// }

// export default function App() {
//   const [count, setCount] = React.useState(0);

//   function add() {
//     setCount((prevCount) => prevCount + 1);
//   }

//   function subtract() {
//     setCount((prevCount) => prevCount - 1);
//   }
//   return (
//     <div>
//       <div>
//         <h1>{count}</h1>
//       </div>
//       <div>
//         <button onClick={add}>Add</button>
//         <button onClick={subtract}>Subtract</button>
//       </div>
//     </div>
//   );
// }

// export default class App extends React.Component {
//   state = {
//     count: 0,
//   };
//   add = () => {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1,
//       };
//     });
//   };
//   subtract = () => {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count - 1,
//       };
//     });
//   };
//   render() {
//     return (
//       <div>
//         <div>
//           <h1>{this.state.count}</h1>
//         </div>
//         <div>
//           <button onClick={this.add}>Add</button>
//           <button onClick={this.subtract}>Subtract</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default class Apps extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       goOut: "Yes",
//     };
//     this.toggleGoOut = this.toggleGoOut.bind(this);
//   }

//   toggleGoOut() {
//     this.setState((prevState) => {
//       return {
//         goOut: prevState.goOut === "Yes" ? "No" : "Yes",
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Should i go out tonight?</h1>
//         <div style={{ cursor: "pointer" }} onClick={this.toggleGoOut}>
//           <h1>{this.state.goOut}</h1>
//         </div>
//       </div>
//     );
//   }
// }

// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     this.add = this.add.bind(this);
//     this.subtract = this.subtract.bind(this);
//   }

//   add() {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1,
//       };
//     });
//   }
//   subtract() {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count - 1,
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <div>
//           <h1>{this.state.count}</h1>
//         </div>
//         <div>
//           <button onClick={this.add}>Add</button>
//           <button onClick={this.subtract}>Subtract</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default class App extends React.Component {
//   state = {
//     character: {},
//   };

//   componentDidMount() {
//     console.log("component did mount");
//     fetch("https://swapi.dev/api/people/1")
//       .then((res) => res.json())
//       .then((data) => this.setState({ character: data }));
//   }

//   render() {
//     console.log("render");
//     return <h1>{this.state.character.name}</h1>;
//   }
// }
