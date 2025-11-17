import { getArticlesResponse } from "./_types"

export const getArticles = async () => {
  const response = await fetch("http://localhost:3001/articles")
  const data: getArticlesResponse[] = await response.json()
  return data
}
