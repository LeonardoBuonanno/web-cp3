import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <ul className={styles.menu}>
        <li className={styles.menuItem}><Link href="/mosfet/bone">Boné</Link></li>
        <li className={styles.menuItem}><Link href="/mosfet/calca">Calça</Link></li>
        <li className={styles.menuItem}><Link href="/mosfet/camisa">Camisa</Link></li>
        <li className={styles.menuItem}><Link href="/mosfet/oculos">Óculos</Link></li>
        <li className={styles.menuItem}><Link href="/mosfet/sapato">Sapato</Link></li>
        <li className={styles.menuItem}><Link href="/mosfet/codfonte">Código Fonte</Link></li>
      </ul>
    </>
  )
}
