/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['reqres.in'],
    },
    env: {
        NEXTAUTH_SECRET:'secure_nextauth_secret',
        GOOGLE_CLIENT_ID:'70898669907-6mdhi9rtftpt4c9j4s6cr8frah4rl6kk.apps.googleusercontent.com',
        GOOGLE_CLIENT_SECRET:'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'
    }
  };
  
  export default nextConfig;
  