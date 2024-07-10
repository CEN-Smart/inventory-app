export function formatCurrency(amount: number) {
	const formattedAmount = parseFloat(amount.toFixed(2));
	const formatted = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(formattedAmount);
	return formatted;
}
