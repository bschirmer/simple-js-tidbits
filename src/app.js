import React, { Component} from "react";
import "./style.css";
import SimpleColourChanger from "./components/simpleColourChanger.js";
import Tidbit from "./components/tidbit";
import Counter from "./components/counter";
import Reviews from "./components/reviews";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";

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
          <Tidbit>
            <NavBar />
          </Tidbit>
          <Tidbit>
            <SideBar />
          </Tidbit>
      </div>
    );
  }
}

export default App;
