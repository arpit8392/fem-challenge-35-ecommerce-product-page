export const getDiscountedPrice = (
	currentPrice: number,
	discountPercentage: number
): number => (currentPrice * discountPercentage) / 100
