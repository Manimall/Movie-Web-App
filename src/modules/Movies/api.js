export const getMovies = async (endPoint) => { //eslint-disable-line max-statements
	try {
		const response = await fetch(endPoint);
		if (response.status === 401 || response.status === 403) {
			throw new Error("Нет доступа или страница не найдена");
		}

		const data = await response.json();
		// console.log(data);
		return data;
	} catch (error) {
		console.log("Error: ", error);
		return Promise.reject(error);
	}
};
