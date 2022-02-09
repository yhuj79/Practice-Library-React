import { Component } from "react";
import Menu from "./Components/Menu";
import HeadTitle from './Components/HeadTitle';

class App extends Component {
  render() {
    return (
      <div>
        <HeadTitle />
        <Menu />
      </div>
    )
  }
}

export default App;
