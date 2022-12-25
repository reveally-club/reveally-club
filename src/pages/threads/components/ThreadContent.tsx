import React from "react";
import Image from "next/image";

import { shortenAddress } from "../../../modules/utils";
import { ThreadState } from "../../../modules/reducers/thread";
import Viewer from "../../common/Viewer";

const ThreadContent = (props: ThreadState) => {
  return (
    <div className="w-full p-4">
      <div className="flex mb-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <h6 className="text-sm">{shortenAddress(props.author)!}</h6>
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
        </div>
      </div>
      <h2 className="mb-4 font-bold text-2xl">{props.title}</h2>
      <Viewer content={props.content} />
    </div>
  );
};

export default ThreadContent;
