import { SignUpIcon } from '@/assets/icons'
import { Button, CustomImage } from '@/components'
import Link from 'next/link'

const Header = () => {
	return (
		<header className='px-[20px] py-[20px] flex justify-between items-center'>
			<Link href={'/'}>
				<CustomImage src='/logo.svg' alt='Logo' W={243} H={32} />
			</Link>
			<div className='flex items-center gap-[30px]'>
				<Link
					className='font-semibold hover:text-[#A259FF] duration-500 text-[16px] text-white'
					href={'/marketplace'}
				>
					Marketplace
				</Link>
				<Link
					className='font-semibold hover:text-[#A259FF] duration-500 text-[16px] text-white'
					href={'/rankings'}
				>
					Rankings
				</Link>
				<Link
					className='font-semibold hover:text-[#A259FF] duration-500  text-[16px] text-white'
					href={'/connect-wallet'}
				>
					Connect a wallet
				</Link>
				<Button icon={<SignUpIcon />} iconPosition='left'>
					Sign up
				</Button>
			</div>
		</header>
	)
}

export default Header
