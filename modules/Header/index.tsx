import { MenuIcon, SignUpIcon } from '@/assets/icons'
import { Button, CustomImage } from '@/components'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const Header = () => {
	const t = useTranslations('headerContent')
	return (
		<header className='px-[30px] lg:px-[50px] py-[15px] lg:py-[20px] flex justify-between items-center'>
			<Link href={'/'}>
				<CustomImage
					classList='!w-[182px] !h-[24px] lg:!w-[243px] lg:!h-[32px]'
					src='/logo.svg'
					alt='Logo'
					W={243}
					H={32}
				/>
			</Link>
			<div className='hidden lg:flex items-center gap-[30px]'>
				<Link
					className='font-semibold hover:text-[#A259FF] duration-500 text-[16px] text-white'
					href={'/marketplace'}
				>
					{t('marketplace')}
				</Link>
				<Link
					className='font-semibold hover:text-[#A259FF] duration-500 text-[16px] text-white'
					href={'/rankings'}
				>
					{t('rankings')}
				</Link>
				<Link
					className='font-semibold hover:text-[#A259FF] duration-500  text-[16px] text-white'
					href={'/connect-wallet'}
				>
					{t('connectWallet')}
				</Link>
				<Button icon={<SignUpIcon />} iconPosition='left'>
					{t('signUp')}
				</Button>
			</div>
			<button className='cursor-pointer lg:hidden'>
				<MenuIcon />
			</button>
		</header>
	)
}

export default Header
