import { Button } from './styles'
import { useFormStatus } from 'react-dom'

export function SubmitButton() {
	const { pending } = useFormStatus()

	return (
		<Button
			type='submit'
			disabled={pending}
			aria-busy={pending}
			aria-disabled={pending}
		>
			{pending ? 'Loading' : 'Submit'}
		</Button>
	)
}
