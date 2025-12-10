import { BiError } from 'react-icons/bi'
import {
	SiRust,
	SiGo,
	SiLua,
	SiTypescript,
	SiJavascript,
	SiCplusplus,
	SiSwift,
	SiKotlin,
	SiTailwindcss,
	SiNodedotjs,
	SiDocker,
	SiReact,
	SiPreact,
	SiNextdotjs,
	SiVite,
	SiVapor,
	SiGooglechrome,
	SiSpotify,
	SiGit,
	SiVercel,
	SiRedis,
	SiDocusaurus,
	SiVisualstudiocode,
	SiRider,
	SiXcode,
	SiRobloxstudio,
	SiAmazonaws,
	SiAmazondynamodb,
	SiAwslambda,
} from 'react-icons/si'

import {
	Argon,
	Cmlc,
	Souder,
	GithubLoc,
	Luno,
	SpotifySpatialAudio,
	Dervex,
	UniversalComments,
	Helium,
	Byft,
} from '@/components/icons'

import Container from '@/components/container'
import LinkButton from '@/components/linkButton'
import Link from '@/components/link'

interface Project {
	name: string
	technologies: Array<string>
	time: string
	icon: (props: any) => JSX.Element
	desc: JSX.Element
	links: Array<string>
}

const projects: Array<Project> = [
	{
		name: 'BYFT',
		technologies: ['lua', 'rust', 'roblox', 'aws', 'lambda', 'dynamodb'],
		time: 'May 2025 - now',
		icon: Byft,
		desc: (
			<>
				Build Your Factory Tycoon - A Roblox game where you design and optimize your own low-poly factory. It has
				reached <b>~9K</b> concurrent players and currently has about <b>10M</b> total visits. If you are interested in
				games like Satisfactory or Factorio, you should definitely check it out!
			</>
		),
		links: ['https://www.roblox.com/games/93002338579227', 'https://raccat.com'],
	},
	{
		name: 'Argon',
		technologies: ['rust', 'ts', 'lua', 'cpp', 'redis', 'doc', 'vsc', 'roblox', 'git'],
		time: 'October 2022 - now',
		icon: Argon,
		desc: (
			<>
				CLI app, VS Code extension and Roblox plugin. Argon enables the use of external editors, tools and version
				control systems. Comes with many useful features that help manage project, maintain code and manipulate
				instances. Extremely customizable via global config and templates. Ultra fast and well optimized while being
				easy to use.
			</>
		),
		links: [
			'https://github.com/argon-rbx',
			'https://marketplace.visualstudio.com/items?itemName=Dervex.argon',
			'https://open-vsx.org/extension/Dervex/argon',
			'https://create.roblox.com/marketplace/asset/11263738833',
			'https://devforum.roblox.com/t/2021776',
			'https://argon.wiki',
		],
	},
	{
		name: 'CMLC',
		technologies: ['js', 'vsc'],
		time: 'September 2024',
		icon: Cmlc,
		desc: (
			<>
				Commit Message Length Counter is a small VS Code extension created for those who want to make sure their commit
				messages are fully rendered on GitHub by avoiding exceeding the maximum length of <b>72</b> characters.
			</>
		),
		links: ['https://github.com/DervexDev/CMLC', 'https://marketplace.visualstudio.com/items?itemName=Dervex.cmlc'],
	},
	{
		name: 'Souder',
		technologies: ['kotlin', 'rider'],
		time: 'September 2024',
		icon: Souder,
		desc: (
			<>
				<b>Sou</b>rce/Hea<b>der</b> dynamic editor splitter for JetBrains Rider IDE designed for C++ projects. Improves
				development experience when working with a large codebase. This plugin is experimental as it intensively abuses
				IntelliJ API.
			</>
		),
		links: ['https://github.com/DervexDev/souder'],
	},
	{
		name: 'GitHub LOC',
		technologies: ['go', 'ts', 'preact', 'vite', 'chrome'],
		time: 'May 2024',
		icon: GithubLoc,
		desc: (
			<>
				Simple yet elegant Google Chrome extension that allows you to view repository Lines Of Code with an option to
				exclude selected languages. Clicking on the stat will take you to the{' '}
				<Link href='https://ghloc.vercel.app/DervexDev/github-loc'>ghloc.vercel.app</Link> page with even more LOC
				details.
			</>
		),
		links: [
			'https://github.com/DervexDev/github-loc',
			'https://chromewebstore.google.com/detail/github-loc/clfbbldiigihjkignlkngblahkpalmhh',
		],
	},
	{
		name: 'LUNO',
		technologies: ['js', 'vsc'],
		time: 'September 2023',
		icon: Luno,
		desc: (
			<>
				Lua Universal Negation Operator – ultra compact VSC extension (about 20 lines) that allows you to use
				exclamation mark as a negation operator in Lua or Luau. LUNO converts <b>!=</b> to <b>~=</b> as you type so
				there is no need to set up any additional stuff.
			</>
		),
		links: ['https://github.com/DervexDev/luno', 'https://marketplace.visualstudio.com/items?itemName=Dervex.luno'],
	},
	{
		name: 'Spotify SA',
		technologies: ['swift', 'docker', 'vapor', 'xcode', 'spotify'],
		time: 'August 2023',
		icon: SpotifySpatialAudio,
		desc: (
			<>
				Spotify Spatial Audio is simple macOS app that takes advantage of Spotify’s web API to make use of spatial audio
				on your{' '}
				<Link href='https://support.apple.com/en-us/HT211775#:~:text=Make%20sure%20that%20you%27re%20wearing%20your-,AirPods%20Pro%20(1st%20or%C2%A02nd%20generation)%2C%C2%A0AirPods%20Max%2C%20AirPods%20(3rd%20generation)%2C%20Beats%20Fit%20Pro%2C%C2%A0or%20Beats%20Studio%20Pro,-%2C%C2%A0and%20that%20they%27re%20connected%20to%20your%20Mac'>
					supported
				</Link>{' '}
				AirPods possible directly from the Spotify app. Currently spatial audio on macOS is only supported by Safari
				thus SSA simply creates new hidden window and switches playback to web player.
			</>
		),
		links: ['https://github.com/DervexDev/SpotifySpatialAudio'],
	},
	{
		name: 'dervex.dev',
		technologies: ['ts', 'tailwind', 'react', 'next', 'vercel', 'node'],
		time: 'August 2023',
		icon: Dervex,
		desc: (
			<>
				Well, every developer needs their own site, right? So here is mine! As you can see priorates were monochrome
				color scheme and simplicity. Those mysterious squares close to the GitHub logo are my contribution this year.
				Try resizing the window to see some magic happen! Also, this page has 100% score in every Google Lighthouse
				category.
			</>
		),
		links: ['https://github.com/DervexDev/dervex.dev', 'https://dervex.dev/'],
	},
	{
		name: 'Universal Comments',
		technologies: ['ts', 'vsc'],
		time: 'January 2023',
		icon: UniversalComments,
		desc: (
			<>
				Simple Visual Studio Code extension that allows you to use same comment characters in every major language. It
				also allows to customize your experience by auto closing comment block or by adding spaces automatically.
			</>
		),
		links: [
			'https://github.com/DervexDev/UniversalComments',
			'https://marketplace.visualstudio.com/items?itemName=Dervex.universal-comments',
		],
	},
	{
		name: 'Helium',
		technologies: ['lua', 'roblox'],
		time: 'January 2023',
		icon: Helium,
		desc: (
			<>
				Lightweight Roblox Studio plugin for camera bookmarks. It’s exact replica of Unreal Engine’s camera checkpoints.
				It allows you to save up to 10 camera location and then teleport to them either by keyboard shortcut or using
				UI.
			</>
		),
		links: ['https://github.com/DervexDev/Helium', 'https://create.roblox.com/marketplace/asset/12243834454/'],
	},
]

