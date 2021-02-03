import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import React from "react";
import "./CategoryCardLoader.css";

function CategoryCardLoader() {
  return (
    <SkeletonTheme color="white" highlightColor="lightgrey">
      <div className="categoryCardLoader__wrapper">
        <div className="categoryCardLoader__imgWrapper">
          <Skeleton circle={true} height={70} width={70} />
        </div>
        <div>
          <Skeleton className="categoryCardLoader__header" />
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default CategoryCardLoader;
