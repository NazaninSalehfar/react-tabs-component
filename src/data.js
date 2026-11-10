export const tabs = [
  {
    id: 1,
    title: "Components",
    content:
      "A component is a reusable piece of UI written as a JavaScript function that returns JSX. Instead of building one huge page, you split it into small parts like Tab and TabContent, and combine them together.",
  },
  {
    id: 2,
    title: "Props",
    content:
      "Props are the inputs of a component. A parent passes data down to its child through props, and the child only reads them. This is how one Tab component can be reused four times with different titles.",
  },
  {
    id: 3,
    title: "State",
    content:
      "State is data that can change over time. When state changes, React re-renders the component so the screen stays in sync. In this app, the active tab is stored in state with useState.",
  },
  {
    id: 4,
    title: "Hooks",
    content:
      "Hooks are special functions that let components use React features. useState keeps data, and useEffect runs side effects. Here, useEffect saves the active tab in localStorage so it is remembered next time.",
  },
];
