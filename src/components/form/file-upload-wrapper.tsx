'use client';

import { cn } from '@/lib/utils';
const FileUploadWrapper = () => {
	return (
		<div className='flex items-center gap-4 cursor-pointer'>
			<div className='bg-[#311300] p-1 size-12 rounded-full flex justify-center items-center shrink-0'></div>
			<div className='relative h-[74px] flex-1 shrink-0'>
				<p
					className={cn(`
            p-2
            xs:p-4
            h-[74px]
            py-2
            mr-12
            xs:text-[.65rem]
            text-[.5rem]
            leading-4
            text-center
            border
            flex
            items-center
            justify-center
            text-gray-500
            border-gray-300
            rounded-lg
            rounded-r-none
            focus:outline-none
            focus:border-blue-500
            focus:ring-1
            focus:ring-blue-500
            focus:ring-opacity-50
            disabled:opacity-50
            disabled:cursor-not-allowed
            disabled:bg-gray-100
            disabled:border-gray-300`)}>
					Click to Upload, or Drag and Drop <br /> PNG or JPG files. Maximum
					file size 20MB
				</p>
				<div
					className={cn(` absolute
                  w-12
                    inset-y-0
                    right-0
                    flex
                    items-center
                    justify-center
                    bg-primary-100
                    border
                    border-primary-100
                    text-white
                    rounded-r-lg
                    focus:outline-none
                    focus:border-blue-500
                    focus:ring-1
                    focus:ring-blue-500
                    focus:ring-opacity-50
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                    disabled:bg-gray-100
                    disabled:border-gray-300`)}></div>
			</div>
		</div>
	);
};

export default FileUploadWrapper;
