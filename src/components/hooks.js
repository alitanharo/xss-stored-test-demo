import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addList } from "../redux/actions";

export default function Hooks() {
  const usercomment = useSelector((state) => state.message);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        <li> your comment:{usercomment}</li>
      </ul>
      <button onClick={() => dispatch(addList())}> see your comment</button>
    </div>
  );
}
