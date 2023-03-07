import { rem } from '@app/styles/mixins'
import styled from 'styled-components'

export const LoginImg = styled.div`
	@media (max-width: ${rem(768)}) {
		display: none;
	}
`
