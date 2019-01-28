module.exports = function NoMarrow(dispatch) {
	dispatch.hook('S_UNICAST_TRANSFORM_DATA', 5, (event) => {
		return !event.isExpandTransform;
	});
	// isExpandTransform is the dragon costume
	// 999001036 is the buff bar thing
	// 999001037 is the glowy stuff
	// 999001038 idk
	dispatch.hook('S_ABNORMALITY_BEGIN', 3, (event) => {
        if (event.id === 999001037 || event.id === 999001038) return false;
    });
	dispatch.hook('S_ABNORMALITY_END', 1, (event) => {
        if (event.id === 999001037 || event.id === 999001038)  return false;
    });
};