import React from 'react'
import { OutlineButton } from '../../../../Components/buttons'
import classes from './loadMore.module.css'
const LoadMore = ({items,total,nextPageClick}) => {

    const viewedText = `You've viewed ${items} of ${total} products`
    return (
        <div className={classes.main}>
            <p>{viewedText}</p>
            <span/>
            <OutlineButton onClick={nextPageClick} fontSize='1.5' color="invert">
                Load More
            </OutlineButton>
        </div>
    )
}

export default LoadMore
