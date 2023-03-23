import style from './services.module.scss';
import { SERVICES } from '../../constants/consts';
const Services = () => {
	return (
		<section className={style.services}>
			{SERVICES.map(item => (
				<div className={style['services-item']} key={item.id}>
					{console.log(item)}
					<img className={style.image} src={item.image} alt='' />
					<div>
						<span className={style['services-number']}>{item.number}</span>
						<h3 className={style['services-title']}>{item.title}</h3>
						<p className={style['services-data']}>{item.data}</p>
					</div>
				</div>
			))}
		</section>
	);
};

export default Services;
