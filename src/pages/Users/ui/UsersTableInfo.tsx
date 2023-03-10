import { tableConfig } from '@pages/Users/model'
import { UserHeaderItem, UsersTableHeader } from '@pages/Users/ui/StyledUsers'

export const UsersTableInfo = () => {
	return (
		<UsersTableHeader {...tableConfig}>
			<UserHeaderItem>Username</UserHeaderItem>
			<UserHeaderItem>Email</UserHeaderItem>
			<UserHeaderItem>User ID</UserHeaderItem>
			<UserHeaderItem>Date created</UserHeaderItem>
		</UsersTableHeader>
	)
}
