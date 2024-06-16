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
    },
  },
  plugins: [],
}