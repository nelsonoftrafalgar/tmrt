import { Dispatch, SetStateAction } from 'react'

export interface FormState {
	errors?: {
		name?: string[]
		email?: string[]
		feedback?: string[]
	}
	message?: string
}

export interface FormProps {
	resetState: Dispatch<SetStateAction<number>>
}
