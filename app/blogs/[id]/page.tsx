import { Container } from "@/components"
import { getArticles } from "@/data-access"
import Link from "next/link"

interface BlogsPageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

const ArticleItemPage = async ({ params }: BlogsPageProps) => {
  const articleId = (await params).id
  const { title, description } = await getArticles(articleId)

  return (
    <Container className="py-5" >
      <Link  href="/blogs">{"< Back"}</Link>
      <h2 className="text-3xl font-bold my-4 border-b pb-2 border-gray-200">{title}</h2>
      <p> {description}</p>
    </Container>
  )
}

export default ArticleItemPage
