export const productKeys = {
	all: ['products'] as const,
	get: () => [...productKeys.all, 'allProducts'] as const,
	getById: (id: string) => [...productKeys.all, id] as const,
	post: () => [...productKeys.all, 'post'] as const,
	put: (id: string) => [...productKeys.all, id] as const,
	patch: (id: string) => [...productKeys.all, id] as const,
	delete: (id: string) => [...productKeys.all, id] as const,
};
