const SET = "stock/SET";
const GET = "stock/GET";

export const initialState = {
  value: {},
};

export const set = (stock) => ({
  type: SET,
  value: stock,
});

export const get = (stock) => ({
  type: GET,
  value: stock,
});

export default function stock(state = initialState, action) {
  switch (action.type) {
    case SET:
      return {
        ...state,
        value: action.value
      };
    case GET:
      return state;
    default:
      return state;
  }
}