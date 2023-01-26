import { useState } from "react";
import { DailyEntry } from "@/types/Shop";
import pavoImg from "@/assets/img/vbuck.webp";
import SvgLoading from "@/assets/img/svg-loading.svg";
import { formatDates } from "@/helpers/formatDates";
import Comparator from "@/components/helpers/Comparator";
interface DailyOffertsProps {
  item: DailyEntry;
}

const DailyOfferts = ({ item }: DailyOffertsProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  
  // console.log(item);
  return (
    <article className="shadow bg-white mx-2 my-4">
      {loading ? (
        <img
          src={SvgLoading}
          alt="loading.."
          onLoad={() => setLoading(false)}
        />
      ) : (
        <img
          src={item.newDisplayAsset.materialInstances[0].images.Background}
          alt="pavo"
        />
      )}
      <div className="text-sm font-semibold mx-2 my-2">
        <p className="">{item.items[0].name}</p>
        <p>{item.items[0].type.displayValue}</p>
        <Comparator>{item.items[0].rarity.value}</Comparator>
        <div className="mt-2 flex items-end ">
          <img src={pavoImg} alt="" className="w-6" />
          <p>{item.regularPrice}</p>
        </div>
      </div>

      <div className="flex  mx-2 py-2">
        <button
          className="rounded bg-blue-100 text-blue-500 px-2 mb-4"
          type="button"
          onClick={() => setShowModal(true)}
        >
          See Complete
        </button>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-3 ">
                  <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-blue-300 rounded-full">
                    <img
                      src={item.items[0].images.icon}
                      alt={item.items[0].name}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="mt-2 text-center sm:ml-4 sm:text-left">
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 uppercase">
                        {item.items[0].name}
                      </h4>
                      <p className="mt-2 text-[15px] leading-relaxed text-gray-500 block">
                        {item.items[0].introduction.text}{" "}
                        <span className="">
                          {formatDates(item.items[0].added)}
                        </span>
                      </p>
                    </div>
                    <div className="randoms text-[15px] leading-relaxed text-gray-500">
                      <a
                        target={"_blank"}
                        href={`https://www.youtube.com/watch?v=${item.items[0].showcaseVideo}`}
                        className="text-red-500 block"
                      >
                        See on youtube
                      </a>

                      <p className="font-semibold text-black uppercase">
                        Set{" "}
                        <span className="font-normal mt-2 text-[15px] leading-relaxed text-gray-500 capitalize">
                          {item.items[0].set?.text
                            ? item.items[0].set?.text
                            : "no available"}
                        </span>
                      </p>

                      {item?.items?.[0]?.variants?.[0] ? (
                        <p className="font-semibold mt-2 uppercase text-black">
                          Variants
                        </p>
                      ) : (
                        ""
                      )}
                      {
                        // item?.items?.[0]?.variants?.[0]?.options?.[0].tag

                        item?.items?.[0]?.variants?.[0]?.options.map(
                          (item, i) => (
                            <div className="flex " key={i}>
                              <div>
                                <p>{item.tag}</p>
                                <p>{item.name}</p>
                              </div>
                              <img
                                src={item.image}
                                alt={"variant"}
                                className=""
                              />
                            </div>
                          )
                        )
                      }
                    </div>

                    <div className="space-y-1 my-2">
                      <p className="font-semibold uppercase">Sale history </p>
                      {item.items[0].shopHistory.map((item, index) => (
                        <p
                          key={index}
                          className="text-[15px] leading-relaxed text-gray-500"
                        >
                          {formatDates(item)}
                        </p>
                      ))}
                    </div>

                    <div className="items-center gap-2 mt-3 sm:flex">
                      <button
                        className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </article>
  );
};

export default DailyOfferts;
