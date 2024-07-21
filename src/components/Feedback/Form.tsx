'use client'

import {
	ButtonWrapper,
	Container,
	Error,
	Field,
	Input,
	Label,
	Form as StyledForm,
	SuccessMessage,
	Textarea,
	Wrapper
} from './styles'

import { FormProps } from './types'
import { SubmitButton } from './SubmitButton'
import { createFeedback } from '../../utils/actions'
import { useFormState } from 'react-dom'
import { useResetFormState } from '@/utils/hooks'

const initialState = {
	message: '',
	errors: {}
}

export const Form = ({ resetState }: FormProps) => {
	const [state, formAction] = useFormState(createFeedback, initialState)
	const { errors, message } = state
	useResetFormState(resetState, message)

	const nameError = errors?.name?.[0]
	const emailError = errors?.email?.[0]
	const feedbackError = errors?.feedback?.[0]

	return (
		<Container>
			<StyledForm action={formAction}>
				<Wrapper>
					<Field>
						<Label htmlFor='name'>Name</Label>
						<Input
							$error={Boolean(nameError)}
							placeholder='Name'
							id='name'
							name='name'
							aria-invalid={Boolean(nameError)}
							aria-describedby={nameError ? 'name-error' : undefined}
						/>
						{nameError && <Error id='name-error'>{nameError}</Error>}
					</Field>

					<Field>
						<Label htmlFor='email'>Email</Label>
						<Input
							$error={Boolean(emailError)}
							placeholder='Email'
							id='email'
							type='email'
							name='email'
							aria-invalid={Boolean(emailError)}
							aria-describedby={emailError ? 'email-error' : undefined}
						/>
						{emailError && <Error id='email-error'>{emailError}</Error>}
					</Field>
				</Wrapper>

				<Field>
					<Label htmlFor='feedback'>Feedback</Label>
					<Textarea
						$error={Boolean(feedbackError)}
						placeholder='Feedback'
						id='feedback'
						name='feedback'
						aria-invalid={Boolean(feedbackError)}
						aria-describedby={feedbackError ? 'feedback-error' : undefined}
					/>
					{feedbackError && <Error id='feedback-error'>{feedbackError}</Error>}
				</Field>
				<ButtonWrapper>
					<SubmitButton />
					{message && <SuccessMessage>{message}</SuccessMessage>}
				</ButtonWrapper>
			</StyledForm>
		</Container>
	)
}
