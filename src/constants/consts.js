import { v4 } from 'uuid';

export const MENU = [
	{
		id: v4(),
		item: 'Home'
	},
	{
		id: v4(),
		item: 'New'
	},
	{
		id: v4(),
		item: 'Popular'
	},
	{
		id: v4(),
		item: 'Trending'
	},
	{
		id: v4(),
		item: 'Categories'
	}
];

export const NEWS = [
	{
		id:v4(),
		title: 'Hydrogen VS Electric Cars',
		data: 'Will hydrogen-fueled cars ever catch up to EVs?'
	},
	{
		id:v4(),
		title: 'The Downsides of AI Artistry',
		data: 'What are the possible adverse effects of on-demand AI image generation?'
	},
	{
		id:v4(),
		title: 'Is VC Funding Drying Up?',
		data: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
	}
];

export const SERVICES = [
	{
		id:v4(),
		image: './public/images/image-retro-pcs.jpg',
		number: '01',
		title: 'Reviving Retro PCs',
		data: 'What happens when old PCs are given modern upgrades?'
	},
	{
		id:v4(),
		image: './public/images/image-top-laptops.jpg',
		number: '02',
		title: 'Top 10 Laptops of 2022',
		data: 'Our best picks for various needs and budgets.'
	},
	{
		id:v4(),
		image: './public/images/image-gaming-growth.jpg',
		number: '03',
		title: 'The Growth of Gaming',
		data: 'How the pandemic has sparked fresh opportunities.'
	}
];
