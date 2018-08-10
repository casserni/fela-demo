## Fela Demo

This demo is demonstrate using fela to build dynamically styled components. We will building a button, which will cover using styling through props, a theme file, and styling based on some state (hover, active, focus, etc...). The only files that should need changing are `components/Button.tsx` and `theme/index.tsx`

- to see a completed version of the demo that is customizable through theming `git checkout completed`

#### Topics to discuss

1. Why use a CSS-in-JS framework
2. High level what is fela doing under the hood
3. Building a button in `components/Button.tsx`

4. Update button to use Fela Component (you will recieve an error until ButtonStyle is defined)

```
class Button extends React.Component<IButton, {}> {
  public render() {
    return (
      <FelaComponent
        rule={ButtonStyle}
        render={({ className }: any) => {
          return (
            <button className={className}>
              {children}
            </button>
          );
        }}
      />
    );
  }
}
```

5. Add some default styles to the button using a rule named `ButtonStyle`

```
function ButtonStyle(props: IButton): any {
  return {
    color: "grey",
    borderColor: "rgb(230, 232, 233)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "4px",
    cursor: "pointer",
    padding: "8px 10px",
  }
}
```

6. Add some styling for psuedo classes

```
function ButtonStyle(props: IButton): any {
  return {
    color: "grey",
    borderColor: "grey",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "4px",
    cursor: "pointer",
    padding: "8px 10px",

    onFocus: {
      outline: "none"
    },

    onHover: {
      color: "lightgrey",
      borderColor: "lightgrey"
    },

    onActive: {
      color: "darkgrey",
      borderColor: "darkgrey"
    }
  }
}
```

7. Style Button as a function of props, lets add a prop `bg` and add background and a disabled state to `ButtonStyle`

```
function ButtonStyle(props: IButton): any {
  const style: any = {
    background: props.bg,

    borderColor: "rgb(230, 232, 233)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "4px",
    cursor: "pointer",
    padding: "8px 10px",

    onFocus: {
      outline: "none"
    },

    onHover: {
      color: "lightgrey",
      borderColor: "lightgrey"
    },

    onActive: {
      color: "darkgrey",
      borderColor: "darkgrey"
    }
  }

  if (props.disabled) {
    style.cursor = "not-allowed";
    style.onHover = undefined;
  }

  return style
}
```

8. Use a theme file to style button

in `theme/index.tsx` lets define "primary"

```
export default {
  primary: {
    background: "mediumseagreen",
    color: "green",

    onActive: {
      background: "darkgreen"
    },

    onHover: {
      background: "lightgreen"
    }
  }
}
```

now add a primary prop to button

lastly update your `ButtonStyle` function

```
function ButtonStyle(props: IButton): any {
  const style: any = {
    background: props.bg,

    borderColor: "rgb(230, 232, 233)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "4px",
    cursor: "pointer",
    padding: "8px 10px",

    onFocus: {
      outline: "none"
    },

    onHover: {
      color: "lightgrey",
      borderColor: "lightgrey"
    },

    onActive: {
      color: "darkgrey",
      borderColor: "darkgrey"
    }
  }

  if (props.primary) {
    _.merge(style, props.theme.primary)
  }

  if (props.disabled) {
    style.cursor = "not-allowed";
    style.onHover = undefined;
  }

  return style
```
