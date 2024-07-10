export const stockKeys = {
	all: ['stocks'] as const,
	get: () => [...stockKeys.all, 'allStocks'] as const,
	getById: (id: string) => [...stockKeys.all, id] as const,
	post: () => [...stockKeys.all, 'post'] as const,
	put: (id: string) => [...stockKeys.all, id] as const,
	patch: (id: string) => [...stockKeys.all, id] as const,
	delete: (id: string) => [...stockKeys.all, id] as const,
};
