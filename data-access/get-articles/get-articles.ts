import { GetArticlesResponse } from "./_types"

export function getArticles(
  articleId: string | number
): Promise<GetArticlesResponse>
export function getArticles(
  articleId?: undefined
): Promise<GetArticlesResponse[]>
export async function getArticles(articleId?: string | number) {
  const response = await fetch(
    `http://localhost:3001/articles${articleId ? `/${articleId}` : ""}`
  )

  return await response.json()
}
