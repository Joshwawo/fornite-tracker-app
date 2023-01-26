import DailyOfferts from "@/components/DailyOfferts";
import useShop from "@/context/ShopProvider";
import SkeletonCard from "@/components/ui/SkeletonCard";

const HomePage = () => {
  const { data, isLoading, fetchError } = useShop();

  if (isLoading)
    return Array.from({ length: 5 }, (_, i) => <SkeletonCard key={i} />);

  if (fetchError)
    return <p className="bg-red-200 text-red-500">Something went wrong</p>;
  return (
    <section>
      <div className=" h-screen">
        <div className="grid grid-cols-2 md:grid-cols-5 container mx-auto 2xl:grid-cols-7  ">
          {data?.data?.daily?.entries.map((item) => (
            <div key={item.offerId}>
              <DailyOfferts item={item} />;
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
