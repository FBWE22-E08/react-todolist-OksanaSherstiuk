import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

export default function ListOfAllItems({ tasks, handleDelete, handleDone }) {
  return (
    <div>
      {tasks.map((item, i) => (
        <div key={i} className="taskBox">
          <div>
            <p>
              {item.newTask}{" "}
              {item.finished ? <AiFillCheckCircle color="green" /> : ""}
            </p>
          </div>
          <div>
            <button id="deleteBtn" onClick={() => handleDelete(i)}>
              Delete Task
            </button>
            <button id="doneBtn" onClick={() => handleDone(i)}>
              Set to Done
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
