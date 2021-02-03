import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import React from "react";
import "./RecipeCardLoader.css";

function RecipeCardLoader() {
  return (
    <SkeletonTheme color="white" highlightColor="lightgrey">
      <div className="recipeCardLoader__wrapper">
        <Skeleton className="recipeCardLoader__header" />
      </div>
    </SkeletonTheme>
  );
}

export default RecipeCardLoader;
