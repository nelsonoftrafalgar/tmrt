import styled, { css } from 'styled-components'

export const Nav = styled.nav`
	position: fixed;
	z-index: 1;
	background-color: ${({ theme }) => theme.colors.black};
	width: 100%;
	height: 80px;
	padding: ${({ theme }) => theme.gridUnit * 5}px;
`

export const Ul = styled.ul`
	display: flex;
	gap: 20px;
	height: 100%;
	align-items: center;
`

export const Li = styled.li<{ $active: boolean }>`
	background-color: ${({ theme }) => theme.colors.black};
	padding-inline: ${({ theme }) => theme.gridUnit * 4}px;
	padding-block: ${({ theme }) => theme.gridUnit * 2}px;
	border-radius: ${({ theme }) => theme.borderRadius};
	a {
		color: ${({ theme }) => theme.colors.white};
		text-decoration: none;
	}
	${({ theme, $active }) =>
		$active &&
		css`
			background-color: ${theme.colors.primary};
		`}
`
