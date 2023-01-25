import DailyOfferts from "@/components/DailyOfferts";
import useShop from "@/context/ShopProvider";
import SkeletonCard from "@/components/ui/SkeletonCard";

const HomePage = () => {
  const { data, isLoading, fetchError } = useShop();

  if (fetchError) {
    return <div className="bg-red-100 text-red-500">error</div>;
  }

  return (
    <div>
      <div className=" h-screen">
        <div className="grid grid-cols-2 md:grid-cols-5 container mx-auto 2xl:grid-cols-7  ">
          {isLoading
            ? Array.from({length:5}, (_,i)=>(
               <SkeletonCard key={i}/>
            ))
            : data?.data?.daily?.entries.map((item) => {
                return <div   key={item.offerId} className=" ">
                  <DailyOfferts item={item} />;
                </div>
              })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
