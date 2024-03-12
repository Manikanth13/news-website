/* eslint-disable @next/next/no-img-element */
import { Loader } from "@app/components/loader";
import { NewsEntity } from "@app/data/entity/news";
import { useGetNews } from "@app/data/query/useGetNews";
import { useRouter } from "next/router";
import React from "react";

const NewsDetail: React.FC = () => {
  const { data, isLoading } = useGetNews();
  const router = useRouter();
  const slug = router.query.slug;

  const detail = data?.filter((item) => item.id === slug)?.[0] as NewsEntity;

  return (
    <div className="p-10 w-container mx-auto h-full">
      {isLoading && (
        <div className="flex items-center h-full justify-center w-full">
          <Loader />
        </div>
      )}

      {detail && (
        <>
          <div className="flex gap-2">
            <p
              onClick={() => {
                router.push("/");
              }}
              className="text-blue-600 cursor-pointer underline"
            >
              Home{" "}
            </p>
            /<p>{detail?.category}</p>
          </div>
          <div className="w-130 md:w-full">
            <h1 className="my-10 font-extrabold text-5xl">{detail?.title}</h1>
            <img
              className="md:w-full w-auto h-[300px] object-fill md:h-[450px] border-2 mb-5 border-black-primary"
              src={detail?.image}
              alt={detail?.title}
            />
            <div>
              <div className="border uppercase font-bold b-2 text-white w-max bg-red-600 rounded-lg p-1 ">
                <span>{detail?.publicationHouse}</span>
              </div>
              <div className="opacity-70 text-sm">
                {detail?.publicationDate}
              </div>
            </div>
            <p className="font-bold text-2xl">{detail?.title}</p>
            <p className="text-sm">{detail?.content}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsDetail;
