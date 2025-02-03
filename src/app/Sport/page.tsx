import React from "react";
import getData from "../_component/GameApi/GameApi";
import Link from "next/link";
import Image from "next/image";

const Sport = async () => {
  let data = await getData("sports");

  return (
    <div className=" mx-auto max-w-2xl px-2 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex justify-center items-center">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
        {data && data.length > 0 ? (
          <>
            {data.map((game) => {
              return (
                <div
                  key={game.id}
                  className="bg-opacity-50 rounded-lg  bg-slate-300"
                >
                  <div className="rounded-lg overflow-hidden px-3 pb-3">
                    <Link href={`/Sport/${game.id}`}>
                      <Image
                        src={game.thumbnail}
                        alt={game.title}
                        priority={false}
                        width={600}
                        height={600}
                        className="my-3  w-96"
                      />
                      <h3 className="h4 ">{game.title}</h3>
                      <p className=" w-50 text-black">
                        {game.short_description
                          .split(" ")
                          .slice(0, 4)
                          .join(" ")}
                      </p>
                      <div className="flex justify-between">
                        <h3 className="h4">
                          {game.genre.split(" ").slice(0, 1).join(" ")}
                        </h3>
                        <span className="text-center bg-red-700 rounded-md p-1">
                          {game.platform}
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Sport;
