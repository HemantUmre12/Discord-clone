const colors = require('tailwindcss/colors')

function withOpacity(cssVariable) {
  return ({ opacityValue }) => {
      return `rgba(var(${cssVariable}), ${opacityValue})`
  }
}

module.exports = {
  mode: 'jit',
  content: ['./public/**/*.{html,js}'],
  purge: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          'main-theme': 'var(--color-main-theme)',
        }
      },
      backgroundColor: {
        skin: {
          muted: 'var(--color-text-muted)',
          'primary': 'var(--color-primary-bg)',
          'secondary': 'var(--color-secondary-bg)',
          'tertiary': 'var(--color-tertiary-bg)',
          'main-theme': 'var(--color-main-theme)',
          'text-area': 'var(--color-textarea-bg)',
        }
      },
    },
  },
  plugins: [],
}
