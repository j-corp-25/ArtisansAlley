export { default } from 'next-auth/middleware'

export const config = {
    matcher: ['/creations/add','/profile','/creations/saved','/messages']
}
