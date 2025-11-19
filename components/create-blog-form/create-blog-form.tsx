"use client"
import { postArticles } from "@/data-access"
import { useState, ChangeEvent } from "react"

const CreateBlogForm = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const createArticle = () => {
    postArticles({
      title,
      description
    }).then(() => {
      setTitle("")
      setDescription("")
    })
  }

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  const onTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value)
  }

  return (
    <div className="space-y-8">
      <label className="flex flex-col gap-2 font-medium">
        Title
        <input
          value={title}
          onChange={onInputChange}
          className="border border-gray-200  rounded p-2 shadow font-normal"
          type="text"
        />
      </label>
      <label className="flex flex-col gap-2 font-medium">
        Description
        <textarea
          value={description}
          onChange={onTextAreaChange}
          className="border border-gray-200  rounded p-2 shadow font-normal"
        ></textarea>
      </label>
      <button
        onClick={createArticle}
        className="bg-blue-500 self-start px-8 py-2 text-white rounded cursor-pointer"
      >
        Create
      </button>
    </div>
  )
}

export default CreateBlogForm
