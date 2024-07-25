

# **react-compkit**

A versatile and customizable React component library designed to simplify UI development with pre-built and easy-to-use components.

## **Table of Contents**
- [Installation](#installation)
- [Usage](#usage)
  - [Button](#button)
    - [Props](#button-props)
    - [Usage](#button-usage)
  - [Container](#container)
    - [Props](#container-props)
    - [Usage](#container-usage)
- [Contributing](#contributing)
- [License](#license)

## **Installation**

To install the component library, run the following command in your project directory:

```bash
npm install react-compkit
```

or using Yarn:

```bash
yarn add react-compkit
```

## **Usage**

### **Button**

The `Button` component provides customizable buttons for various use cases, including different styles, sizes, and icons.

#### **Button Props**

| Prop          | Type         | Description                                                                                              | Default             |
|---------------|--------------|----------------------------------------------------------------------------------------------------------|---------------------|
| `type`        | `string`     | Specifies the button type (`button`, `submit`, `reset`).                                                 | `button`            |
| `content`     | `string`     | The text content displayed on the button.                                                                | Derived from `type` |
| `contentType` | `string`     | Determines if the button displays text, an icon, or both (`ico-text`, `ico`).                            | `text`              |
| `ico`         | `string`     | URL of the icon image.                                                                                   | -                   |
| `icoSize`     | `string`     | Size of the icon.                                                                                        | `16px`              |
| `onClick`     | `function`   | Function to handle click events.                                                                         | -                   |
| `disabled`    | `boolean`    | Disables the button if true.                                                                             | `false`             |
| `noBorder`    | `boolean`    | Removes the button border if true.                                                                       | `false`             |
| `inverted`    | `boolean`    | Inverts the background and text colors if true.                                                          | `false`             |
| `bg`          | `string`     | Background color.                                                                                        | `white`             |
| `color`       | `string`     | Text color.                                                                                              | `black`             |
| `borderColor` | `string`     | Border color.                                                                                            | `black`             |
| `compact`     | `boolean`    | Reduces the padding for a more compact appearance if true.                                               | `false`             |
| `circular`    | `boolean`    | Gives the button a circular shape if true.                                                               | `false`             |
| `fontSize`    | `string`     | Font size of the button text.                                                                            | `1rem`              |
| `full`        | `boolean`    | Makes the button take the full width of its container if true.                                           | `false`             |
| `gap`         | `string`     | Space between icon and text when `contentType` is `"ico-text"`.                                          | `0px`               |
| `capital`     | `boolean`    | Capitalizes the text if true.                                                                            | `false`             |
| `upper`       | `boolean`    | Transforms the text to uppercase if true.                                                                | `false`             |
| `preset`      | `string`     | Predefined styles for the button (`default`, `primary`, `secondery`, `basic`).                           | -                   |
| `presetColor` | `string`     | Color for the `"basic"` preset. Available values: `red`, `blue`, `black`, `yellow`, `green`, `grey`, `pink`, `orange`, `brown`. | -                   |
| `bgHover`     | `string`     | Background color on hover.                                                                               | -                   |
| `colorHover`  | `string`     | Text color on hover.                                                                                     | -                   |

#### **Button Usage**

Basic Button:
```jsx
import React from 'react';
import { Button } from 'your-component-library-name';

const App = () => {
  return (
    <div>
      <Button content="Click Me" onClick={() => alert('Button clicked!')} />
    </div>
  );
}

export default App;
```

Primary Button with Preset:
```jsx
<Button content="Primary" preset="primary" />
```

Secondary Button:
```jsx
<Button content="Secondary" preset="secondery" />
```

Icon Button:
```jsx
<Button content="Icon Button" contentType="ico-text" ico="icon-url" icoSize="20px" />
```

### **Container**

The `Container` component is a flexible container for organizing content, with options for layout, styling, and more.

#### **Container Props**

| Prop           | Type      | Description                                                                                                  | Default       |
|----------------|-----------|--------------------------------------------------------------------------------------------------------------|---------------|
| `header`       | `string`  | Text content for the header.                                                                                  | -             |
| `headerType`   | `string`  | Specifies the type of header content (`ico`, `ico-text`).                                                     | -             |
| `ico`          | `string`  | URL of the icon image to display in the header.                                                               | -             |
| `icoSize`      | `string`  | Size of the header icon.                                                                                      | `15px`        |
| `headerSize`   | `string`  | Font size of the header text.                                                                                 | `18px`        |
| `headerColor`  | `string`  | Color of the header text.                                                                                     | `black`       |
| `headerFamily` | `string`  | Font family for the header text.                                                                              | `sans-serif`  |
| `headerAlign`  | `string`  | Alignment of the header content (`left`, `center`, `right`).                                                  | `left`        |
| `vertical`     | `boolean` | If true, arranges header and content vertically.                                                              | `false`       |
| `height`       | `string`  | Height of the container.                                                                                      | `fit-content` |
| `width`        | `string`  | Width of the container.                                                                                       | `100%`        |
| `bg`           | `string`  | Background color of the container.                                                                            | `transparent` |
| `padding`      | `string`  | Padding inside the container.                                                                                 | `10px`        |
| `color`        | `string`  | Text color inside the container.                                                                              | `black`       |
| `family`       | `string`  | Font family for the container content.                                                                        | `sans-serif`  |
| `fontSize`     | `string`  | Font size for the container content.                                                                          | `16px`        |
| `align`        | `string`  | Text alignment inside the container (`left`, `center`, `right`).                                              | `left`        |
| `rounded`      | `string`  | Border radius of the container (`full` for full rounding, or any other CSS border-radius value).               | -             |
| `overflow`     | `boolean` | If true, hides overflowing content.                                                                           | `false`       |
| `divider`      | `boolean` | If true, displays a divider line below the header.                                                            | `false`       |
| `content`      | `node`    | The main content to display inside the container.                                                            | -             |

#### **Container Usage**

Basic Container:
```jsx
import React from 'react';
import { Container } from 'your-component-library-name';

const App = () => {
  return (
    <Container header="My Container" content={<p>This is some content inside the container.</p>} />
  );
}

export default App;
```

Container with Icon and Header:
```jsx
<Container 
  header="My Container" 
  headerType="ico-text" 
  ico="icon-url" 
  content={<p>This container has an icon in the header.</p>} 
/>
```

Vertical Layout with Divider:
```jsx
<Container 
  header="Vertical Layout" 
  vertical 
  divider 
  content={<p>Content is arranged vertically.</p>} 
/>
```

*Additional components and usage examples will be added as the library grows.*


## **Contributing**

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request. For major changes, please open an issue to discuss what you would like to change.

### **GitHub Repository:**
https://github.com/GLXALOKESH/CompKit

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

