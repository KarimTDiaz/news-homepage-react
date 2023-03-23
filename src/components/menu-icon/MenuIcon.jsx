import style from './menu-icon.module.scss'
import { menuShow } from '../menu/Menu';

const MenuIcon = ({state, setState}) => {
    let src;
    state === 0 ? src = <img onClick={()=> {setState(1)}} className={style['menu-icon']} src="./public/images/icon-menu.svg"alt="menu" /> : src=<img onClick={()=> {setState(0)}} className={style['menu-icon-close']}  src="./public/images/icon-menu-close.svg" alt="menu" /> 

    return src
}

export default MenuIcon