export default function Footer() {
	return (
		<footer
			id='test'
			className='text-black dark:text-white text-xs text-center md:text-left opacity-60 pb-2 pl-2 md:pb-0 float-bottom'
		>
			© {new Date().getFullYear()} Made with ♥ by Dervex
		</footer>
	)
}
