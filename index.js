// by Kyon

module.exports = function NoMarrow(dispatch) {
	dispatch.hook('S_UNICAST_TRANSFORM_DATA', 1, (event) => {
		return !event.unk1; //checks for the bool that tells if the transformation was due to marrow and ignores the packet if so
	})
};