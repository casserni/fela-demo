import * as React from "react";
// @ts-ignore
import { FelaComponent } from "react-fela";

const Body = ({ children }: { children?: any }) => {
  return (
    <FelaComponent
      style={(theme: any) => {
        return {
          background: theme.body.background,

          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          height: "100%",
          justifyContent: "center",
          padding: "20px",
          textAlign: "center"
        };
      }}
      render="div"
    >
      {children}
    </FelaComponent>
  );
};

export default Body;
