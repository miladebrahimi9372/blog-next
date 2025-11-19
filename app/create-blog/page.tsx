import { Container } from "@/components"
import CreateBlogForm from "@/components/create-blog-form/create-blog-form"

const CreateBlogPage = () => {
  return (
    <Container className="py-5 flex flex-col gap-6">
      <h1 className="ext-3xl font-bold my-4 border-b pb-2 border-gray-200">
        Create Blog
      </h1>
      <CreateBlogForm />
    </Container>
  )
}

export default CreateBlogPage
