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
	gap: 40px;
	flex-wrap: wrap;
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	border: 1px solid ${({ theme }) => theme.colors.black};
	border-radius: ${({ theme }) => theme.borderRadius};
	padding: ${({ theme }) => theme.gridUnit * 5}px;
	gap: 40px;
`

export const Field = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	flex-grow: 1;
`

export const Input = styled.input<{ $error?: boolean }>`
	border: 1px solid
		${({ theme, $error }) => ($error ? theme.colors.error : theme.colors.black)};
	border-radius: ${({ theme }) => theme.borderRadius};
	padding: ${({ theme }) => theme.gridUnit * 5}px;
	&::placeholder {
		color: ${({ theme }) => theme.colors.black};
	}
`

export const Textarea = styled.textarea<{ $error?: boolean }>`
	border: 1px solid
		${({ theme, $error }) => ($error ? theme.colors.error : theme.colors.black)};
	border-radius: ${({ theme }) => theme.borderRadius};
	padding: ${({ theme }) => theme.gridUnit * 5}px;
	width: 100%;
	&::placeholder {
		color: ${({ theme }) => theme.colors.black};
	}
`

export const Label = styled.label`
	margin-bottom: ${({ theme }) => theme.gridUnit * 2}px;
	color: ${({ theme }) => theme.colors.black};
`

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`

export const Button = styled.button`
	background-color: ${({ theme }) => theme.colors.primary};
	padding-inline: ${({ theme }) => theme.gridUnit * 4}px;
	padding-block: ${({ theme }) => theme.gridUnit * 2}px;
	border-radius: ${({ theme }) => theme.borderRadius};
	font-size: ${({ theme }) => theme.fonts.size.l};
	align-self: flex-end;
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
`

export const Error = styled.p`
	color: ${({ theme }) => theme.colors.error};
	font-size: ${({ theme }) => theme.fonts.size.s};
	position: absolute;
	bottom: -20px;
`

export const SuccessMessage = styled.p`
	font-size: ${({ theme }) => theme.fonts.size.m};
	color: ${({ theme }) => theme.colors.success};
`
