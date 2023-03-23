import style from './header.module.scss';
import MenuIcon from '../menu-icon/MenuIcon';
import Menu from '../menu/Menu';
import Logo from '../logo/Logo';
import { useState } from 'react';
import Button from '../button/Button';

const Header = () => {
	const [open, setOpen] = useState(true);
	return (
		<header className={style.header}>
			<div className={style['header-top']}>
				<Logo />
				<Menu state={open} setState={setOpen} />
				<MenuIcon state={open} setState={setOpen} />
			</div>
			<div className={style.banner}></div>
			<div className={style['header-data-container']}>
				<h1 className={style.title}>The Bright Future of Web 3.0?</h1>
				<div className={style['header-bottom-container']}>
					<p className={style.data}>
						We dive into the next evolution of the web that claims to put the
						power of the platforms back into the hands of the people. But is it
						really fulfilling its promise?
					</p>
					<Button />
				</div>
			</div>
		</header>
	);
};

export default Header;
