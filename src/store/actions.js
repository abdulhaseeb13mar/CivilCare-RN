import ActionTypes from './actionTypes';

export const setCurrentBuilderAction = (builderInfo) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.SET_BUILDER_INFO,
      payload: builderInfo,
    });
  };
};

export const setUserInfoAction = (userInfo) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.SET_USER_INFO,
      payload: userInfo,
    });
  };
};
