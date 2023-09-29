import produce from 'immer';
import { get, merge } from 'lodash';
import { concat } from 'lodash';

import {
  REQUEST_FORM_COMPONENT,
  SUBMIT_FORM_COMPONENT,
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
      };
  }
});
