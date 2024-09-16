import Container from '@/components/container'
import LinkButton from '@/components/linkButton'

interface Release {
	title: string
	links: Array<string>
}

const resources: Array<Release> = [
	{
		title: 'Without You',
		links: [
			'https://open.spotify.com/track/28x3CVU8dBdIWnI2lP5LTt',
			'https://music.apple.com/album/1767323696',
			'https://music.youtube.com/watch?v=dFcIMN7Bl0I',
			'https://listen.tidal.com/album/386134776/track/386134781',
			'https://www.amazon.com/dp/B0DGG5SY18',
		],
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
				const spotify = resource.links[0]

				return (
					<Container key={index} className='w-[650px] m-[20px] self-center'>
						<iframe
							src={'https://open.spotify.com/embed/track' + spotify.substring(spotify.lastIndexOf('/'))}
							width='100%'
							height='352'
							allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
							loading='lazy'
						></iframe>

						<Container className='h-[78px] flex flex-row' borders='t'>
							{buttons(resource.links)}
						</Container>
					</Container>
				)
			})}
		</div>
	)
}
