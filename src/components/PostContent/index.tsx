import React, { useState } from "react";
import Image from "next/image";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useAppSelector } from "../../state/hooks";
import { IThread } from "../../types";

import PolygonLogo from "../../assets/icons/polygon-logo.svg";
import { shortenAddress } from "../../utils";

const PostContent = (props: IThread) => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const { account, library } = useWeb3React<Web3Provider>();

  const handleClick = async () => {
    if (!library) {
      return;
    } else {
      // await library.provider.request({
      //   method: "personal_sign",
      //   params: ["Check your payment details.", account],
      // });
    }
  };

  return (
    <div className="w-full">
      <div className="flex mb-4">
        <div className="flex items-center justify-between w-full">
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
                src={PolygonLogo}
                alt="polygon"
              />
              <span className="pl-2 text-violet-600 font-bold">
                {props.totalReward / props.rewardCount}
              </span>
            </p>
          </div>
        </div>
      </div>
      <h2 className="mb-4 font-bold text-2xl">{props.title}</h2>
      <article className={`prose break-all max-w-none text-base leading-7`}>
        {props.content}
      </article>
    </div>
  );
};

export default PostContent;
