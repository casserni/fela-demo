import * as React from "react";
// @ts-ignore
import { FelaComponent } from "react-fela";

const Footer = ({ children }: { children?: any }) => {
  return (
    <FelaComponent
      style={(theme: any) => {
        return {
          height: "20px",
          textAlign: "center",
          background: "lightgrey"
        };
      }}
      render="footer"
    >
      {children}
    </FelaComponent>
  );
};

export default Footer;
