import produce from 'immer';
import { get, merge, set } from 'lodash';
import { concat } from 'lodash';

import {
  ACTIVATE_FORM_RESULT,
  REQUEST_FORM_COMPONENT,
  SUBMIT_FORM_COMPONENT,
  TOGGLE_MODAL_SIDEBAR,
} from '../../constants/formConstants';
import { getForm } from '../../utils/get/getForm';

export const formR = produce((state, action) => {
  const type = get(action, 'type');
  const data = get(action, 'data');
  const id = get(action, 'id');

  switch (type) {
    case REQUEST_FORM_COMPONENT:
      const form = getForm({ id })
      
      return merge({}, state, {
        data: {
          [id]: form,
        }
      })
    
    case TOGGLE_MODAL_SIDEBAR:
      const currentStatus = get(state, 'mobileMenuOpened')
      
      return set(state, 'mobileMenuOpened', !currentStatus)
    
    case ACTIVATE_FORM_RESULT:
      if(get(state, 'activeResult') === id) {
        return set(state, 'activeResult', null)
      } else {
        return set(state, 'activeResult', id)
      }

    case SUBMIT_FORM_COMPONENT:
      if (state && state.results) {
        return {
          ...state,
          results: concat(state.results, data),
        };
      } else {
        return {
          ...state,
          results: data,
        };
      }

    default:
      return state || {
        data: {},
        results: [],
        activeResult: null,
        mobileMenuOpened: false,
      };
  }
});
