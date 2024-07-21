import { Button, Wrapper } from './styles'

import { ErrorFallbackProps } from './types'

export const ErrorFallback = ({ reset }: ErrorFallbackProps) => {
	return (
		<Wrapper>
			<h2>Something went wrong!</h2>
			<Button onClick={() => reset()}>Please try again</Button>
		</Wrapper>
	)
}
