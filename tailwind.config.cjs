module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        content: 'rgb(var(--content) / <alpha-value>)',
        header: 'rgb(var(--header) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        alert: 'rgb(var(--alert) / <alpha-value>)',
        disable: 'rgb(var(--disable) / <alpha-value>)',
        info: 'rgb(var(--info) / <alpha-value>)',
        warning: 'rgb(var(--warning) / <alpha-value>)',
      },
      backgroundColor: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        content: 'rgb(var(--content) / <alpha-value>)',
        header: 'rgb(var(--header) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        alert: 'rgb(var(--alert) / <alpha-value>)',
        disable: 'rgb(var(--disable) / <alpha-value>)',
        info: 'rgb(var(--info) / <alpha-value>)',
        warning: 'rgb(var(--warning) / <alpha-value>)',
      },
      fill: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        content: 'var(--content)',
        header: 'var(--header)',
        line: 'var(--line)',
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      fontFamily: {
        black: "Poppins-Black",
        regular: "Poppins-Regular",
        thick: "Poppins-Medium",
        thicker: "Poppins-Bold",
      },
      keyframes : {
        showContent: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
            filter: 'blur(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0px)',
          },
        },
        showimage: {
          '0%': {
            top: '100%',
            bottom: '0',
            left: '100%',
            width: '0',
            height: '0',
            borderRadius: '50%',
          },
          '100%': {
            top: '0',
            bottom: '0',
            left: '0',
            width: '100%',
            height: '100%',
            borderRadius: '0',
          },
        },
        showThumbnail: {
          '0%': {
            width: '0',
            opacity: '0',
          },
          '100%': {
            width: '100%',
            opacity: '1',
          },
        },
        effectNext: {
          '0%': {
            transform: 'translateX(150px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        outFrame: {
          '100%': {
            width: '150px',
            height: '220px',
            bottom: '50px',
            left: '50%',
            borderRadius: '20px',
          },
      },
      contentOut: {
        '100%': {
          transform: 'translateY(-150px)',
          filter: 'blur(20px)',
          opacity: '0',
        },
      },

    },
      animation: {
        showContent: 'showContent 0.5s 1s linear 1 forwards',
        showImage: 'showImage 0.5s linear 1 forwards',
        showThumbnail: 'showThumbnail 0.5s linear 1 forwards',
        effectNext: 'effectNext 0.5s linear 1 forwards',
        outFrame: 'outFrame 0.5s linear 1 forwards',
        contentOut: 'contentOut 0.5s linear 1 forwards',
      }
    },
  },
  plugins: [require("tailwindcss-animation-delay"),],
}