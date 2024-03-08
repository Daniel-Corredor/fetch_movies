import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const MenuItem = ({ label, path }:{label:string, path:string}) => (
  <Menu.Item key={path}>
    <Link to={path}>{label}</Link>
  </Menu.Item>
);

export default MenuItem;