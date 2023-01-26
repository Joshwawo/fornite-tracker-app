import { Fragment, useState } from "react";
import useShop from "@/context/ShopProvider";
import { formatDates } from "@/helpers/formatDates";
import SvgLoading from "@/assets/img/svg-loading.svg";



const BattleRoyale = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { newsData } = useShop();

  return (
    <div className="grid xl:grid xl:grid-cols-2 bg-yellow-40  gap-5  ">
      {newsData?.data.br.motds?.map((news) => (
        <Fragment key={news.id}>
          <div className="flex flex-col items-center  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 p-4 ">
          {loading ? (
                <img src={SvgLoading} alt="loading" onLoad={()=> setLoading(false)} />
              ) : (
                <img
                  className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={news.image}
                  alt=""
                />
              )}
            <div className="flex flex-col justify-between p-4 leading-normal">
              <p className="mb-1 text-sm font-normal text-gray-400 dark:text-gray-600">
                {news.tabTitle}
              </p>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-400 dark:text-gray-600">
                {news.title}
              </h5>
              <p className="mb-3 font-normal text-gray-400 dark:text-gray-600">
                {news.body}
              </p>
              <p className="mb-1 text-sm font-normal text-gray-400 dark:text-gray-600">
                {formatDates(newsData.data.br.date)}
              </p>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default BattleRoyale;
