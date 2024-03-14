import connectDB from '@/config/db'
import Creation from '@/models/Creation'

// GET /api/creations
export const GET = async (request) => {
  try {
    await connectDB()
    const creations = await Creation.find({})
    return new Response(JSON.stringify(creations), { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response(error.message, { status: 500 })
  }
}
