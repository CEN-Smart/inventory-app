import * as z from 'zod';

export const verificationCodeSchema = z.object({
	code: z
		.string({ required_error: 'Verification code is required' })
		.length(6, { message: 'Verification code must be 6 characters' }),
});
