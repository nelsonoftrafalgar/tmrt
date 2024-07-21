'use client'

import { Li, Nav, Ul } from './styles'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navigation = () => {
	const pathname = usePathname()
	return (
		<Nav>
			<Ul>
				<Li $active={pathname === '/'}>
					<Link href='/'>Stories</Link>
				</Li>
				<Li $active={pathname === '/feedback'}>
					<Link href='/feedback'>Feedback</Link>
				</Li>
			</Ul>
		</Nav>
	)
}
