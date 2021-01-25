import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import React from 'react'
import './CategoryCard.css';

function CategoryCardLoader(props) {

    return (
        <SkeletonTheme color="white" highlightColor="lightgrey">
            <div className="categoryCard__wrapper">
                <div className="categoryCard__imgWrapper">
                    <Skeleton circle={true} height={70} width={70} />
                </div>
                <div>
                    <Skeleton className="categoryCard__header" />
                </div>
            </div>
        </SkeletonTheme>
    );
}

export default CategoryCardLoader;
