import { ADD_NAME, ADD_EMAIL, ADD_MESSAGE } from "../user/useractiontypes";

export function addName(name) {
  return {
    type: "ADD_NAME",
    name: name,
  };
}

export function addMessage(message) {
  return {
    type: "ADD_MESSAGE",
    message: message,
  };
}

export function addEmail(email) {
  return {
    type: "ADD_EMAIL",
    email: email,
  };
}
