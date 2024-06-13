import { z } from 'zod';

export const signUpSchema = z
	.object({
		email: z
			.string({ required_error: 'Email is required' })
			.email({ message: 'Invalid Email' })
			.toLowerCase()
			.trim(),
		//  password field show follow the password policy
		// 1. At least 8 characters
		// 2. At least one uppercase letter
		// 3. At least one lowercase letter
		// 4. At least one number
		// 5. At least one special character
		password: z
			.string({
				required_error: 'Password is required',
			})
			.min(8, { message: 'Password must be at least 8 characters' })
			.regex(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
				'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
			),
		// confirmPassword field should match the password field
		confirmPassword: z.string({
			required_error: 'Confirm password is required',
		}),
		// verification code that is a number
		verificationCode: z
			.string({
				required_error: 'Verification code is required',
			})
			.regex(/^\d{6}$/, {
				message: 'Verification code must be a 6-digit number',
			}),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});
