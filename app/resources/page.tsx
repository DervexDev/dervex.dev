import { SiLua, SiRust, SiTypescript } from 'react-icons/si'

import Container from '@/components/container'
import LinkButton from '@/components/linkButton'
import Link from '@/components/link'

interface Resource {
	name: string
	desc: string | JSX.Element
	links: Array<string>
	icon: JSX.Element
}

const resources: Array<Resource> = [
	{
		name: 'json2lua',
		desc: 'Convert JSON string to Lua table. This package is very fast as it uses serde under the hood which means no tokenization takes place. It also supports all JSON and Lua datatypes.',
		links: ['https://github.com/DervexHero/json2lua', 'https://crates.io/crates/json2lua'],
		icon: <SiRust />,
	},
	{
		name: 'pathsub',
		desc: (
			<>
				Perform the subtraction of one relative or absolute path from another, yielding the subtraction difference
				rather than the relative path, in contrast to the result obtained when using the{' '}
				<Link href='https://crates.io/crates/pathdiff'>pathdiff</Link> crate.
			</>
		),
		links: ['https://github.com/DervexHero/pathsub', 'https://crates.io/crates/pathsub'],
		icon: <SiRust />,
	},
	{
		name: 'svg-to-tsx',
		desc: 'Minify and convert all your SVG files to React components (single TypeScript or JavaScript module). This package was specially made for this website to improve optimization even more.',
		links: [
			'https://github.com/DervexHero/svg-to-tsx',
			'https://www.npmjs.com/package/svg-to-tsx',
			'https://yarnpkg.com/package/svg-to-tsx',
		],
		icon: <SiTypescript />,
	},
	{
		name: 'globenv',
		desc: 'Globally set & read environment variables and paths (not just for the current process) on Windows, macOS or Linux. This Rust package lets you set environment variables easily and edit environment paths safely.',
		links: ['https://github.com/DervexHero/globenv', 'https://crates.io/crates/globenv'],
		icon: <SiRust />,
	},
	{
		name: 'Advanced Signal',
		desc: 'Probably the best implementation of signal class in Roblox as it combines performance and flexibility into one module. You can choose whether you prefer speed or ease of use by changing its config.',
		links: ['https://github.com/DervexHero/AdvancedSignal', 'https://wally.run/package/dervexhero/advancedsignal'],
		icon: <SiLua />,
	},
	{
		name: 'Advanced Spring',
		desc: 'This implementation of spring class supports every major Roblox and Luau datatype as well as auto running in separate thread. It’s very easy to use and customizable via constructor or global config.',
		links: ['https://github.com/DervexHero/AdvancedSpring', 'https://wally.run/package/dervexhero/advancedspring'],
		icon: <SiLua />,
	},
	{
		name: 'Lua Sorting Algorithms',
		desc: (
			<>
				Implementation of over 20 sorting algorithms in Lua and Luau. All algorithms have been ported from Python which
				can be found on <Link href='https://www.geeksforgeeks.org/sorting-algorithms/'>GeeksforGeeks</Link> site. Every
				file is ready to use module that can be imported.
			</>
		),
		links: ['https://github.com/DervexHero/LuaSortingAlgorithms'],
		icon: <SiLua />,
	},
]

export default function Resources() {
	function buttons(links: Array<string>) {
		return links.map((link, index) => {
			return <LinkButton key={index} index={index} link={link} tooltip='Resource website' />
		})
	}

	return (
		<div className='w-full flex flex-wrap justify-center'>
			{resources.map((resource, index) => {
				return (
					<Container key={index} className='w-[600px] m-[20px] self-center'>
						<Container className='h-[78px] flex flex-row' borders='b'>
							<Container className='min-w-[76px] h-[76px] text-[3.25rem] flex items-center justify-center' borders='r'>
								{resource.icon}
							</Container>

							<div className='relative w-full flex items-center justify-center'>
								<b className='text-3xl sm:text-4xl text-center'>{resource.name}</b>
							</div>
						</Container>

						<p className='px-4 py-2 text-justify'>{resource.desc}</p>

						<Container className='h-[78px] flex flex-row' borders='t'>
							{buttons(resource.links)}
						</Container>
					</Container>
				)
			})}
		</div>
	)
}
