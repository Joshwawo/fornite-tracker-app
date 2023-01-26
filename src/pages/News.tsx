import BattleRoyale from "@/components/news/BattleRoyale";
import Swt from "@/components/news/Swt";
import SkeletonCard from "@/components/ui/SkeletonCard";
import useShop from "@/context/ShopProvider";

const News = () => {
  const { newsLoading, newsError } = useShop();

  if (newsLoading) {
    return (
      <div className="">
        {Array.from({ length: 5 }, (_, i) => <SkeletonCard key={i} />)}
      </div>
    )
  }
    
  if (newsError) return <p className="bg-red-200 text-red-500">Something went wrong</p>;
    

  return (
    <section>
      <div className="container mx-auto">
        <p className=" mx-2 lg:mx-0 font-bold text-2xl text-gray-800 capitalize pb-10 pt-5">
          Battle Royale News
        </p>
        <BattleRoyale />
        <p className=" mx-2 lg:mx-0  font-bold text-2xl text-gray-800 capitalize pb-10 pt-10">
          Save the world News
        </p>
        <Swt />
      </div>
    </section>
  );
};

export default News;
