import * as React from "react";
// @ts-ignore
import { FelaComponent } from "react-fela";

export interface IButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    IButtonProps,
    IFelaProps {}

interface IFelaProps {
  theme?: any;
}

interface IButtonProps {
  text?: string;
  loading?: boolean;
  transparent?: boolean; // no background, no border
  inverse?: boolean;
  intent?: "primary" | "default";
}

class Button extends React.Component<IButton, {}> {
  public render() {
    const { disabled, onClick, children } = this.props;

    return (
      <FelaComponent
        {...this.props}
        rule={ButtonStyle}
        render={({ className }: any) => {
          return (
            <button onClick={onClick} disabled={disabled} className={className}>
              {children}
            </button>
          );
        }}
      />
    );
  }
}

function ButtonStyle(props: IButton): any {
  const {
    disabled,
    transparent,
    inverse,
    intent = "default",
    theme = {}
  } = props;

  let background = theme.intents[intent].background;
  let color = theme.intents[intent].foreground;

  if (inverse) {
    background = color;
    color = theme.intents[intent].background;
  }

  const style: any = {
    background,
    borderColor: "rgb(230, 232, 233)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "4px",
    color,
    cursor: "pointer",
    margin: "5px",
    padding: "8px 10px",

    onFocus: {
      outline: "none"
    },

    onHover: {
      background: theme.intents[intent].hoverBackground
    },

    onActive: {
      color: theme.intents[intent].activeForerouond,
      background: theme.intents[intent].activeBackground
    }
  };

  if (disabled) {
    style.cursor = "not-allowed";
    style.onHover = undefined;
  }

  if (transparent) {
    style.background = undefined;
    style.border = "none";
  }

  if (disabled) {
    style.cursor = "not-allowed";
    style.opacity = 0.6;
  }

  return style;
}
export default Button;
