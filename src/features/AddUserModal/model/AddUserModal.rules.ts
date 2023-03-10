import { emailPattern } from './../../../shared/patterns/email'
import { IFieldRules } from '@shared/types/forms.interface'

export const rules: IFieldRules = {
	email: {
		required: { value: true, message: 'Email is required' },
		pattern: {
			value: emailPattern,
			message: 'Email is not valid'
		},
		maxLength: {
			value: 30,
			message: 'Email must contain 30 or less characters'
		}
	},
	login: {
		required: { value: true, message: 'Login is required' },
		maxLength: {
			value: 30,
			message: 'Login must contain 30 or less characters'
		}
	},
	password: {
		required: { value: true, message: 'Password is required' }
	}
}
