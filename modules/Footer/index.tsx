import {
	DiscordIcon,
	InstagramIcon,
	TwitterIcon,
	YouTubeIcon,
} from '@/assets/icons'
import { CustomImage, Heading, Input, Text } from '@/components'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='bg-[#3B3B3B] py-[40px]'>
			<div className='containers'>
				<div className='flex flex-col gap-[30px] lg:gap-0 lg:flex-row justify-between pb-[30px] border-b-[1px] border-[#858584] mb-[20px]'>
					<div className='max-w-[243px]'>
						<Link className='mb-[30px] inline-block' href={'/'}>
							<CustomImage src='/logo.svg' alt='Logo' W={243} H={32} />
						</Link>
						<Text classList='!mb-[20px]'>
							NFT marketplace UI created with Anima for Figma.
						</Text>
						<Text classList='!mb-[20px]'>Join our community</Text>
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
						<Heading classList='!mb-[25px] block'>Explore</Heading>
						<div className='flex flex-col gap-[20px]'>
							<Link href={'/marketplace'}>
								<Text>Marketplace</Text>
							</Link>
							<Link href={'/rankings'}>
								<Text>Rankings</Text>
							</Link>
							<Link href={'/connect-wallet'}>
								<Text>Connect a wallet</Text>
							</Link>
						</div>
					</div>
					<div className='w-full sm:w-[420px]'>
						<Heading classList='mb-[25px] block'>
							Join our weekly digest
						</Heading>
						<div className='max-w-[330px] mb-[20px]'>
							<Text>
								Get exclusive promotions & updates straight to your inbox.
							</Text>
						</div>
						<Input showIcon={true} />
					</div>
				</div>
				<Text classList='!text-[12px]'>
					Ⓒ NFT Market. Use this template freely.
				</Text>
			</div>
		</footer>
	)
}

export default Footer
