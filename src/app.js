import React, { Component} from "react";
import "./style.css";
import SimpleColourChanger from "./components/simpleColourChanger/simpleColourChanger.js";
import Tidbit from "./components/tidbit";
import Counter from "./components/counter/counter";
import Reviews from "./components/reviews/reviews";
import NavBar from "./components/navBar/navBar";
import SideBar from "./components/sideBar/sideBar";
import Modal from "./components/modal/modal";

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
          <Tidbit>
            <Modal />
          </Tidbit>
      </div>
    );
  }
}

export default App;
