import { Dispatch, SetStateAction, useEffect } from 'react'

export const useResetFormState = (
	callback: Dispatch<SetStateAction<number>>,
	trigger?: string
) => {
	useEffect(() => {
		let timer: NodeJS.Timeout
		if (trigger) {
			timer = setTimeout(() => {
				callback(Math.random())
			}, 2000)
		}
		return () => clearTimeout(timer)
	}, [trigger])
}
