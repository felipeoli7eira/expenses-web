/* eslint-disable */

import { useEffect, useState } from 'react'

type ColorSchemas = 'light' | 'dark'

export default function usePrefersColorSchema() {
  //   const { changeTheme } = useContext(PrimeReactContext)

  //   // TODO: mudar para um arquivo e chamar
  //   if (changeTheme !== undefined) {
  //     const lightTheme = '/themes/saga-green/theme.css'
  //     const darkTheme = '/themes/md-dark-deeppurple/theme.css'

  //     const isDarkMode: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')
  //     if (isDarkMode.matches) {
  //       changeTheme(lightTheme, darkTheme, 'theme-link')
  //     }

  //     // isDarkMode.onchange = (event: MediaQueryListEvent) => {
  //     //   if (event.matches) {
  //     //   }
  //     // }
  //   }

  const [prefColorSchema, setPrefColorSchema] = useState<ColorSchemas>('light')

  //   function checkLocalStorage(): void {
  //     const storagePrefersColorSchema = localStorage.getItem('prefers-color-schema')
  //     console.log(storagePrefersColorSchema)
  //   }

  //   function getUserSystemPrefersColorSchema(): void {
  //     const isDarkModePrefColorSchema: MediaQueryList = window.matchMedia(
  //       '(prefers-color-scheme: dark)',
  //     )

  //     if (isDarkModePrefColorSchema) {
  //       console.log('prefer dark mode')
  //     }

  //     if (!isDarkModePrefColorSchema) {
  //       console.log('prefer light mode')
  //     }
  //   }

  function init() {
    const isDarkModePrefColorSchema: MediaQueryList = window.matchMedia(
      '(prefers-color-scheme: dark)',
    )

    if (isDarkModePrefColorSchema.matches) {
      setPrefColorSchema('dark')
    }

    isDarkModePrefColorSchema.onchange = (event: any) => {
      event?.currentTarget?.matches ? setPrefColorSchema('dark') : setPrefColorSchema('light')
    }
  }

  useEffect(init, [])

  return {
    prefColorSchema,
  }
}
