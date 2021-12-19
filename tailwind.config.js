module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: "#F2F2F2",
        blue: "#1A3954",
        yellow: "#F9CA06",
        "dk-gray": "#D1DBDD",
        "dk-blue": "#021727",
        "scroll-nav": "#c7d1db",
      },
      fontFamily: {
        all: ["Abel"],
      },
      fontSize: {
        h1: ["42px", " 60px"],
        h3: ["28px", "32px"],
        h4: ["22px", "28px"],
        h5: ["18px", "23px"],
        p: ["14px", "20px"],
      },
      height: {
        nav: "85px",
      },
      minHeight: {
        our: "230px",
      },
      width: {
        hero: "600px",
        "container-lg": "85vw",
        "container-md": "80vw",
        "container-mobile": "90vw",
      },
      backgroundImage: {
        "hero-bg": "url('./images/hero.svg')",
      },
      margin: {
        "hero-top": "-85px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
