import axios from "axios"; // Import the axios library
import { useQuery } from "@tanstack/react-query"

interface Data {
    userId: number
    id: number
    title: string
    body: string
}

export const usePost = (postId: number) => {
  return useQuery({
    queryKey: ['post', postId], // Add this line
    queryFn: async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      )
      return data as Data
    }
  })
}