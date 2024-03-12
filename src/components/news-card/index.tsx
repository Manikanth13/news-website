/* eslint-disable @next/next/no-img-element */
import React from "react";
import { NewsEntity } from "@app/data/entity/news";
import { RenderIf } from "../render-if";
import Image from "next/image";

interface NewsCardProps {
  variant: "primary" | "secondary";
  newsItem: NewsEntity;
  handleRedirect: () => void;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  variant,
  newsItem,
  handleRedirect,
}) => {
  return (
    <>
      <RenderIf condition={variant === "primary"}>
        <div
          className="md:h-225 md:w-130 m-3 rounded-lg object-cover flex bg-no-repeat bg-cover flex-col justify-end"
          style={{
            backgroundImage: `url(${newsItem.image})`,
            backgroundSize: "fill",
          }}
        >
          <div className="bg-gradient-to-b p-3 rounded-lg text-white from-transparent to-black-primary h-2/3 flex justify-end flex-col">
            <p className="text-2xl font-bold">{newsItem.title}</p>
            <p className="flex opacity-50 text-gray-200">
              <span>{newsItem.publicationHouse}</span>
            </p>
            <p className="opacity-70 text-sm">{newsItem.publicationDate}</p>
            <button
              onClick={handleRedirect}
              className="hover:bg-gray-100 hover:text-white hover:border-transparent transition-all duration-150 ease-in-out border b-2 mt-2 bg-transparent rounded-lg py-2"
            >
              READ MORE
            </button>
          </div>
        </div>
      </RenderIf>

      <RenderIf condition={variant === "secondary"}>
        <div className=" items-center h-[300px] p-3 md:w-68 m-3 border b-2 border-black-primary flex bg-no-repeat bg-cover flex-col">
          <div className="bg-gradient-to-b rounded-lg flex items-center md:justify-end flex-col">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              draggable={false}
              className="rounded-lg w-full h-28"
            />
            <div className="h-0.5 border-bottom b-2 border-gray-50my-1 opacity-50"></div>
            <p className="text-2xl truncate w-56  font-bold">
              {newsItem.title}
            </p>
            <p className="flex opacity-50">
              <span>{newsItem.publicationHouse}</span>
            </p>
            <p className="opacity-70 text-sm">{newsItem.publicationDate}</p>
            <button
              onClick={handleRedirect}
              className="hover:bg-gray-100 border-black-primary hover:text-white px-2 hover:border-transparent transition-all justify-self-end duration-150 ease-in-out border b-2 mt-2 bg-transparent rounded-lg py-2"
            >
              READ MORE
            </button>
          </div>
        </div>
      </RenderIf>
    </>
  );
};
