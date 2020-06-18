import React, { Component} from "react";
import "./style.css";
import SimpleColourChanger from "./components/simpleColourChanger.js";
import Tidbit from "./components/tidbit";

class App extends Component{

  render(){
    return(
      <div className="App">
          <Tidbit>
            <SimpleColourChanger />
          </Tidbit>
      </div>
    );
  }
}

export default App;
