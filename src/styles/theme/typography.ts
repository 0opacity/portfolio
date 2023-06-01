import { Theme } from '@emotion/react'

export const typography: Theme['typography'] = {
  heading: {
    size: {
      l: '36px',
      m: '24px',
    },
  },
  text: {
    size: {
      xl: '24px',
      l: '18px',
      xm: '16px',
      m: '14px',
      s: '12px',
      xs: '10px',
    },
  },
  weight: {
    thin: 400,
    normal: 'normal',
    medium: 500,
    bold: 'bold',
    deepBold: 800,
  },
}
