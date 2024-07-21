import * as z from 'zod'

export const FormSchema = z.object({
	name: z
		.string()
		.min(1, 'Name is required')
		.max(100, 'Name must be less than 100 characters'),
	email: z.string().min(1, 'Email is required').email('Invalid email format'),
	feedback: z
		.string()
		.min(1, 'Feedback is required')
		.max(500, 'Feedback must be less than 500 characters')
})
