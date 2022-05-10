const SET = "stocks/SET";
const GET = "stocks/GET";

export const initialState = {
  value: [],
};

export const set = (stocks) => ({
  type: SET,
  value: stocks,
});

export const get = (stocks) => ({
  type: GET,
  value: stocks,
});

export default function stocks(state = initialState, action) {
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