export default function Projects() {
	function technologies(technologies: Array<string>) {
		function div(index: number, icon: JSX.Element) {
			return (
				<div key={index} className='pl-2'>
					{icon}
				</div>
			)
		}

		return technologies.map((technology, index) => {
			switch (technology) {
				case 'rust':
					return div(index, <SiRust />)
				case 'go':
					return div(index, <SiGo />)
				case 'lua':
					return div(index, <SiLua />)
				case 'ts':
					return div(index, <SiTypescript />)
				case 'js':
					return div(index, <SiJavascript />)
				case 'cpp':
					return div(index, <SiCplusplus />)
				case 'swift':
					return div(index, <SiSwift />)
				case 'kotlin':
					return div(index, <SiKotlin />)
				case 'aws':
					return div(index, <SiAmazonaws />)
				case 'lambda':
					return div(index, <SiAwslambda />)
				case 'dynamodb':
					return div(index, <SiAmazondynamodb />)
				case 'redis':
					return div(index, <SiRedis />)
				case 'docker':
					return div(index, <SiDocker />)
				case 'tailwind':
					return div(index, <SiTailwindcss />)
				case 'node':
					return div(index, <SiNodedotjs />)
				case 'react':
					return div(index, <SiReact />)
				case 'preact':
					return div(index, <SiPreact />)
				case 'next':
					return div(index, <SiNextdotjs />)
				case 'vite':
					return div(index, <SiVite />)
				case 'doc':
					return div(index, <SiDocusaurus />)
				case 'vercel':
					return div(index, <SiVercel />)
				case 'vapor':
					return div(index, <SiVapor />)
				case 'chrome':
					return div(index, <SiGooglechrome />)
				case 'spotify':
					return div(index, <SiSpotify />)
				case 'git':
					return div(index, <SiGit />)
				case 'vsc':
					return div(index, <SiVisualstudiocode />)
				case 'rider':
					return div(index, <SiRider />)
				case 'xcode':
					return div(index, <SiXcode />)
				case 'roblox':
					return div(index, <SiRobloxstudio />)
				default:
					return div(index, <BiError />)
			}
		})
	}

	function buttons(links: Array<string>) {
		return links.map((link, index) => {
			return <LinkButton key={index} index={index} link={link} tooltip='Project website' />
		})
	}

	return (
		<div className='w-full'>
			<p className='text-center text-xs opacity-60 pt-[10px] -mb-[10px] sm:hidden'>
				Rotate your device to see more details
			</p>
			<div className='flex flex-wrap justify-center'>
				{projects.map((project, index) => {
					return (
						<Container key={index} className='w-[600px] m-[20px] self-center'>
							<Container className='h-[78px] flex flex-row' borders='b'>
								<Container className='min-w-[76px] h-full flex items-center justify-center' borders='r'>
									<project.icon className='h-3/4 fill-black dark:fill-white' />
								</Container>

								<div className='relative w-full h-full flex items-center justify-center sm:block sm:pl-2 sm:pt-1'>
									<b className='text-3xl sm:text-4xl text-center'>{project.name}</b>
									<p className='hidden sm:block opacity-60'>{project.time}</p>

									<div className='absolute top-0 right-0 h-1/2 hidden sm:flex flex-row p-2 text-2xl'>
										{technologies(project.technologies)}
									</div>
								</div>
							</Container>

							<p className='px-4 py-2 text-justify'>{project.desc}</p>

							<Container className='h-[78px] flex flex-row' borders='t'>
								{buttons(project.links)}
							</Container>
						</Container>
					)
				})}
			</div>
		</div>
	)
}
