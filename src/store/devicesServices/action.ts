export const GET_ITEMS = {
  FAILURE: 'GET_ITEMS_FAILURE',
  REQUEST: 'GET_ITEMS_REQUEST',
  SUCCESS: 'GET_ITEMS_SUCCESS'
};

export const getItems = () => {
  return {
    type: GET_ITEMS.REQUEST
  }
};

export const getItemsSuccess = (items: {}) => {
  return {
    items,
    type: GET_ITEMS.SUCCESS
  }
};

export const getItemsFailure = (error: string) => {
  return {
    payload: error,
    type: GET_ITEMS.FAILURE
  }
};