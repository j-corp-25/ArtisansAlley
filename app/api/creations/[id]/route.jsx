import connectDB from '@/config/db'
import Creation from '@/models/Creation'

// GET /api/creations/:id
export const GET = async (request, { params }) => {
  try {
    await connectDB()
    const creation = await Creation.findById(params.id)
    if (!creation) {
      return new Response('Creation not found', { status: 404 })
    }
    return new Response(JSON.stringify(creation), { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response(error.message, { status: 500 })
  }
}
