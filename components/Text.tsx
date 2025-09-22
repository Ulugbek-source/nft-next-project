import { FC, ReactNode } from 'react'

interface TextType {
	classList?: string
	children: ReactNode
}
const Text: FC<TextType> = ({ classList, children }) => {
	return <p className={`text-[#CCCCCC] text-[16px] ${classList}`}>{children}</p>
}

export default Text
