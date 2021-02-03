import "../TextCard/TextCard.css";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function TextCardLoader() {
  return (
    <React.Fragment>
      <SkeletonTheme color="white" highlightColor="lightgrey">
        <div className="textCard__wrapper">
          <div>
            <Skeleton className="textCard__header" />
          </div>
        </div>
      </SkeletonTheme>
    </React.Fragment>
  );
}

export default TextCardLoader;
