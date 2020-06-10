import { SET_CURRENT_USER } from './types';

export default (state: any, action: any) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return {
        ...state,
        user: action.payload
      };
    }
  }
};
