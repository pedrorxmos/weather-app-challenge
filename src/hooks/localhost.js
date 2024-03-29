export const getValues = (key) => {
	return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
};

//Update values to localStorage
export const updateValues = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};