import { SET_MESSAGE } from './types';

export default (state: any, action: any) => {
  switch (action.type) {
    case SET_MESSAGE: {
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type
      };
    }
  }
};
