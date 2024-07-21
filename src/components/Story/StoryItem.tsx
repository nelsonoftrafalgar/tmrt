'use client'

import { Kid, Kids, Wrapper } from './styles'
import { format, fromUnixTime } from 'date-fns'

import DOMPurify from 'dompurify'
import { StoryItemProps } from './types'

export const StoryItem = ({ story }: StoryItemProps) => {
	const {
		type,
		title,
		by,
		time,
		text,
		url,
		score,
		descendants,
		dead,
		deleted,
		kids
	} = story
	const timeValue = format(fromUnixTime(time), 'yyyy-MM-dd HH:mm:ss')
	const textValue = DOMPurify.sanitize(text ?? '')
	const deadValue = String(dead)
	const deletedValue = String(deleted)
	return (
		<Wrapper>
			<h2>{type}</h2>
			<p>
				<strong>Title:</strong> <span>{title}</span>
			</p>
			<p>
				<strong>By:</strong> <span>{by}</span>
			</p>
			<p>
				<strong>Time:</strong> <span>{timeValue}</span>
			</p>
			{text && (
				<p>
					<strong>Text:</strong> <span>{textValue}</span>
				</p>
			)}
			<p>
				<strong>Url:</strong>{' '}
				<a target='_blank' rel='noopener noreferrer' href={url}>
					{url}
				</a>
			</p>
			<p>
				<strong>Score:</strong> <span>{score}</span>
			</p>
			<p>
				<strong>Descendants:</strong> <span>{descendants}</span>
			</p>
			{dead && (
				<p>
					<strong>Dead:</strong> <span>{deadValue}</span>
				</p>
			)}
			{deleted && (
				<p>
					<strong>Deleted:</strong> <span>{deletedValue}</span>
				</p>
			)}
			{kids && (
				<>
					<p>
						<strong>Kids:</strong>
					</p>
					<Kids>
						{kids?.map((kid) => (
							<Kid
								href={`https://news.ycombinator.com/item?id=${kid}`}
								target='_blank'
								rel='noopener noreferrer'
								key={kid}
								aria-label={`Link to comment ${kid}`}
							>
								{kid}
							</Kid>
						))}
					</Kids>
				</>
			)}
		</Wrapper>
	)
}
