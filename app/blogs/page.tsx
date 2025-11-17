import { Article, Container } from "@/components"
import { getArticles } from "@/data-access"
import Link from "next/link"


const BlogsPage = async () => {
  
  const articles = await getArticles()


  return (
    <Container className="grid grid-cols-4 gap-4 py-16">
      {articles.map(({ id, title, description }) => (
        <Link key={id} href={`/blogs/${id}`}>
          <Article title={title} description={description} />
        </Link>
      ))}
    </Container>
  )
}

export default BlogsPage
