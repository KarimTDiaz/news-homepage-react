import style from './menu.module.scss'
import { MENU } from '../../constants/consts';


const Menu = ({state}) => {
	return (
		<>
			<nav>
				<ul className={menuShow(state)}>
                    {MENU.map(item => (
                     <li key={item.id} className={style['menu-item']}><a className={style['menu-link']} href="#">{item.item}</a></li>
                    ))}
				</ul>
			</nav>
		</>
	);
};

const menuShow = (state) => {
	if(state ===0){
		return style.menu
	} else if(state === 1){
		return style.show
	}
}

/* {MENU.map((item, index) => {
    console.log(item.key);
    <MenuItem key={item.key}/>
})} */
export default Menu;
export {menuShow}
