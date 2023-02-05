export interface IBlog {
	id: string
	name: string
	description: string
	websiteUrl: string
	createdAt: string
	isMembership: boolean
}

export interface IBlogResponse {
	pagesCount: number
	page: number
	pageSize: number
	totalCount: number
	items: IBlog[]
}

export interface IBlogRequestModel {
	searchNameTerm: string
	sortBy: string
	sortDirection: string
	pageNumber: number
	pageSize: number
}
