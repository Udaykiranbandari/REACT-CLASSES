What are PropTypes in React?
PropTypes are a built-in type-checking system in React (via the prop-types library) used to validate the types of props passed to a component. They help ensure that components receive the correct type of data, reducing bugs and improving code quality.

Purpose of PropTypes
To catch bugs early during development.

To document the expected types of props for a component.

To improve code readability and maintainability.

To act as a lightweight alternative to TypeScript for type-checking.

How PropTypes Work
PropTypes are declared as a static property on a component.

During development, if the passed props do not match the expected types, React will log a warning in the console.

They do not enforce types at runtime or in production builds—only warnings in development mode.

Common PropTypes
PropTypes.string – for strings

PropTypes.number – for numbers

PropTypes.bool – for booleans

PropTypes.array – for arrays

PropTypes.object – for objects

PropTypes.func – for functions

PropTypes.node – for anything that can be rendered (string, number, JSX)

PropTypes.element – for React elements

PropTypes.any – for any type (not recommended unless necessary)

Advanced Types
PropTypes.oneOf – restricts to a specific set of values.

PropTypes.shape – specifies the structure of an object prop.

PropTypes.arrayOf – specifies the type of elements in an array.

Limitations of PropTypes
Only work in development mode.

Do not provide compile-time checking.

Do not enforce deep validation.

Not a replacement for TypeScript.

