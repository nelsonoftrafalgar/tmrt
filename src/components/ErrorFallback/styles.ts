import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 20px;
`

export const Button = styled.button`
	background-color: ${({ theme }) => theme.colors.primary};
	padding-inline: ${({ theme }) => theme.gridUnit * 4}px;
	padding-block: ${({ theme }) => theme.gridUnit * 2}px;
	border-radius: ${({ theme }) => theme.borderRadius};
	font-size: ${({ theme }) => theme.fonts.size.l};
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
`
