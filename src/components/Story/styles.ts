import styled from 'styled-components'

export const Container = styled.div`
	padding: ${({ theme }) => theme.gridUnit * 5}px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid ${({ theme }) => theme.colors.black};
	border-radius: ${({ theme }) => theme.borderRadius};
	padding: ${({ theme }) => theme.gridUnit * 5}px;
	gap: 10px;
	max-width: 450px;
`

export const Kids = styled.div`
	max-height: 200px;
	overflow-y: auto;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	gap: 10px;
`

export const Kid = styled.a`
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.white};
	padding: ${({ theme }) => theme.gridUnit * 2}px;
	text-decoration: none;
	text-align: center;
`
