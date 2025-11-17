import { Article, Container } from "@/components"
import { getArticles } from "@/data-access"

const BlogsPage = async () => {
  const articles = await getArticles()
  console.log({ articles })

  return (
    <Container className="grid grid-cols-4 gap-4 py-16">
      {articles.map(({ id, title, description }) => (
        <Article key={id} title={title} description={description} />
      ))}
    </Container>
  )
}

export default BlogsPage
