import * as React from "react";
// @ts-ignore
import { FelaComponent } from "react-fela";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: IButtonProps) => {
  return <button>Button</button>;
};

export default Button;
