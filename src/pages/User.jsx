import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function User() {
  const { userId } = useParams(); //get params from ->router/:data

  const [searchparams, setSearchparams] = useSearchParams();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchparams({ name: name, age: age });
  };

  return (
    <div>
      <h2>User</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="id"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <input
          type="text"
          placeholder="age"
          name="id"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <button type="submit">Find user</button>
      </form>

      {/*this 'id' get from route?id=value*/}
      {/* http://localhost:3000/user?id=Adhiha&name=Sharmin&age=25 | id , name , age -> searchParams.get('id')*/}
      <p>{searchparams.get("id")}</p>
      <p>{searchparams.get("name")}</p>
      <p>{searchparams.get("age")}</p>
    </div>
  );
}

export default User;
