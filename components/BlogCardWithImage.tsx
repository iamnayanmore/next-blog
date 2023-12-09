import React from "react";
import { IArticle } from "../types";
import Link from "next/link";
import Image from "next/image";

interface IPropType {
  article: IArticle;
}

const BlogCardWithImage = ({ article }: IPropType) => {
  return (
    <div className="justify-between bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex items-center h-64 p-10">
      <div>
        <Link href="#">
          <span className="text-2xl w-2/3 text-white py-6 font-bold after:content-[''] after:bg-primary after:block after:w-16 after:h-1 after:rounded-md after:mt-2">
            {article.attributes.title}
          </span>
        </Link>
      </div>
      <Image
        className="ml-5"
        src="/gitbook.svg"
        height={140}
        width={140}
        alt=""
      />
    </div>
  );
};

export default BlogCardWithImage;
