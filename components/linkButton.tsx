import { SiGithub, SiMicrosoft, SiRoblox, SiRobloxstudio, SiNpm, SiYarn } from 'react-icons/si'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'

import { Cargo, Librs, Wally } from './icons'
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
	if (link.includes('github.com')) {
		return button(<SiGithub />, 'GitHub repo', link, index)
	} else if (link.includes('npmjs.com')) {
		return button(<SiNpm />, 'npm package', link, index)
	} else if (link.includes('yarnpkg.com')) {
		return button(<SiYarn />, 'Yarn package', link, index)
	} else if (link.includes('crates.io')) {
		return button(<Cargo className='h-1/2' />, 'Cargo crate', link, index)
	} else if (link.includes('lib.rs')) {
		return button(<Librs className='h-1/2' />, 'Lib.rs crate', link, index)
	} else if (link.includes('wally.run')) {
		return button(<Wally className='h-1/2' />, 'Wally package', link, index)
	} else if (link.includes('marketplace.visualstudio.com')) {
		return button(<SiMicrosoft />, 'VS marketplace', link, index)
	} else if (link.includes('devforum.roblox.com')) {
		return button(<SiRobloxstudio />, 'DevForum topic', link, index)
	} else if (link.includes('create.roblox.com')) {
		return button(<SiRoblox />, 'Roblox marketplace', link, index)
	} else {
		return button(<LiaExternalLinkAltSolid />, tooltip, link, index)
	}
}
