import { withAuth } from "next-auth/middleware";

export default withAuth({
    // در اینجا مسیر صفحه ورود رو مشخص می کنیم 
    // که اگر خارج از سشن بود به این صفحه برود
  pages: {
    signIn: "/",
  }, 
});
export const config = {
    // در اینجا مسیر های خصوصی که باید محافظت
    // بشود را می دهیم 
  matcher: ["/users/:path*"],
};
