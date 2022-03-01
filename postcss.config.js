import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
// postcss.config.js
module.exports = ({ env }) => ({
  plugins: {
    tailwindcss,
    autoprefixer,
  },
});
