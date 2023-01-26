import { useState } from "react";
import { FeaturedEntry } from "@/types/Shop";
import { formatDates } from "@/helpers/formatDates";
import Comparator from "@/components/helpers/Comparator";
import PavoIcon from "@/assets/img/vbuck.webp";
import SvgLoading from "@/assets/img/svg-loading.svg";

interface BundlersCardsProps {
  item: FeaturedEntry;
}

const BundlersCards = ({ item }: BundlersCardsProps) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <article className="shadow bg-white mx-2 my-4 mb-5">
      {loading ? (
        <img src={SvgLoading} loading="lazy" onLoad={() => setLoading(false)} />
      ) : (
        <img
          src={item.newDisplayAsset.materialInstances[0].images.Background}
          alt="image"
          loading="lazy"
        />
      )}
      <div className="text-sm  mx-2 my-2">
        <p className="font-bold">{item.bundle?.name}</p>
        <p className="font-semibold">{item.bundle?.info}</p>
        <p>{item.section.name} - series</p>

        <div className="mt-2 flex items-end gap-1">
          <p className="font-semibold">Regular Price</p>
          <img src={PavoIcon} alt="pavo icon" className="w-5" />
          <p className="">{item.regularPrice}</p>
        </div>
        <div className="mt-2 flex items-end gap-1">
          <p className="font-semibold">Final Price</p>
          <img src={PavoIcon} alt="pavo icon" className="w-5" />
          <p className="">{item.finalPrice}</p>
        </div>
      </div>
      <div className="flex mx-2 py-2  ">
        <button
          className="text-blue-600 bg-blue-100 capitalize rounded-md px-2 "
          type="button"
          onClick={() => setShowModal(true)}
        >
          See all items
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
              <div className="relative w-full max-w-5xl p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-3 ">
                  <div className="mt-2 text-center sm:ml-4 sm:text-left">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 ">
                        {item.bundle?.name}
                      </h4>
                      <p className="mt-2 text-[15px] leading-relaxed text-gray-500 block mb-2">
                        {item?.items[0].introduction?.text}{" "}
                        <span className="">
                          {formatDates(item.items[0].added)}
                        </span>
                      </p>
                      <div className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-1">
                        {item.items.map((item) => (
                          <div className="" key={item.id}>
                            {loading ? (
                              <img
                                src={SvgLoading}
                                loading="lazy"
                                onLoad={() => setLoading(false)}
                              />
                            ) : (
                              <img
                                src={item.images.smallIcon}
                                alt={item.name}
                                className="rounded w-40 h-30 object-scale-down"
                                title={item.name}
                                style={{
                                  background: `linear-gradient(10deg, ${`#${item.series?.colors[0]}, #${item.series?.colors[1]}, #${item.series?.colors[2]}, #${item.series?.colors[3]}, #${item.series?.colors[4]}`})`,
                                }}
                              />
                            )}
                            <p className="text-sm leading-relaxed text-black font-semibold block">
                              {item.name}
                            </p>
                            <p className="text-sm leading-relaxed text-gray-500 block">
                              {item.type.displayValue}
                            </p>
                            {item.showcaseVideo ? (
                              <a
                                target={"_blank"}
                                href={`https://www.youtube.com/watch?v=${item.showcaseVideo}`}
                                className="text-red-600 text-sm capitalize"
                              >
                                See on youtube
                              </a>
                            ) : (
                              <span className="text-sm text-red-600 capitalize">
                                No available video
                              </span>
                            )}
                            <Comparator>{item.rarity.value}</Comparator>
                          </div>
                        ))}
                      </div>
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

export default BundlersCards;
