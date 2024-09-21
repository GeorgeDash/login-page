/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./build/*.html"],
  theme: {
    extend: {
      "screens": {
        "sm": "320px",
        "sm-m": "375px",
        "sm-l": "425px"
      },
      fontFamily: {
        "sans": ['"Onest"']
      },
      backgroundImage: {
        "lightmode": "url(../img/lightmode.jpg)",
        "darkmode": "url(../img/darkmode.jpg)",
      },
      spacing: {
        "15-r": "3.75rem",
        "46-p": "46%",
        "50-p": "50%",
        "80-p": "80%",
        "90-p": "90%",
        "95-p": "95%",
        "99-p": "99%",
        "100-p": "100%"
      },
      transitionProperty: {
        'width': 'width'
      },
      transitionDuration: {
        '375': '375ms',
      },
      height: {
        "1-p": "1px",
        "75-p": "75%",
        "98-r": "45rem"
      },
      width: {
        "40-p": "40%",
        "45-p": "45%",
        "65-p": "65%",
        "75-p": "75%",
        "90-p": "90%",
        "98-r": "45rem"
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}