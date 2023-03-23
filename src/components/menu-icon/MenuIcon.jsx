import style from './menu-icon.module.scss';

const MenuIcon = ({ state, setState }) => {
	return (
		<img
			onClick={() => {
				setState(!state);
			}}
			className={state ? style['menu-icon'] : style['menu-icon-close']}
			src={
				state
					? './public/images/icon-menu.svg'
					: './public/images/icon-menu-close.svg'
			}
			alt='menu'
		/>
	);
};

export default MenuIcon;
