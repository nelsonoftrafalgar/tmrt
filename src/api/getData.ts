import { Story } from '@/components/Story/types'

export const fetchStory = async (storyId: string): Promise<Story> => {
	const res = await fetch(
		`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
	)

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export const fetchStories = async (): Promise<number[]> => {
	const res = await fetch(
		'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
	)

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}
