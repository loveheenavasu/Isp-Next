import dynamic from "next/dynamic";

// manually import all PageComponents as Next restricts dynamic import from string literals
// TODO: Add the remaining PageComponents to match Flexible Fields

const PageComponents_Text = dynamic(() =>
  import("components/PageComponents/Text")
);
const PageComponents_Banner = dynamic(() =>
  import("components/PageComponents/Banner")
);
const PageComponents_SeoPage = dynamic(() =>
  import("components/PageComponents/SeoPage")
);
const PageComponents_ImageRight = dynamic(() =>
  import("components/PageComponents/ImageRight")
);

const Components = new Map();
Components.set("PageComponents_Banner", PageComponents_Banner);
Components.set("PageComponents_SeoPage", PageComponents_SeoPage);
Components.set("PageComponents_ImageRight", PageComponents_ImageRight);

export default Components;
