import React from "react"
import { ArticleProps } from "./_types"

export const Article = ({ title, description }: ArticleProps) => {
  return (
    <div className="shadow p-4">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Article
