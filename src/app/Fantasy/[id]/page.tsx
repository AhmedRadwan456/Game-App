import Link from "next/link";
import React from "react";
import Image from "next/image";
import GameDetails, {
  getDataDetails,
} from "@/app/_component/GameApiDetails/GameApiDetails";

const FantasyGameDetails = async ({ params }: { params: GameDetails }) => {
  const ID = params.id;

  if (!ID) {
    return <div>Error: Game ID is not provided.</div>;
  }

  const Details = await getDataDetails(Number(ID));

  return (
    <div className=" mx-auto max-w-2xl px-2 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-0">
        <div className="flex justify-center items-center ">
          <div>
            <Image
              className=" w-auto h-auto rounded-md"
              src={Details.thumbnail}
              alt={Details.title}
              priority={false}
              width={600}
              height={600}
            />
          </div>
        </div>

        <div className="">
          <h2>
            Title:{" "}
            <span className="text-white  h-4 text-opacity-50">
              {Details.title}
            </span>{" "}
          </h2>
          <h4>
            Categories:{" "}
            <span className="text-white text-opacity-50 h4">
              {Details.genre}
            </span>
          </h4>
          <h4>
            Platform:{" "}
            <span className="text-white text-opacity-50 h4">
              {Details.platform}
            </span>
          </h4>
          <h4>
            Status:{" "}
            <span className="text-white text-opacity-50 h4">
              {Details.status}
            </span>
          </h4>
          <p className="text-white text-opacity-50 my-3">
            {Details.description}
          </p>
          <Link
            href={Details.freetogame_profile_url}
            target="_blank"
            className="bg-gray-400 p-2 rounded-md max-w-full transition hover:bg-slate-200 text-black "
          >
            {" "}
            Show Game
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FantasyGameDetails;
