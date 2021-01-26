import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import React from 'react'
import './RecipeCardLoader.css';

function RecipeCardLoader() {

    return (
        <SkeletonTheme color="white" highlightColor="lightgrey">
            <div className="recipeCardLoader__wrapper">
                <div className="recipeCardLoader__imgWrapper">
                    <Skeleton circle={true} height={70} width={70} />
                </div>
                <div>
                    <Skeleton className="recipeCardLoader__header" />
                </div>
            </div>
        </SkeletonTheme>
    );
}

export default RecipeCardLoader;
