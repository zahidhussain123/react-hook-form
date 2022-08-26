import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const HookForm = () => {
  const schema = yup.object().shape({
    firstName: yup.string().max(12).required(),
    lastName: yup.string().max(12).required(),
    email: yup.string().email().required(),
    password: yup.string().min(5).max(14).required(),
    cpassword: yup.string().oneOf([yup.ref("password"), null]),
  });
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("submit form", data);
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>FirstName</label>
      <input type="text" placeholder="First Name" {...register("firstName")} />
      <label>LastName</label>
      <input type="text" placeholder="Last Name" {...register("lastName")} />
      <label>Email</label>
      <input type="text" placeholder="Email" {...register("email")} />
      <label>Password</label>
      <input type="text" placeholder="Password" {...register("password")} />
      <label>Confirm Password</label>
      <input
        type="text"
        placeholder="Confirm Password"
        {...register("cpassword")}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default HookForm;
