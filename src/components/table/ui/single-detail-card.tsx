'use client';

import { cn } from '@/lib/utils';

type SingleDetailCardProps = {
	title: string;
	value: number;
	status?: string;
};
export function SingleDetailCard({
	title,
	value,
	status,
}: SingleDetailCardProps) {
	return (
		<div
			className={cn(
				`w-full h-[198px] p-6  rounded-lg shadow border border-gray-200 flex-col justify-start items-start gap-6 inline-flex`,
				{
					'bg-emerald-50': status === 'inStock',
					'bg-amber-100': status === 'runningOut',
					'bg-red-100': status === 'outOfStock',
				}
			)}>
			<div className='self-stretch justify-start items-start gap-2 inline-flex'>
				<div className='grow shrink basis-0 text-slate-700 text-base font-semibold   leading-normal'>
					{title}
				</div>
			</div>
			<div className='self-stretch justify-start items-end gap-4 inline-flex'>
				<div className='grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex'>
					<div className='self-stretch text-slate-900 text-4xl font-semibold   leading-[44px]'>
						{value}
					</div>
					<div className='self-stretch h-[42px] flex-col justify-start items-start gap-4 flex'>
						<div className='self-stretch h-2 justify-start items-center gap-3 inline-flex'>
							<div className='w-[290.67px] h-2 relative rounded-lg'>
								<div className='w-[291px] h-2 left-0 top-0 absolute bg-neutral-300 rounded' />
								<div
									className={cn(
										`w-[267.41px] h-2 left-0 top-0 absolute rounded`,
										{
											'bg-emerald-700': status === 'inStock',
											'bg-amber-500': status === 'runningOut',
											'bg-red-700': status === 'outOfStock',
										}
									)}
								/>
							</div>
						</div>
						<div className='justify-start items-start gap-4 inline-flex'>
							<div className='h-[18px] justify-start items-center gap-2 flex'>
								<div className='p-0.5 bg-emerald-100 rounded-[50px] justify-start items-center gap-2.5 flex'>
									<div
										className={cn(` size-2 rounded-full`, {
											'bg-emerald-700': status === 'inStock',
											'bg-amber-500': status === 'runningOut',
											'bg-red-700': status === 'outOfStock',
										})}
									/>
								</div>
								<div className='justify-start items-center gap-2 flex'>
									<div className='text-center text-slate-900 text-xs font-normal   leading-[18px]'>
										{value}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
