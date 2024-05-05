import axios from "axios"; // Import the axios library
import { useQuery } from "@tanstack/react-query"

interface Data {
    // userId: number
    // id: number
    // title: string
    // body: string

    author: string
    title: string
    description: string
    id: number
}

export const usePost = (postId: number) => {
  return useQuery({
    queryKey: ['post', postId], // Add this line
    queryFn: async () => {
      const { data } = await axios.get(
        'https://newsapi.org/v2/everything?q=apple&from=2024-05-04&to=2024-05-04&sortBy=popularity&apiKey=c10fad271ac04705af6f553aa6031dc8'
      )
      return data as Data
    }
  })
}