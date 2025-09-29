'use client'
import { usePathname, useRouter } from '@/i18n/navigation'
import { getCookie } from 'cookies-next'
import React, { useState, MouseEvent, useEffect } from 'react'
const LangConfig = () => {
	const router = useRouter()
	const b = getCookie('NEXT_LOCALE')
	const pathname = usePathname()
	const langList = ['EN', 'UZ', 'RU']
	const [lang, setLang] = useState('EN')
	function handleChange(e: MouseEvent<HTMLParagraphElement>) {
		setLang((e.target as HTMLParagraphElement).textContent)
		router.push(pathname, {
			locale: (e.target as HTMLParagraphElement).textContent,
		})
	}
	useEffect(() => {
		const b = getCookie('NEXT_LOCALE')?.toString().toUpperCase()
		if (b && langList.includes(b)) {
			setLang(b)
		}
	}, [])
	return (
		<div className='text-white hidden lg:block cursor-pointer relative duration-500 lang-wrapper'>
			{lang}
			<div className='flex flex-col absolute lang-inner duration-500 bg-[#a259ff] right-[-10px] top-[30px] h-0 overflow-hidden rounded-md'>
				{langList
					.filter(item => item !== lang)
					.map((item, index) => (
						<p
							key={index}
							onClick={handleChange}
							className='p-2 hover:bg-white hover:text-black duration-500'
						>
							{item}
						</p>
					))}
			</div>
		</div>
	)
}

export default LangConfig
