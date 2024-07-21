import Link from 'next/link'
import styled from 'styled-components'

export const List = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	padding: ${({ theme }) => theme.gridUnit * 5}px;
	gap: 20px;
`

export const Item = styled.div`
	border-radius: ${({ theme }) => theme.borderRadius};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
	width: 100px;
	height: 100px;
	border: 1px solid ${({ theme }) => theme.colors.black};
`

export const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.colors.black};
	text-decoration: none;
	width: 100px;
	justify-self: center;
	&:hover {
		color: ${({ theme }) => theme.colors.white};
	}
	&:hover ${Item} {
		border-color: ${({ theme }) => theme.colors.primary};
		background-color: ${({ theme }) => theme.colors.primary};
	}
`

export const Id = styled.p`
	font-size: ${({ theme }) => theme.fonts.size.s};
`
