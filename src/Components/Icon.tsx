import { ReactComponent as IconMemory } from "../assets/images/icon-memory.svg";
import { ReactComponent as IconReaction } from "../assets/images/icon-reaction.svg";
import { ReactComponent as IconVerbal } from "../assets/images/icon-verbal.svg";
import { ReactComponent as IconVisual } from "../assets/images/icon-visual.svg";

const Icon = ({ name }: { name: string }) => {
  var icons = [
    { name: "icon-memory", component: IconMemory },
    { name: "icon-reaction", component: IconReaction },
    { name: "icon-verbal", component: IconVerbal },
    { name: "icon-visual", component: IconVisual },
  ];

  const Component = icons.find((x) => x.name === name)?.component;

  if (Component === undefined) {
    throw Error(`Icon with name ${name} not found`);
  }

  return <Component />;
};

export default Icon;
