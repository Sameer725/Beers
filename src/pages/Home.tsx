import React from "react";

import { useBeers } from "api";
import { Button, FullPageFallback, Grid, GridItem, Tooltip } from "components";
import { Beer, DataResponse } from "types";

const BeerRecord = ({ beer }: { beer: Beer }) => {
  return (
    <GridItem>
      <Tooltip
        message={`ingredients: ${Object.keys(beer.ingredients).join(", ")}`}
      >
        <img
          className="h-24 w-24 object-contain"
          src={beer.image_url}
          alt={beer.name}
        />
      </Tooltip>

      <div className="w-full  h-full  ml-5 overflow-hidden group">
        <div className="absolute bg-blue hidden top-0 bottom-0 left-0 right-0  group-hover:flex opacity-10 pointer-events-none" />

        <div className="prose">
          <h3 className="m-0 tracking-wide">{beer.name}</h3>
          <h4 className="text-yellow m-0">{beer.tagline}</h4>
          <p className="text-ellipsis line-clamp-2 overflow-hidden">
            {beer.description}
          </p>
        </div>
      </div>
    </GridItem>
  );
};

const BeerList = ({ pages }: { pages: DataResponse[] }) => {
  return (
    <Grid>
      {pages.map((page) => (
        <React.Fragment key={`page-${page.nextPage}`}>
          {page.data.map((beer) => (
            <BeerRecord beer={beer} key={`Beer-${beer.id}`} />
          ))}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export const Home = () => {
  const { data, isFetchingNextPage, fetchNextPage, isLoading, isError } =
    useBeers(1);

  return isLoading ? (
    <FullPageFallback message="Loading Data.." />
  ) : isError || !data?.pages.length ? (
    <FullPageFallback message="No Data To Display" />
  ) : (
    <div className=" md:w-11/12 p-4 my-1 mx-auto ">
      <BeerList pages={data?.pages ?? []} />

      <div className="text-center">
        <Button disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading More Data..." : "Load More"}
        </Button>
      </div>
    </div>
  );
};
