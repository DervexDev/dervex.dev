import { SiGithub, SiMicrosoft, SiRoblox, SiRobloxstudio, SiNpm } from 'react-icons/si'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'

import { Cargo, Wally } from './icons'
import Button from './button'
import Tooltip from './tooltip'

interface Props {
	link: string
	tooltip: string
	index: number
}

function button(icon: JSX.Element, tooltip: string, link: string, index: number) {
	return (
		<Button
			key={index}
			className='text-4xl w-full flex items-center justify-center'
			borders={index == 0 ? '' : 'l'}
			link={link}
		>
			{icon}

			<Tooltip>{tooltip}</Tooltip>
		</Button>
	)
}

export default function LinkButton({ link, tooltip, index }: Props) {
	if (link.includes('github')) {
		return button(<SiGithub />, 'GitHub repo', link, index)
	} else if (link.includes('npm')) {
		return button(<SiNpm />, 'npm package', link, index)
	} else if (link.includes('crates')) {
		return button(<Cargo className='h-3/5' />, 'Cargo crate', link, index)
	} else if (link.includes('wally')) {
		return button(<Wally className='h-3/5' />, 'Wally package', link, index)
	} else if (link.includes('visualstudio')) {
		return button(<SiMicrosoft />, 'VS marketplace', link, index)
	} else if (link.includes('devforum')) {
		return button(<SiRobloxstudio />, 'DevForum topic', link, index)
	} else if (link.includes('roblox')) {
		return button(<SiRoblox />, 'Roblox marketplace', link, index)
	} else {
		return button(<LiaExternalLinkAltSolid />, tooltip, link, index)
	}
}
