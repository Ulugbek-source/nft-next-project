import { CreatorType } from '@/@types/CreatorType'
import { RocketIcon } from '@/assets/icons'
import { Button, CreatorCard, Heading, Text } from '@/components'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

const CreatorContent: FC<{ creators: CreatorType[] }> = ({ creators }) => {
	const t = useTranslations('creatorContent')
	return (
		<section className='py-[80px]'>
			<div className='containers'>
				<div className='flex items-center justify-between mb-[60px]'>
					<div>
						<Heading classList='!mb-[10px]' tag='h2'>
							{t('title')}
						</Heading>
						<Text classList='!text-[22px]'>{t('description')}</Text>
					</div>
					<Button icon={<RocketIcon />} iconPosition='left'>
						{t('buttonText')}
					</Button>
				</div>
				<div className='flex items-center justify-between'>
					{creators.map((item, index) => (
						<CreatorCard key={item.id} item={item} index={index} />
					))}
				</div>
			</div>
		</section>
	)
}

export default CreatorContent
