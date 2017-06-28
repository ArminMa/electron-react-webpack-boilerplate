import React from "react";
import Counter from "../modules/CounterUI";
import SplitPane from "../modules/SplitPanal/SplitPane";
import "./style.css";

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.PureComponent {

  static propTypes = {

  };

  render() {
    const styleA = { background: "#eee" };
    const styleB = { background: "#aaa4ba" };
    const styleC = { background: "#000" };
    const styleD = { padding: "2em", fontStyle: "italic" };
    return (
      <div>
        <h1>Hello!</h1>
        <Counter />
        <SplitPane split="vertical" minSize={50} maxSize={300} defaultSize={100} className="primary"
                   pane1Style={styleA} resizerStyle={styleC}>
          <div>
            <Counter />
          </div>

          <SplitPane split="horizontal" defaultSize="80%" paneStyle={styleD} pane2Style={styleB}>
            <div>
              <div id="helloUpperWorld">helloUpperWorld</div>
              <div id="counterId">counterId</div>
            </div>
            <div>
              <div id="helloUnderWorld">helloUnderWorld</div>
              <h1> some more text in underWorld!</h1>
            </div>

          </SplitPane>
        </SplitPane>
      </div>
    );
  }

}
