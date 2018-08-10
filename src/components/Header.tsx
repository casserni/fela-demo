import * as React from "react";
// @ts-ignore
import { FelaComponent } from "react-fela";

const Header = ({ children }: { children?: any }) => {
  return (
    <FelaComponent
      style={(theme: any) => {
        return {
          backgroundColor: theme.header.background,
          color: theme.header.foreground,

          height: "150px",
          padding: "20px",
          textAlign: "center"
        };
      }}
      render="header"
    >
      {children}
    </FelaComponent>
  );
};

export default Header;
