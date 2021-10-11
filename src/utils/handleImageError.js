/**
 * repace with default image when server image loaded failure
 * @param {DOM} e // event
 * @param {Image Object} defaultImage
 */
export const handleImageError = (e, defaultImage) => {
	e.target.onerror = null;
	e.target.src = defaultImage;
};
