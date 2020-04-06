import React from 'react'
import ArticleList from "./ArticleList/ArticleList";
import articles from "./data/articles.json";
const FastFood = () => {
    return (
        <div>
            <ArticleList articles={Object.values(articles)} />
        </div>
    )
}

export default FastFood
