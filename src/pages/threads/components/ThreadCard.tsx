import React from "react";
import Link from "next/link";
import Image from "next/image";

import { shortenAddress } from "../../../modules/utils";
import { ThreadState } from "../../../modules/reducers/thread";

const ThreadCard = (props: ThreadState) => {
  return (
    <Link
      className="w-full rounded break-words border flex justify-between max-h-48"
      href={`/threads/${props.id}`}
    >
      <div className="flex px-4 py-4">
        <article className="w-full ml-4 overflow-auto">
          <div className="flex items-center">
            <h6 className="text-sm">{shortenAddress(props.author)}</h6>
            <p className="ml-4 text-xs text-stone-500">
              {props.participant}명 참여
            </p>
            <p
              className={`ml-4 font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400 hover:from-sky-500 hover:to-violet-500`}
            >
              참여 가능
            </p>
            <p className="ml-4 flex text-xs bg-gray-200 rounded-full px-3 py-1 text-gray-700">
              <p className="hidden md:block">Reward</p>
              <Image
                className="h-4 pl-0 md:pl-2"
                src="/icons/polygon-logo.svg"
                alt="polygon"
                width={25}
                height={25}
              />
              <span className="pl-2 text-violet-600 font-bold">
                {props.totalReward / props.rewardCount}
              </span>
            </p>
          </div>
          <div id="content" className="mt-2">
            <h3 className="mb-2 font-bold">{props.title}</h3>
            <p className="max-w-7xl text-gray-700 text-xs line-clamp-3 text-ellipsis leading-7">
              {props.summary}
            </p>
          </div>
        </article>
      </div>
      <div>
        {/* <Image
          className="hidden h-full rounded md:flex"
          src={props.thumbnail}
          width={200}
          height={300}
          alt={props.title}
        /> */}
      </div>
    </Link>
  );
};

export default ThreadCard;
