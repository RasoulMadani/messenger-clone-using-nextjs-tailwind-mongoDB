/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    //TODO چیه وچیکار می کنه ؟
    swcPlugins: [["next-superjson-plugin", {}]],
  },
  images: {
    // این قسمت برای رفع خطای بارگیری عکس ها وقتی با گوگل وارد می شویم به کار می رود
    domains: [
      // این نشانی برای درست گرفتن نشانی عکس هااز کلودینری است
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
