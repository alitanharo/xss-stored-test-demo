import React from "react";
import { connect } from "react-redux";

function CommentList(props) {
  console.log(props.messege);
  const arr = props.usercomment;
  const listItems = arr.map((message, index) => <li key={index}>{message}</li>);
  return (
    <section>
      <div className="commentbox">
        <ul>
          {listItems} <li>{props.messege}</li>
        </ul>
      </div>
    </section>
  );
}

const mapStatetoprops = (state) => {
  return {
    usercomment: state.message,
  };
};

export default connect(mapStatetoprops)(CommentList);
