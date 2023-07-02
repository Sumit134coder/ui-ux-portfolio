import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({
  imgSrc = "",
  heading = "",
  tags = [],
  description = "",
  href = "",
}) => {
  return (
    <div className="border-2 rounded-xl p-3 bg-white text-[#A41108] transition hover:shadow-xl hover:-translate-y-3">
      <div className="relative">
        <Image
          src={imgSrc}
          alt="project-image"
          className="object-cover h-[40vh] w-full rounded-lg"
        />

        {/* --tags container--- */}
        <div className="absolute bottom-4 text-sm px-4 flex items-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#A41108] text-white rounded-full py-2 px-3 font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* --Content--- */}
      <div className="my-2">
        <h5 className="text-lg font-semibold">{heading}</h5>
        <p>
          {description}
        </p>
      </div>

      <div className="flex justify-end">
        <Link href={href} className="bg-[#A41108] text-white rounded-full py-3 px-6 font-semibold hover:shadow-lg transition">
          View
        </Link>
      </div>
    </div>
  );
};

export default Card;
