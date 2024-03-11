import connectDB from '@/config/db'

export const GET = async (request) => {
  try {
    await connectDB()
    return new Response('Hello World', { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response(error.message, { status: 500 })
  }
}
