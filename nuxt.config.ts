// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    server: {
      proxy: {
        "/api": {
          target: "http://biaozhun.online:88", // 代理地址
          changeOrigin: true, // 是否跨域
          rewrite: path => path.replace(/^\/api/, ""),
        },
      },
    },
  },
})
