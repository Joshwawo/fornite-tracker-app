interface rareTypes {
  rare: string;
}
type RarityColor = {
  [key: string]: string;
};

type Props = {
  children: rareTypes["rare"];
};

const Comparator = ({ children }: Props) => {
  const rarity: RarityColor = {
    common: "text-gray-400",
    uncommon: "text-green-400",
    rare: "text-blue-500",
    epic: "text-orange-500",
    legendary: "text-orange-500",
    mythic: "text-purple-500",
    exotic: "text-pink-500",
    dark: "text-black",
    marvel: "text-red-700",
    dc: "text-blue-700",
    starwars: "text-yellow-500",
    icon: "text-violet-500",
  };
  return <p className={`${rarity[children]} first-letter:uppercase`}>{children}</p>;
};

export default Comparator;
