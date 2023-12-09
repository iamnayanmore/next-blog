import React from "react";
import { IArticle } from "../types";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "../utils";

interface IPropType {
  article: IArticle;
}

const BlogCard = ({ article }: IPropType) => {
  return (
    <div>
      <Link href={`/article/${article.attributes.slug}`}>
        <h1 className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
          {article.attributes.title}
        </h1>
      </Link>
      <div className="flex items-center my-4">
        <div className="rounded-lg overflow-hidden flex items-center justify-center mr-2">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
            alt=""
            width={40}
            height={40}
          />
        </div>
        <span className="text-sm font-bold text-sm-600">
          {article.attributes.author.data.attributes.firstName}{" "}
          {article.attributes.author.data.attributes.lastName} on &nbsp;
        </span>
        <span className="text-gray-400">
          {formatDate(article.attributes.createdAt)}
        </span>
      </div>
      <p>
        {`${article.attributes.shortDescription.slice(0, 230)}${
          article.attributes.shortDescription.length > 230 ? "..." : ""
        }`}
      </p>
    </div>
  );
};

export default BlogCard;
