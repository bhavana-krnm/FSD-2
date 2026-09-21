import React from "react";

function StudentCard(props) {
  return (
    <div
      style={{
        border: "2px solid #4CAF50",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
        width: "300px"
      }}
    >
      <h2>Student Details</h2>

      <p>
        <strong>Name:</strong> {props.name}
      </p>

      <p>
        <strong>Age:</strong> {props.age}
      </p>

      <p>
        <strong>Course:</strong> {props.course}
      </p>

      <p>
        <strong>City:</strong> {props.city}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {props.isEnrolled ? "Enrolled ✅" : "Not Enrolled ❌"}
      </p>
    </div>
  );
}

export default StudentCard;