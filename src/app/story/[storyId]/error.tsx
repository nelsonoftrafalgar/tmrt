'use client'

import { ErrorFallback } from '@/components/ErrorFallback/ErrorFallback'

interface ErrorProps {
	reset: () => void
}

export default function Error({ reset }: ErrorProps) {
	return <ErrorFallback reset={reset} />
}
