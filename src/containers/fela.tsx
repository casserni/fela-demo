import * as _ from "lodash";
import * as React from "react";

// @ts-ignore
import { FelaComponent, Provider, ThemeProvider } from "react-fela";

import { createRenderer } from "fela";
import beautifier from "fela-beautifier";
import friendlyPseudoClass from "fela-plugin-friendly-pseudo-class";
import LVHA from "fela-plugin-lvha";

import DefaultTheme from "../theme";

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

export default class FelaProvider extends React.Component<{ children: any }> {
  public render() {
    return (
      <Provider renderer={renderer}>
        <ThemeProvider theme={_.merge({}, DefaultTheme)}>
          {this.props.children}
        </ThemeProvider>
      </Provider>
    );
  }
}
