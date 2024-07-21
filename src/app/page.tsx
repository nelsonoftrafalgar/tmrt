import { StoryList } from '@/components/StoryList/StoryList'
import { fetchStories } from '@/api/getData'

export default async function Home() {
	const stories = await fetchStories()
	return <StoryList stories={stories} />
}
