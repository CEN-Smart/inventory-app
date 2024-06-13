import * as z from 'zod';

// The schema for the complete sign up request
// 1. fullName
// 2. country which is a select option
// 3. state which is a select option
// 4. city which is a select option
// 5. phoneNumber is a number field
// 6. companyName
// 7. logoImage

const MAX_FILE_SIZE = 3000000;
function checkFileType(file: File) {
  // file type checking
  if (file?.name) {
    const fileType = file.name.split('.').pop() || '';
    if (['gif', 'png', 'jpg'].includes(fileType)) return true;
  }
  return false;
}

export const completeSignUpSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: 'Full Name is required!' })
    .trim()
    .toLowerCase(),
  country: z.string().min(3, 'Please select a country').toLowerCase().trim(),
  state: z.string().min(3, 'Please select a state').toLowerCase().trim(),
  city: z.string().min(3, 'Please select a LGA').toLowerCase().trim(),
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
  logoImage: z
    .any()
    .refine(
      (file: File | undefined) => file?.size !== 0,
      'Logo image is required'
    ) // If you also wanna validate if the file exists
    .refine(file => file.size < MAX_FILE_SIZE, 'Max size is 3MB.') // file size validation
    .refine(
      file => checkFileType(file),
      'Only .jpg, .gif, .png formats are supported.'
    ),
});
