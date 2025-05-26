import { ref, onMounted } from 'vue'

const themeKey = 'app-theme'

export function useDarkTheme() {
  const theme = ref('dark')

  const applyDark = () => {
    theme.value = 'dark'
    const html = document.documentElement
    html.classList.remove('light')
    html.classList.add('dark')
    localStorage.setItem(themeKey, 'dark')
  }

  onMounted(() => {
    const saved = localStorage.getItem(themeKey)
    if (saved === 'dark') {
      applyDark()
    } else if (!saved) {
      // respect system preference on first visit
      const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefers) applyDark()
    }
  })

  return { theme, applyDark }
}
