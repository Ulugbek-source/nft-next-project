import { MessageIcon } from '@/assets/icons'
import Button from './Button'

const Input = ({ showIcon }: { showIcon?: boolean }) => {
	return (
		<form className='w-full relative' autoComplete='off'>
			<input
				name='email'
				className='bg-white w-full rounded-[20px] py-[19px] pl-[20px] pr-[180px] outline-none'
				type='email'
				required
				placeholder='Enter your email here'
			/>
			<Button
				icon={showIcon && <MessageIcon />}
				iconPosition='left'
				classList='absolute top-0 right-0 bottom-0 !px-[50px]'
			>
				Subscribe
			</Button>
		</form>
	)
}

export default Input
