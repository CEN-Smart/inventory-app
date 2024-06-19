'use client';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserAvatar, DragAndDrop, FileUpload } from '@/assets';
import Image from 'next/image';

type FileUploadWrapperProps = {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	selectedImage: File | null;
};
const FileUploadWrapper = ({
	onChange,
	selectedImage,
}: FileUploadWrapperProps) => {
	return (
		<div className='space-y-1'>
			<Label
				htmlFor='logoImage'
				className='flex items-center gap-2'>
				<div>
					<Avatar className='size-20'>
						<AvatarImage
							src={selectedImage ? URL.createObjectURL(selectedImage) : ''}
						/>
						<AvatarFallback>
							<Image
								src={UserAvatar}
								alt='User Avatar'
							/>
						</AvatarFallback>
					</Avatar>
				</div>
				<div className='flex'>
					<Image
						src={DragAndDrop}
						alt='Drag and drop'
					/>
					<Image
						src={FileUpload}
						alt='File upload'
					/>
				</div>
				<Input
					className=' hidden'
					type='file'
					id='logoImage'
					onChange={onChange}
					accept='image/*'
				/>
			</Label>
		</div>
	);
};

export default FileUploadWrapper;
