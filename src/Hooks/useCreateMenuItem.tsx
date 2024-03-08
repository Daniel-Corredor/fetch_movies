import { MenuProps } from "antd";
import { routeType } from "config/routes";
import { Link } from "react-router-dom";


const useCreateMenuItems = (routes:routeType[]) :  MenuProps['items']=> {

  
  return  routes.map((option, index) => ({
    key: index.toString(),
    label: <Link to={option.path} >{option.label}</Link>,
  }))
};

export default useCreateMenuItems;
