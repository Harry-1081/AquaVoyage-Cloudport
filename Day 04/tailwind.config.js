/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
        screens: {
          xl: [{ min: "1150px", max: "2648px" }],
          lg: [{ min: "260px", max: "1149px" }],
        },
        fontFamily: {
          dmsans: ["DM Sans", "sans-serif"],
          poppins: ["Poppins", "sans-serif"],
          productsansr: ["productsans-regular"],
          productsansb: ["productsans-bold"],
        },
        extend: {
          // ...
          darkMode: "class",
        },
        extend: {
          backgroundImage: {
            landingimage: "url('https://res.cloudinary.com/dnq6fx1oj/image/upload/v1710479919/Mandarin-Oriental-Jumeira-1536x1152_tr2pal.jpg')",
            logo: "url('https://res.cloudinary.com/dnq6fx1oj/image/upload/c_crop,h_215/v1710561347/360_F_369936816_d7oS4l9iDcwtuTXPzRJvesdqLtFKMclp_lc0rpk.jpg')",
          },
        },
      },
}
