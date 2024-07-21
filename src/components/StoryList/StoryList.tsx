'use client'

import { Id, Item, List, StyledLink } from './styles'

import { StoryListProps } from './types'

export const StoryList = ({ stories }: StoryListProps) => {
	return (
		<List>
			{stories.map((story) => (
				<StyledLink
					key={story}
					href={`/story/${story}`}
					aria-label={`Go to story ${story}`}
				>
					<Item>
						<p>Go to story</p>
						<Id>{story}</Id>
					</Item>
				</StyledLink>
			))}
		</List>
	)
}
