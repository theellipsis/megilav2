import { H2, PasukText } from './Text.jsx'
import styles from './Numbers.module.css'

export function Numbers({ perek, pasuk }) {
  return (
    <span className={styles.root} aria-label={`פרק ${perek} פסוק ${pasuk}`}>
      <span className={styles.perekWrap}>
        <H2 as="span">{perek}</H2>
      </span>
      <span className={styles.pasukWrap}>
        <PasukText>{pasuk}</PasukText>
      </span>
    </span>
  )
}

