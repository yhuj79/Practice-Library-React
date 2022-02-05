import { Component } from "react";
import BasicTab from "./Components/BasicTab";
import HeadTitle from './Components/HeadTitle';

class App extends Component {
  render() {
    return (
      <div>
        <HeadTitle />
        <BasicTab />
      </div>
    )
  }
}

export default App;
