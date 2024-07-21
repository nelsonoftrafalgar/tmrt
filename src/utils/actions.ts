'use server'

import { FormSchema } from './validation'
import { FormState } from '../components/Feedback/types'

export const createFeedback = async (_: FormState, formData: FormData) => {
	const rawFormData = {
		name: formData.get('name'),
		email: formData.get('email'),
		feedback: formData.get('feedback')
	}

	const validatedFields = FormSchema.safeParse(rawFormData)

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors
		}
	}

	const { name, email, feedback } = validatedFields.data

	console.log({ name, email, feedback })

	return {
		errors: {},
		message: 'Feedback created successfully!'
	} as FormState
}
