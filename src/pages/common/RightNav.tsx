import Link from "next/link";
import Image from "next/image";
import React from "react";
const RightNav: React.FC = () => {
  return (
    <div className="w-48 p-2 min-h-screen border-l hidden lg:flex lg:flex-col gap-2">
      <Link href="https://dadaz.io/">
        <Image
          src="https://reveally.s3.ap-northeast-2.amazonaws.com/banners/dadaz.png"
          alt="reveally-banner"
          width={200}
          height={500}
        />
      </Link>
      <Link href="https://linktr.ee/DuckYou18">
        <Image
          src="https://reveally.s3.ap-northeast-2.amazonaws.com/banners/duckyou18.png"
          alt="reveally-banner"
          width={200}
          height={500}
        />
      </Link>
    </div>
  );
};

export default RightNav;
