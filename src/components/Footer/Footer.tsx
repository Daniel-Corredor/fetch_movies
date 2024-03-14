import { Layout } from "antd"
import styles from './footer.module.scss'
const Footer = () => {
  const {Footer}=Layout
  return (
   <Footer className={styles.footer}><p>texto</p></Footer>
  )
}

export default Footer