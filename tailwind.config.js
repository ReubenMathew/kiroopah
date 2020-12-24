module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: '#FFF',
        accent1: '#FAFAFA',
        accent2: '#EAEAEA',
        accent3: '#999',
        accent4: '#888',
        accent5: '#666',
        accent6: '#444',
        accent7: '#333',
        accent8: '#111',
        black: '#000',
        errorlight: '#FF1A1A',
        error: '#E00',
        errordark: '#C00',
        successlight: '#3291FF',
        success: '#0070F3',
        successdark: '#0366D6',
        warninglight: '#F7B955',
        warning: '#F5A623',
        warningdark: '#F49B0B',
        alert: '#FF0080',
        purple: '#F81CE5',
        violet: '#7928CA',
        cyan: '#79FFE1',
        coral: '#FF3E4D',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
