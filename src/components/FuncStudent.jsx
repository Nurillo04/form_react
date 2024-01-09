import React from "react";
import { useState } from "react";
import "./FuncStudent.scss";

const FuncStudent = () => {
  const [person, setPerson] = useState({
    firstName: " ",
    lastName: " ",
    phone: " ",
  });
  const [student, setStudent] = useState({
    firstName: " ",
    lastName: " ",
    phone: " ",
  });
  const addStudent = (e) => {
    e.pereventDefault;
    setStudent(person);
  };
  return (
    <div className="w-50 mx-auto blok">
      <form className="mt-5 " onSubmit={addStudent}>
        <div className="mb-3">
          <label className="form-label" htmlFor="firstName">
            FirstName
          </label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            id="firstName"
            value={person.firstName}
            onChange={(e) =>
              setPerson({
                ...person,
                firstName: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="lastName">
            LastName
          </label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            id="lastName"
            value={person.lastName}
            onChange={(e) =>
              setPerson({
                ...person,
                lastName: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="age">
            Phone
          </label>
          <input
            className="form-control"
            type="text"
            name="Phone"
            id="phone"
            value={person.phone}
            onChange={(e) =>
              setPerson({
                ...person,
                phone: e.target.value,
              })
            }
          />
        </div>
        <button type="submit" className="btn btn-dark btn-block w-100">
          Add student
        </button>
      </form>
      <div className="my-3">
        <h2>
          {student.firstName} {student.lastName} {student.phone}
          {/* {student.age ? student.age : " "} */}
        </h2>
      </div>
    </div>
  );
};

export default FuncStudent;
