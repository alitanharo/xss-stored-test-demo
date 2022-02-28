import React, { useState } from "react";
import { connect } from "react-redux";
import { addMessage, addEmail, addName } from "../redux/user/actions";

function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleChange(e) {
    if (e.target.type === "search") {
      setName(e.target.value);
    } else if (e.target.type === "email") {
      setEmail(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  }

  function handleSubmit(e) {
    if (message !== "") {
      props.addMessage(message);
      props.addEmail(email);
      props.addName(name);

      setMessage("");
      setEmail("");
      setName("");
    } else {
      alert("Please write your message before submite!");
    }
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Please complete the form below and send your message.</label>
        <br />
        <input
          type="search"
          name="name"
          id="myname"
          placeholder="Name"
          onChange={handleChange}
          value={name}
        />
        <input
          type="email"
          name="email"
          id="myemail"
          placeholder="E-mail"
          onChange={handleChange}
          value={email}
        />
        <br />
        <br />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          onChange={handleChange}
          value={message}
          id="mymessage"
        />
        <br />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default connect(null, { addMessage, addEmail, addName })(UserForm);
