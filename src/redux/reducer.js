import { ADD_MESSAGE, ADD_EMAIL, ADD_NAME } from "./user/useractiontypes";

const initialState = {
  name: ["alio "],
  email: [" "],
  message: ["HEJ,dovom "],
  xsscodes: [" "],
  flags: [" &#9734;&#9734;&#9734; "],
  commentlist: [" coocoo"],
  data: [""],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NAME":
      return { ...state, name: [...state.name, action.name] };
    case "ADD_MESSAGE":
      return { ...state, message: [...state.message, action.message] };
    case "ADD_EMAIL":
      return { ...state, email: [...state.email, action.email] };

    default:
      return state;
  }
}

export default reducer;
