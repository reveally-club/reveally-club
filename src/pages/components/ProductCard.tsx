import React from "react";
import Link from "next/link";

interface Props {
  link: string;
  image: string;
  name: string;
  description: string;
}

const ProductCard = ({ link, image, name, description }: Props) => {
  return (
    <Link href={link} target="_blank">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={image} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
