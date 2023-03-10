import React from "react";
import Link from "next/link";

interface Props {
  link: string;
  image: string;
  name: string;
  role: string;
}

const MemberCard = ({ link, image, name, role }: Props) => {
  return (
    <Link href={`${link}`} target="_blank">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-48" src={image} alt={name} />
        <div className="px-4 py-4">
          <div className="font-bold text-xl mb-1">{name}</div>
          <p className="text-gray-700 text-base">{role}</p>
        </div>
      </div>
    </Link>
  );
};

export default MemberCard;
