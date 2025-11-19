import { PostArticlesRequest } from "./_type"

export const postArticles = (body: PostArticlesRequest) => {
  return fetch("http://localhost:3001/articles", {
    method: "POST",
    body: JSON.stringify({
      id: String(Math.floor(Math.random() * 1000)),
      ...body
    })
  })
}
