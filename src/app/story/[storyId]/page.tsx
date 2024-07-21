import { Story } from '@/components/Story/Story'
import { fetchStory } from '@/api/getData'

interface PageProps {
	params: { storyId: string }
}

export default async function Page({ params }: PageProps) {
	const story = await fetchStory(params.storyId)
	return <Story story={story} />
}
