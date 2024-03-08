

import { Menu } from 'antd'
import styles from './navbar.module.scss'
import SvgLogo from 'components/Logo/Logo'
import useCreateMenuItems from 'Hooks/useCreateMenuItem'
import routes from 'config/routes'

const Navbar = () => {
  const items= useCreateMenuItems(routes.slice(0, routes.length-2))
 
  return (
    <div className={styles.nav}>
        <SvgLogo width={40}/>
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={["1"]} style={{lineHeight:"4rem", width:'100%'}} 
        items={items} >
     
        </Menu>
 

    </div>
  )
}

export default Navbar