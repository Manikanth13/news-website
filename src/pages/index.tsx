import { DefaultLayout } from "@app/layout";
import { NewsCard } from "@app/components/news-card";
import { useMemo } from "react";
import { CategorisedNews } from "@app/data/types/news";
import { useGetNews } from "@app/data/query/useGetNews";
import { useRouter } from "next/router";
import { Loader } from "@app/components/loader";

export default function Home() {
  const { data: news, isLoading } = useGetNews();

  const router = useRouter();

  const categoriesMapping = useMemo(() => {
    return news?.reduce((acc: CategorisedNews[], curr) => {
      const category = curr.category;
      const item = {
        ...curr,
      };

      if (!acc.some((item: CategorisedNews) => item.category === category)) {
        acc.push({ category, items: [item] });
      } else {
        acc
          .find((item: CategorisedNews) => item.category === category)
          ?.items.push(item);
      }

      return acc;
    }, []);
  }, [news]);

  const tryAgainHandler = () => {
    router.reload();
  };

  return (
    <DefaultLayout>
      {!isLoading && !news && (
        <div className="justify-center h-screen content-center flex-wrap flex flex-col">
          <p className="text-center">Something Went Wrong</p>
          <button
            onClick={tryAgainHandler}
            className="hover:bg-gray-100 w-36 hover:text-white hover:border-transparent border-black-primary transition-all duration-150 ease-in-out border b-2 mt-2 bg-transparent rounded-lg py-2"
          >
            Try Again
          </button>
        </div>
      )}

      {isLoading && (
        <div className="flex items-center h-screen justify-center w-full">
          <Loader />
        </div>
      )}

      <div className="gap-2 flex flex-wrap">
        <div className="flex flex-col">
          {categoriesMapping?.map((section) => {
            const items = section.items;
            const remainingElements = items.slice(1);
            return (
              <div key={section.category}>
                <div>
                  <p className="text-4xl capitalize font-extrabold">
                    {section.category}
                  </p>
                  <div className="h-0.5 bg-gray-600 my-4"></div>
                  <div className="flex  flex-col md:flex-row mb-10">
                    <div>
                      {[items[0]].map((item) => {
                        return (
                          <NewsCard
                            key={item.id}
                            newsItem={item}
                            variant={"primary"}
                            handleRedirect={() => {
                              router.push(`/article-detail/${item.id ?? ""}`);
                            }}
                          />
                        );
                      })}
                    </div>

                    <div className="flex flex-wrap md:flex-row h-max flex-col">
                      {remainingElements.map((item, index) => {
                        return (
                          <NewsCard
                            key={item.id}
                            newsItem={item}
                            handleRedirect={() => {
                              router.push(`/article-detail/${item.id ?? ""}`);
                            }}
                            variant={"secondary"}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DefaultLayout>
  );
}
