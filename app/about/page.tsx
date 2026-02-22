import {
	SiLua,
	SiCplusplus,
	SiRust,
	SiTypescript,
	SiSwift,
	SiPython,
	SiC,
	SiCsharp,
	SiKotlin,
	SiGo,
} from 'react-icons/si'
import Container from '@/components/container'

interface Skill {
	name: string
	level: number
	icon: JSX.Element
}

const SKILLS: Array<Skill> = [
	{
		name: 'Rust',
		level: 90,
		icon: <SiRust />,
	},
	{
		name: 'C',
		level: 60,
		icon: <SiC />,
	},
	{
		name: 'C++',
		level: 70,
		icon: <SiCplusplus />,
	},
	{
		name: 'C#',
		level: 80,
		icon: <SiCsharp />,
	},
	{
		name: 'Kotlin & Java',
		level: 30,
		icon: <SiKotlin />,
	},

	{
		name: 'TypeScript & JS',
		level: 90,
		icon: <SiTypescript />,
	},
	{
		name: 'Lua(u)',
		level: 100,
		icon: <SiLua />,
	},
	{
		name: 'Python',
		level: 70,
		icon: <SiPython />,
	},
	{
		name: 'Swift',
		level: 40,
		icon: <SiSwift />,
	},
	{
		name: 'Go',
		level: 20,
		icon: <SiGo />,
	},
]

export default function About() {
	function graphs(skills: Array<Skill>) {
		return skills.map((skill, index) => {
			return (
				<Container key={index} className='h-[78px]' borders={index == 0 ? '' : 't'}>
					<Container className='h-1/2 flex flex-row' borders='b'>
						<Container className='min-w-[37px] h-full text-2xl flex items-center justify-center' borders='r'>
							{skill.icon}
						</Container>

						<div className='w-full h-full text-sm sm:text-xl flex items-center justify-center'>
							<b className='text-center'>{skill.name}</b>
						</div>
					</Container>

					<div className='h-1/2 flex flex-row'>
						<Container className='w-full h-full' borders='r'>
							<div className='h-full' style={{ width: `${skill.level}%` }}>
								<div className='w-full h-full animate-progress bg-black dark:bg-white' />
							</div>
						</Container>

						<div className='w-[80px] px-4 flex items-center justify-center'>{skill.level}%</div>
					</div>
				</Container>
			)
		})
	}

	return (
		<div className='w-full flex flex-wrap justify-center'>
			<Container className='w-[700px] m-[20px] self-center'>
				<Container className='h-[78px] text-3xl sm:text-4xl flex items-center justify-center' borders='b'>
					<b>More about me</b>
				</Container>

				<p className='px-4 py-2 text-justify'>
					My real name is Dawid Radziejewski, I’m {new Date().getFullYear() - 2005} years old and live in Poland, at
					least for now. I do programming on a daily basis as it’s my current job – mostly game development. I also
					really enjoy working on open-source software that you can explore on this site. My other hobby is music
					production, all kinds of electronic genres.
				</p>

				<p className='px-4 py-2 text-justify'>
					I’ve been programming since 2020 and I’m 100% self-taught. Currently I focus on <b>CLI apps (Rust)</b>
					<b> Unreal Engine (C++)</b>, <b>Roblox (Luau)</b>, and various
					<b> web tools (TypeScript)</b>. I’m graphic designer by profession and I’m familiar with the whole{' '}
					<b>Adobe Creative</b> suite. I’m also good at <b>Blender</b>, I know how create game-ready models and animate
					them.
				</p>
			</Container>

			<Container className='w-[600px] m-[20px] self-center'>
				<Container className='h-[78px] text-3xl sm:text-4xl flex items-center justify-center' borders='b'>
					<b>Language Skills</b>
				</Container>

				<div className='flex flex-row'>
					<Container className='w-1/2' borders='r'>
						{graphs(SKILLS.slice(0, SKILLS.length / 2))}
					</Container>

					<div className='w-1/2'>{graphs(SKILLS.slice(SKILLS.length / 2))}</div>
				</div>
			</Container>
		</div>
	)
}
