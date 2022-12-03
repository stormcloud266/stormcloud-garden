---
title: How To Build a Reusable Button Component in React
date: 12-1-2022
excerpt: Let's build a reusable button and link component using React and Typescript
category: coding
---

Sometimes we want a component that looks like a button but functions like a link, such as a call-to-action in the header that takes a user to a contact page. In this post we will make a React button component that returns a link or button element based on the props passed to it.

## Setup

If you don't already have a React project to work in, you can clone the source code [here](https://github.com/stormcloud266/reusable-react-button). The project is built using Vite so it has super quick spin up and reload times.

## Create the Button Component

First we will create a `Button` folder inside a `components` folder. Inside there, we will add our `Button.tsx` and `Button.module.css`.

```md
├── src
│ ├── components
│ │ ├── Button
│ │ │ ├── Button.tsx
│ │ │ ├── Button.module.css
```

Let's set up our component with an empty function and interface.

```tsx
import classes from "./Button.module.css";

interface ButtonProps {}

const Button = ({}: ButtonProps) => {};

export default Button;
```

We want the component to return a different element depending on certain props.

If `to` is passed, we will return a React `Link` element; if `href` is passed we will return a regular `a` element. Otherwise, we'll return a `button`.

So let's import `Link`, set up some types, and get our conditionals working. For the content of the button, we're going to pass `children`, so let's import `PropsWithChildren` from React.

```tsx
import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";

import classes from "./Button.module.css";

interface ButtonProps {
  to?: string;
  href?: string;
  onClick?: () => void;
}

const Button = ({
  to,
  href,
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) => {};
```

There will be three different elements in this component, and we might want to share certain attributes among them. Let's create an object where we can add all the shared attributes, so if we need to change them, we can do it in one place.

```tsx
const Button = ({
  to,
  href,
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) => {
  const commonProps = {
    className: classes.button,
  };
};
```

## Final Code

Now all that is left is to create the conditionals and return our elements with their specific attributes.

```tsx
import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";

import classes from "./Button.module.css";

interface ButtonProps {
  to?: string;
  href?: string;
  onClick?: () => void;
}

const Button = ({
  to,
  href,
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) => {
  const commonProps = {
    className: classes.button,
  };

  if (to) {
    return (
      <Link to={to} {...commonProps}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...commonProps}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} {...commonProps}>
      {children}
    </button>
  );
};

export default Button;
```

## Let's Check It Out

Let's try all the variations and see what ends up in the inspector.

Using the component with an on click event:

```tsx
<Button onClick={() => console.log("hello")}>Click Me</Button>
```

```html
<button class="_button_12alw_1">Click Me</button>
```

Linking out to an external site:

```tsx
<Button href="https://google.com">Click Me</Button>
```

```html
<a
  href="https://google.com"
  target="_blank"
  rel="noopener noreferrer"
  class="_button_12alw_1"
>
  Click Me
</a>
```

Linking to another page in our React project:

```tsx
<Button to="/">Click Me</Button>
```

```html
<a class="_button_12alw_1" href="/">Click Me</a>
```

## Wrapping Up

That wraps up our button component. It's a minimal example that can be built upon in many ways, such adding an optional `type` attribute to the button or togglable classes. Let me know what you come up with!

Here is the [full code](https://github.com/stormcloud266/reusable-react-button) for this project, and feel free to reach out on [Twitter](https://twitter.com/stormcloud266). Thank you for reading!
