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
    epic: "text-orange-500",
    rare: "text-blue-500",
    uncommon: "text-green-400",
  };
  return <p className={`${rarity[children]}`}>{children}</p>;
};

export default Comparator;
