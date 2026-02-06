import { BodyText } from './Text.jsx'
import { Numbers } from './Numbers.jsx'
import styles from './Paragraph.module.css'

export function Paragraph({ text, perek, pasuk }) {
  return (
    <div className={styles.paragraph}>
      <Numbers perek={perek} pasuk={pasuk} />
      <BodyText>{text}</BodyText>
    </div>
  )
}

export function QuoteParagraph({ lead, text, perek, pasuk }) {
  return (
    <div className={styles.paragraph}>
      <Numbers perek={perek} pasuk={pasuk} />
      <div className={styles.quote}>
        {lead ? (
          <div className={styles.quoteLead}>
            <BodyText>{lead}</BodyText>
          </div>
        ) : null}
        <div className={styles.quoteBody}>
          <BodyText>{text}</BodyText>
        </div>
      </div>
    </div>
  )
}

