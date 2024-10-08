import { SiX, SiYoutube, SiGithub, SiKofi, SiWakatime } from 'react-icons/si'
import { BiError } from 'react-icons/bi'

import { Dervex, DervexBanner } from '../icons'
import Button from '../button'

export interface HeaderButtonType {
	link?: string
	text?: string
	icon?: string
	button?: JSX.Element
}

function iconButton(icon: string) {
	switch (icon) {
		case 'x':
			return <SiX />
		case 'youtube':
			return <SiYoutube />
		case 'kofi':
			return <SiKofi />
		case 'github':
			return <SiGithub />
		case 'wakatime':
			return <SiWakatime />
		case 'logo':
			return <Dervex className='h-1/2 fill-black group-hover:fill-white dark:fill-white group-hover:dark:fill-black' />
		case 'banner':
			return (
				<DervexBanner className='h-1/2 fill-black group-hover:fill-white dark:fill-white group-hover:dark:fill-black' />
			)
		default:
			return <BiError />
	}
}

function textButton(text: string) {
	return <b>{text}</b>
}

export default function HeaderButton({
	className,
	button,
	callback,
	borders,
	compact,
}: {
	className?: string
	button: HeaderButtonType
	callback?: () => undefined
	borders: string
	compact?: boolean
}) {
	if (!className) {
		className = button.icon
			? button.icon != 'banner'
				? `${compact ? 'min-w-[74px]' : 'min-w-[76px]'} min-h-[76px] text-3xl`
				: 'w-full'
			: 'w-full text-xl lg:text-2xl'
	}

	if (button.link) {
		return (
			<Button className={className} link={button.link} label={button.icon} borders={borders} callback={callback}>
				{button.icon ? iconButton(button.icon) : textButton(button.text!)}
			</Button>
		)
	} else {
		return button.button
	}
}
