'use client'

import { Form } from './Form'
import { useState } from 'react'

export const Feedback = () => {
	const [keyState, setKeyState] = useState(Math.random())

	return <Form resetState={setKeyState} key={keyState} />
}
