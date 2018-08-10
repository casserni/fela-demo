import * as _ from "lodash";
import * as React from "react";

// @ts-ignore
import { FelaComponent, Provider, ThemeProvider } from "react-fela";

import { createRenderer } from "fela";
import beautifier from "fela-beautifier";
import friendlyPseudoClass from "fela-plugin-friendly-pseudo-class";
import LVHA from "fela-plugin-lvha";

import DefaultTheme from "../theme";
import randomTheme from "../theme/random";

const renderer = createRenderer({
  enhancers: [
    // @ts-ignore
    beautifier({
      // formats the rendered css to be more human readable
      autosemicolon: "false",
      ident: "  ",
      openbrace: "end-of-line"
    })
  ],
  plugins: [
    friendlyPseudoClass(), // allows for creating psuedo styles as onHover instead of ':hover'
    LVHA() // sorts css class order appropriately for Link Visited Hover (Focus) Active
  ]
});

export default class FelaProvider extends React.Component<
  { children: any },
  { randomTheme: any }
> {
  constructor(props: any) {
    super(props);
    this.state = { randomTheme: {} };
  }

  public componentDidMount() {
    setInterval(() => this.randomizeTheme(), 500);
  }

  public randomizeTheme = () => {
    this.setState({ randomTheme: randomTheme() });
  };

  public render() {
    return (
      <Provider renderer={renderer}>
        <ThemeProvider
          theme={_.merge({}, DefaultTheme, this.state.randomTheme)}
        >
          {React.cloneElement(this.props.children, {
            randomizeTheme: this.randomizeTheme
          })}
        </ThemeProvider>
      </Provider>
    );
  }
}
