import dynamic from "next/dynamic";

// manually import all PageComponents as Next restricts dynamic import from string literals
// TODO: Add the remaining PageComponents to match Flexible Fields

const PageComponents_Text = dynamic(() =>
  import("components/PageComponents/Text")
);

const Components = new Map();
Components.set("PageComponents_Text", PageComponents_Text);

export default Components;
