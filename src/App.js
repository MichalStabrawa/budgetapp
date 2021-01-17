import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import NavMenu from "./components/NavMenu";
import Header from "./components/Header";
import StartSection from "./components/StartSection";
import FormSection from "./components/FormSection";
import Footer from "./components/Footer";

const el = document.querySelector(".btn-burger");

class App extends Component {
  state = {
    menu: [{ name: "Link1" }, { name: "link2" }],
    flag: false,
    isActive: false,
    name: "Test",
  };

  handleClick = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };

  showFormSection = () => {
    this.setState({
      isActive: true,
    });
    console.log(this.el);
  };

  render() {
    return (
      <div className="App">
        <NavMenu
          item={this.state.menu}
          active={this.state.flag}
          click={this.handleClick}
        />
        <Header />
        <StartSection
          click={this.showFormSection}
          isActive={this.state.isActive}
        />
        {this.state.isActive ? <FormSection /> : null}
        <Footer name={this.state.name} />
      </div>
    );
  }
}

export default App;
