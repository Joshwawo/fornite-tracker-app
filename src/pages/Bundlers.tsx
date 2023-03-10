import BundlersCards from "@/components/BundlersCard";
import SkeletonCard from "@/components/ui/SkeletonCard";
import useShop from "@/context/ShopProvider";
const Bundlers = () => {
  const { data, isLoading, fetchError } = useShop();

  if (isLoading) {
    return (
      <div className="">
        {Array.from({ length: 5 }, (_, i) => <SkeletonCard key={i} />)}
      </div>
    )
  }

  if (fetchError)
    return <p className="bg-red-100 text-red-500">Something went wrong</p>;

  return (
    <section className="">
      <div className="grid grid-cols-2 md:grid-cols-5 container mx-auto 2xl:grid-cols-7">
        {data?.data.featured.entries
          .filter((item) => item.bundle !== null)
          .map((item) => (
            <div className="" key={item.offerId}>
              <BundlersCards item={item} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Bundlers;
