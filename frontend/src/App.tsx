import React from "react";

const Example = (props: {title : string, number: number}) => {
    return <div>{props.title} {props.number}</div>
}

const App = () => {
  return <Example title="Hello World" number={23}/>
};

export default App;
