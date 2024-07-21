'use client'

import { Container } from './styles'
import { JobItem } from './JobItem'
import { StoryItem } from './StoryItem'
import { StoryProps } from './types'

export const Story = ({ story }: StoryProps) => {
	const isStory = story.type === 'story'
	const isJob = story.type === 'job'

	return (
		<Container>
			{isStory && <StoryItem story={story} />}
			{isJob && <JobItem job={story} />}
		</Container>
	)
}
