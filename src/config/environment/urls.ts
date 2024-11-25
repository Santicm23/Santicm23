export const API_URL = import.meta.env.PROD
	? import.meta.env.PUBLIC_PROD_URL
	: import.meta.env.PUBLIC_DEV_URL
