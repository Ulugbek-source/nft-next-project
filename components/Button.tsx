import { FC, ReactNode, MouseEventHandler } from 'react'

interface ButtonType {
	classList?: string
	iconPosition?: 'left' | 'right'
	children: ReactNode
	icon?: ReactNode
	onClick?: MouseEventHandler<HTMLButtonElement>
}
const Button: FC<ButtonType> = ({
	iconPosition,
	icon,
	children,
	classList,
	onClick,
}) => {
	return (
		<button
			onClick={onClick}
			className={`${classList} bg-[#A259FF] hover:bg-transparent border-[2px] hover:text-[#A259FF] border-transparent hover:border-[#A259FF] text-white duration-500 font-semibold text-[16px] py-[19px] px-[30px] rounded-[20px] flex items-center justify-center gap-[12px] cursor-pointer`}
		>
			{iconPosition == 'left' && icon && icon}
			{children}
			{iconPosition == 'right' && icon && icon}
		</button>
	)
}

export default Button
