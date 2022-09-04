import { useInfiniteQuery } from "react-query";
import { DataResponse } from "types";
import { client } from "utils/apiClient";

const BEERS_QUERY_KEY = "beers";

export const useBeers = (page: number = 0, per_page: number = 10) => {
  return useInfiniteQuery<DataResponse>(
    [BEERS_QUERY_KEY, page],
    async ({ pageParam }) => {
      const pageNum = pageParam ?? page;

      const data = await client({ page: pageNum, per_page });

      return { data, nextPage: pageNum + 1 };
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );
};
