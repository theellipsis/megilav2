import styles from './Text.module.css'
import { createElement } from 'react'

export function H1({ as = 'h1', children }) {
  return createElement(as, { className: styles.h1 }, children)
}

export function H2({ as = 'h2', children }) {
  return createElement(as, { className: styles.h2 }, children)
}

export function H3({ as = 'h3', children }) {
  return createElement(as, { className: styles.h3 }, children)
}

export function BodyText({ children }) {
  return <p className={styles.text}>{children}</p>
}

export function PasukText({ children }) {
  return <span className={styles.pasuk}>{children}</span>
}

