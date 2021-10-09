export const handleImageError = (e, defaultImage) => {
	e.target.onerror = null;
	e.target.src = defaultImage;
};