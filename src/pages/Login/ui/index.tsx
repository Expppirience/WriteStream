import { LoginForm } from '@features/LoginForm'
import { LoginImg } from '@pages/Login/ui/StyledLogin'
import GraphsSvg from '@public/img/rafiki.svg'
import { FormWithImage } from '@shared/ui/FormLayout/ui'

export const LoginPage = () => {
	return (
		<FormWithImage>
			<LoginForm />
			<LoginImg>
				<img src={GraphsSvg} alt='' />
			</LoginImg>
		</FormWithImage>
	)
}
