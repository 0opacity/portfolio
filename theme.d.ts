import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      pink: string
      lightPink: string
      pink70: string
      deepPink: string
      green: string
      deepGreen: string
      white: string
      white55: string
      silverWhite: string
      navy: string
      gray: string
      lightGray: string
      blue: string
      yellow: string
      red: string
      deepRed: string
      black20: string
      black40: string
      black55: string
      navy40: string
    }
    typography: {
      heading: {
        size: {
          l: string
          m: string
        }
      }
      text: {
        size: {
          xl: string
          l: string
          xm: string
          m: string
          s: string
          xs: string
        }
      }
      weight: {
        thin: 400
        normal: 'normal'
        medium: 500
        bold: 'bold'
        deepBold: 800
      }
    }
  }
}
