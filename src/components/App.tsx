import * as React from "react";
// @ts-ignore
import { FelaComponent } from "react-fela";

import Body from "./Body";
import Button from "./Button";
import Footer from "./Footer";
import Header from "./Header";
import Logo from "./Logo";

class App extends React.Component<{ randomizeTheme?: () => any }> {
  public render() {
    return (
      <FelaComponent
        rule={() => {
          return {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            fontFamily: "SF Pro Text"
          };
        }}
        render={({ className }: { className: any }) => {
          return (
            <div className={className}>
              <Header>
                <Logo />
                <h1>Fela Demo</h1>
              </Header>

              <Body>
                <div>
                  <Button>Default Button</Button>
                  <Button disabled={true}>Default Disabled Button</Button>

                  <Button inverse={true}>Default Inverse Button</Button>
                  <Button transparent={true}>Default Transparent Button</Button>
                </div>

                <div>
                  <Button intent="primary"> Primary Button</Button>
                  <Button intent="primary" disabled={true}>
                    Primary Disabled Button
                  </Button>
                  <Button intent="primary" inverse={true}>
                    Primary Inverse Button
                  </Button>
                  <Button intent="primary" transparent={true}>
                    Primary Transparent Button
                  </Button>
                </div>

                <div>
                  <Button onClick={this.props.randomizeTheme}>
                    Randomize Theme
                  </Button>
                </div>
              </Body>
              <Footer>
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/zlatko-najdenovski"
                  title="Zlatko Najdenovski"
                >
                  Zlatko Najdenovski
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>{" "}
                is licensed by{" "}
                <a
                  href="http://creativecommons.org/licenses/by/3.0/"
                  title="Creative Commons BY 3.0"
                  target="_blank"
                >
                  CC 3.0 BY
                </a>
              </Footer>
            </div>
          );
        }}
      />
    );
  }
}

export default App;
