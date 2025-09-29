import {
	DiscordIcon,
	InstagramIcon,
	TwitterIcon,
	YouTubeIcon,
} from '@/assets/icons'
import { CustomImage, Heading, Input, Text } from '@/components'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const Footer = () => {
	const t = useTranslations('footerContent')

	return (
		<footer className='bg-[#3B3B3B] py-[40px]'>
			<div className='containers'>
				<div className='flex flex-col gap-[30px] lg:gap-0 lg:flex-row justify-between pb-[30px] border-b-[1px] border-[#858584] mb-[20px]'>
					<div className='max-w-[243px]'>
						<Link className='mb-[30px] inline-block' href={'/'}>
							<CustomImage src='/logo.svg' alt='Logo' W={243} H={32} />
						</Link>
						<Text classList='!mb-[20px]'>{t('text1')}</Text>
						<Text classList='!mb-[20px]'>{t('text2')}</Text>
						<div className='flex gap-[10px] items-center text-[#858584]'>
							<Link className='hover:scale-[1.2] duration-500' href={'#'}>
								<DiscordIcon />
							</Link>
							<Link className='hover:scale-[1.2] duration-500' href={'#'}>
								<YouTubeIcon />
								<Link className='hover:scale-[1.2] duration-500' href={'#'}>
									<TwitterIcon />
								</Link>
								<Link className='hover:scale-[1.2] duration-500' href={'#'}>
									<InstagramIcon />
								</Link>
							</Link>
						</div>
					</div>
					<div className='max-w-[133px]'>
						<Heading classList='!mb-[25px] block'>{t('text3')}</Heading>
						<div className='flex flex-col gap-[20px]'>
							<Link href={'/marketplace'}>
								<Text>{t('text4')}</Text>
							</Link>
							<Link href={'/rankings'}>
								<Text>{t('text5')}</Text>
							</Link>
							<Link href={'/connect-wallet'}>
								<Text>{t('text6')}</Text>
							</Link>
						</div>
					</div>
					<div className='w-full sm:w-[420px]'>
						<Heading classList='mb-[25px] block'>{t('text7')}</Heading>
						<div className='max-w-[330px] mb-[20px]'>
							<Text>{t('text8')}</Text>
						</div>
						<Input showIcon={true} />
					</div>
				</div>
				<Text classList='!text-[12px]'>{t('text11')}</Text>
			</div>
		</footer>
	)
}

export default Footer
