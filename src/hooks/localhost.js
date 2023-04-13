export const getValues = (key) => {
	return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
};

//Update task to localStorage
export const updateValues = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};