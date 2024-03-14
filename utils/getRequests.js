
const apiUrl = process.env.NEXT_PUBLIC_API_DOMAIN || 'null'

// fetch all creations
const fetchCreations = async () =>{
    try {
        if(!apiUrl){
          return []
        }
      const response = await fetch(`${apiUrl}/creations`,{
        cache: 'no-store',
      })
      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      return response.json()
    } catch (error) {
      console.log(error)
      return []

    }
  }


// fetch a single creation
const fetchCreation = async (id) =>{
    try {
        if(!apiUrl){
          return null
        }
      const response = await fetch(`${apiUrl}/creations/${id}`,{
        cache: 'no-store',
      })
      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      return response.json()
    } catch (error) {
      console.log(error)
      return null

    }
  }

export { fetchCreations, fetchCreation}
