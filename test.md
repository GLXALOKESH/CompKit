To properly link the props and usage sections in the Table of Contents (TOC) with the respective sections in the README, you need to ensure that the headers in the TOC match the corresponding section headers exactly. In Markdown, links to headers are generated automatically based on the header text, converted to lowercase, and spaces replaced with hyphens. Special characters are typically removed.

Here's an updated version of the README with correctly linked TOC entries:

---

# **YourComponentLibraryName**

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
npm install your-component-library-name
```

or using Yarn:

```bash
yarn add your-component-library-name
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
| `disabled`    | `boolean`