export interface StoryItem {
	id: number
	deleted?: boolean
	type: 'story'
	by: string
	time: number
	text?: string
	dead?: boolean
	kids?: number[]
	url: string
	score: number
	title: string
	descendants: number
}

export interface JobItem {
	id: number
	deleted?: boolean
	type: 'job'
	by: string
	time: number
	text?: string
	dead?: boolean
	kids: number[]
	score: number
	title: string
}

export type Story = StoryItem | JobItem

export interface StoryProps {
	story: Story
}

export interface StoryItemProps {
	story: StoryItem
}

export interface JobItemProps {
	job: JobItem
}
