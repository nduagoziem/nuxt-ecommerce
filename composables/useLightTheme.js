import { ref, onMounted } from 'vue'

const themeKey = 'app-theme'

export function useLightTheme() {
  const theme = ref('light')

  const applyLight = () => {
    theme.value = 'light'
    const html = document.documentElement
    html.classList.remove('dark')
    html.classList.add('light')
    localStorage.setItem(themeKey, 'light')
  }

  onMounted(() => {
    const saved = localStorage.getItem(themeKey)
    if (saved === 'light') {
      applyLight()
    } else if (!saved) {
      // default to light if no saved preference
      applyLight()
    }
  })

  return { theme, applyLight }
}
