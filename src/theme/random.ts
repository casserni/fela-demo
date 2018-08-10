// @ts-ignore
import randomColor from "randomcolor";

export default () => {
  return {
    header: {
      background: randomColor(),
      foreground: randomColor()
    },

    body: {
      background: randomColor()
    },

    logo: {
      foreground: randomColor()
    },

    intents: {
      default: {
        background: randomColor(),
        foreground: randomColor(),

        activeBackground: randomColor(),
        activeForeground: randomColor(),

        hoverBackground: randomColor(),
        hoverForeground: randomColor()
      },

      primary: {
        background: randomColor(),
        foreground: randomColor(),

        activeBackground: randomColor(),
        activeForeground: randomColor(),

        hoverBackground: randomColor(),
        hoverForeground: randomColor()
      }
    }
  };
};
