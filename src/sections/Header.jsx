import modeToggleLightSvg from '../assets/icons/mode-toggle.svg'
import modeToggleDarkSvg from '../assets/icons/mode-toggle-dark.svg'
import fontIconSvg from '../assets/icons/font-icon.svg'
import styles from './Header.module.css'

export function Header({ theme, onToggleTheme, fontScale, onDecreaseFontSize, onIncreaseFontSize }) {
  const modeToggleSvg = theme === 'dark' ? modeToggleDarkSvg : modeToggleLightSvg

  return (
    <header className={styles.header}>
      <button
        onClick={onToggleTheme}
        className={styles.modeToggleButton}
        type="button"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <img
          src={modeToggleSvg}
          className={styles.modeToggle}
          alt="Mode toggle"
        />
      </button>

      <div className={styles.fontSizeControls}>
        <button 
          className={styles.fontButton} 
          type="button" 
          aria-label="Decrease font size"
          onClick={onDecreaseFontSize}
          disabled={fontScale <= 0.75}
        >
          <span className={styles.buttonText}>-</span>
        </button>
        <img src={fontIconSvg} className={styles.fontIcon} alt="Font size" />
        <button 
          className={styles.fontButton} 
          type="button" 
          aria-label="Increase font size"
          onClick={onIncreaseFontSize}
          disabled={fontScale >= 1.5}
        >
          <span className={styles.buttonText}>+</span>
        </button>
      </div>
    </header>
  )
}
