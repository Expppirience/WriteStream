import { IBreadCrumbsItem } from '../model'
import { BreadCrumbsItem, BreadCrumbsItems } from './StyledBreadCrumbs'
import { FC } from 'react'
import { BiRightArrow } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

interface IBreadCrumbs {
	items: IBreadCrumbsItem[]
}

export const BreadCrumbs: FC<IBreadCrumbs> = ({ items }) => {
	return (
		<BreadCrumbsItems>
			{items.map((item, i) => {
				const lastItem = i + 1 === items.length
				return (
					<>
						<BreadCrumbsItem
							as={item.tag ? item.tag : 'span'}
							first={i === 0}
							key={i}
						>
							{item.link && !lastItem ? (
								<NavLink to={`/${item.link}`}>{item.title}</NavLink>
							) : (
								item.title
							)}
						</BreadCrumbsItem>
						{!lastItem && (
							<BiRightArrow aria-label='Pointer to the next item' />
						)}
					</>
				)
			})}
		</BreadCrumbsItems>
	)
}
