import React, { Component} from "react";
import "./style.css";
import SimpleColourChanger from "./components/simpleColourChanger.js";
import Tidbit from "./components/tidbit";
import Counter from "./components/counter";
import Reviews from "./components/reviews";

class App extends Component{

  render(){
    return(
      <div className="App">
          <Tidbit>
            <SimpleColourChanger />
          </Tidbit>
          <Tidbit>
            <Counter />
          </Tidbit>
          <Tidbit>
            <Reviews />
          </Tidbit>
      </div>
    );
  }
}

export default App;
