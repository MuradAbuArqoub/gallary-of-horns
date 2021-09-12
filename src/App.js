import React from "react";
import Header from "./componant/Header";
import Footer from "./componant/Footer";
import Main from "./componant/Main";

class App extends React.Component {
  render(){
    return(
      <div>

        <Header/>
        <Main/>
        <Footer/>
        
      </div>
    )
  }
}

export default App;