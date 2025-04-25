import React from "react";
import { formData } from "./data/logindata";
import { RegisterData } from "./data/RegisterData";

function DisplayForm() {
  const form = formData["loginForm"];
  const Register=RegisterData['RegisterForm']

  return (
    <div style={{display:"flex",justifyContent:"space-around",gap:"10px"}}>
    <div style={{ maxWidth: "500px",  border :"2px solid black",margin: "0 auto" }}>
      <h2>Login Form</h2>
      <form>
        {form["fields"].map(function (field, index) {
          return (
            <div key={field["id"]} style={{ marginBottom: "10px" }}>
              <label>{form["labels"][index]}</label>
              <input
                id={field["id"]}
                name={field["name"]}
                type={field["type"]}
                placeholder={field["placeholder"]}
                style={{ width: "80%", padding: "5px", marginTop: "2px" }}
              />
                    

            </div>
          );
        })}
          <input
          type="button"
          value="submit"
          
          style={{
            marginBottom: "20px",
            gap:"10px",
            padding: "10px",
            width: "100px",
            borderRadius:"10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
        />
      </form>
    </div>

    <div>
    <div style={{ maxWidth: "500px",  border :"2px solid black",margin: "0 auto" }}>
      <h2>Registration form</h2>
      <form>
        {Register["fields"].map(function (field, index) {
          return (
            <div key={field["id"]} style={{ marginBottom: "10px" }}>
              <label>{form["labels"][index]}</label>
              <input
                id={field["id"]}
                name={field["name"]}
                type={field["type"]}
                placeholder={field["placeholder"]}
                style={{ width: "80%", padding: "5px", marginTop: "2px" }}
              />
                    

            </div>
          );
        })}
          <input
          type="button"
          value="submit"
          
          style={{
            marginBottom: "20px",
            gap:"10px",
            padding: "10px",
            width: "100px",
            borderRadius:"10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
        />
      </form>
   </div>
    </div>
    </div>
  );
}

export default DisplayForm;
