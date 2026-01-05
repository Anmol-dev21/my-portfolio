import { useTheme } from '../hooks/useTheme.jsx'
import Icon from './Icon'

export default function DarkModeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      aria-label="Toggle dark mode"
      className="btn ghost theme-toggle"
      aria-pressed={isDark}
      onClick={toggle}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
  {isDark ? <Icon name="sun" /> : <Icon name="moon" />}
    </button>
  )
}
