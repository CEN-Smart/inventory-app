import * as z from 'zod';

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
	'image/jpeg',
	'image/jpg',
	'image/png',
	'image/webp',
	'image/svg+xml',
];
export const completeSignUpSchema = z.object({
	fullName: z
		.string()
		.min(3, { message: 'Full Name is required!' })
		.trim()
		.toLowerCase(),
	country: z.string().min(3, 'Please select a country').toLowerCase()?.trim(),
	state: z.string().min(3, 'Please select a state').toLowerCase().trim(),
	lga: z.string().min(3, 'Please select a LGA').toLowerCase().trim(),
	phoneNumber: z
		.string()
		.min(10, 'Phone number must be at least 10 characters')
		.max(15, 'Phone number must be at most 15 characters')
		.regex(/^\d+$/, 'Phone number must contain only numbers'),
	companyName: z
		.string()
		.min(3, 'Company name is required')
		.toLowerCase()
		.trim(),
	userRole: z.string().min(3, 'Please select a role').toLowerCase().trim(),
	// logoImage accepts only png, jpg, jpeg, webp, svg
	logoImage: z
		.any()
		.refine(files => {
			return files?.[0]?.size <= MAX_FILE_SIZE;
		}, `Max image size is 5MB.`)
		.refine(
			files => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
			'Only .jpg, .jpeg, .png and .webp svg formats are supported.'
		),
});
