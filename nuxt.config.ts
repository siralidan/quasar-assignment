export default defineNuxtConfig({
  head: {
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap",
      },
    ],
  },
  css: ["boxicons/css/boxicons.min.css"],
  modules: ["@nuxtjs/tailwindcss"],
});
