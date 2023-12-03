import { SiGithub, SiMicrosoft, SiRoblox, SiRobloxstudio, SiNpm } from 'react-icons/si'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'

import { Cargo, Wally } from './icons'
import Button from './button'
import Tooltip from './tooltip'

interface Props {
	link: string
	external: string
	index: number
}

function linkButton(icon: JSX.Element, tooltip: string, link: string, index: number) {
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

export default function Link({ link, external, index }: Props) {
	if (link.includes('github')) {
		return linkButton(<SiGithub />, 'GitHub repo', link, index)
	} else if (link.includes('npm')) {
		return linkButton(<SiNpm />, 'npm package', link, index)
	} else if (link.includes('crates')) {
		return linkButton(<Cargo className='h-3/5' />, 'Crates package', link, index)
	} else if (link.includes('wally')) {
		return linkButton(<Wally className='h-3/5' />, 'Wally package', link, index)
	} else if (link.includes('visualstudio')) {
		return linkButton(<SiMicrosoft />, 'VS marketplace', link, index)
	} else if (link.includes('devforum')) {
		return linkButton(<SiRobloxstudio />, 'DevForum topic', link, index)
	} else if (link.includes('roblox')) {
		return linkButton(<SiRoblox />, 'Roblox marketplace', link, index)
	} else {
		return linkButton(<LiaExternalLinkAltSolid />, external, link, index)
	}
}
