import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import React from 'react'
import './CardLoader.css';

function CardLoader() {

    return (
        <SkeletonTheme color="white" highlightColor="lightgrey">
            <div className="cardLoader__wrapper">
                <div className="cardLoader__imgWrapper">
                    <Skeleton circle={true} height={70} width={70} />
                </div>
                <div>
                    <Skeleton className="cardLoader__header" />
                </div>
            </div>
        </SkeletonTheme>
    );
}

export default CardLoader;
