import React from "react";
import { Container } from "semantic-ui-react";
import ReactDOM from "react-dom";
import { TraceSpinner } from "react-spinners-kit";
import "./App.css";
import MenuButton from "./MenuButton";
import DetailsComponent from "./DetailsComponent";
import TabComponent from "./TabComponent";
import DropdownComponent from "./Components/DropDown";
import docs from "./assets/docs.svg";
import download from "./assets/next.svg";
import user from "./assets/user.svg";
import window from "./assets/window.svg";
import graph from "./assets/graph.svg";
import sort from "./assets/sort.svg";
import Logo from "./assets/logo.png";
import award from "./assets/award.svg";
import battery from "./assets/battery.svg";
import full from "./assets/full.svg";
import profits from "./assets/profits.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <div className="Loading-container">
          <TraceSpinner size={70} color="#f00070" loading={loading} />
          Scrumbling...
        </div>
      );
    }
    return (
      <div className="App">
        <div className="AppMenu">
          <div className="SideMenuHeader">
            <img className="Logo" src={Logo} alt="logo" />
          </div>
          <div>
            <MenuButton icon={window} text={"my apps"} />
            <MenuButton icon={graph} text={"reports"} />
            <MenuButton icon={docs} text={"docs"} />
            <MenuButton icon={download} text={"download"} />
            <MenuButton icon={user} text={"my profile"} />
          </div>
        </div>
        <div className="AppMain">
          <div className="Top">
            <h3 class="Title">Overview</h3>
            <div className="DropDownContainer">
              <DropdownComponent />
            </div>
          </div>
          <div className="Tab">
            <TabComponent
              icon={profits}
              text={"revenue"}
              amount={"$510"}
              rate={12}
            />
            <div class="VSeparator" styles="height: 45px;"></div>
            <TabComponent
              icon={battery}
              text={"impressions"}
              amount={"12.2m"}
              rate={8}
            />
            <div class="VSeparator" styles="height: 45px;"></div>
            <TabComponent
              icon={full}
              text={"fill rate"}
              amount={"37.5%"}
              rate={4}
            />
            <div class="VSeparator" styles="height: 45px;"></div>
            <TabComponent
              icon={award}
              text={"ecpm"}
              amount={"$2.7"}
              rate={-5}
            />
          </div>
          <div className="More">VIEW ALL DATA</div>
          <div class="HSeparator" styles="width: 45px;"></div>
          <Container>
            <div className="MiddleContainer">
              <div class="SecondTitle">MY APPS</div>
              <img class="Sort" src={sort} alt="button" />
            </div>
            <div className="Center-Container">
              <DetailsComponent
                amount={`$224`}
                AppName={"TrackDemoAWE"}
                rate={16}
              />
              <DetailsComponent
                amount={`$224`}
                AppName={"RacingDemoAdmix-2"}
                rate={-42}
              />
              <DetailsComponent
                amount={`$224`}
                AppName={"TrackDemoAWE"}
                rate={-30}
              />
              <DetailsComponent
                amount={`$224`}
                AppName={"RacingDemoAdmix2"}
                rate={30}
              />
              <DetailsComponent
                amount={`$224`}
                AppName={"RacingDemoAdmix"}
                rate={0}
                name={"Off"}
              />
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

function demoAsyncCall() {
  return new Promise(resolve => setTimeout(() => resolve(), 7900));
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
