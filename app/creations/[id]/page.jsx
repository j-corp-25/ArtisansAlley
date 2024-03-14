'use client'
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { fetchCreation } from "@/utils/getRequests"

const page = () => {
  const { id } = useParams()
  const [creation, setCreation] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCreationById = async () => {
      if (!id) return
      try {
        const creation = await fetchCreation(id)
        setCreation(creation)

      }catch (error) {
        console.log(error)

      }finally{
        setLoading(false)

      }
    }
    if(creation === null){
      fetchCreationById()
    }
  }, [id, creation])
  return (
    <div>page</div>
  )
}

export default page
