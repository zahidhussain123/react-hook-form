import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const HookForm = () => {
  const styling = {
    color: "red",
  };
  const schema = yup.object().shape({
    firstName: yup.string().max(12).required("First Name is required"),
    lastName: yup.string().max(12).required("last Name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .min(5)
      .max(14)
      .required("Password should be at least 5 characters"),
    cpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password is not matching"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
      <small style={styling}>{errors.firstName?.message}</small>
      <label>LastName</label>
      <input type="text" placeholder="Last Name" {...register("lastName")} />
      <small style={styling}>{errors.lastName?.message}</small>

      <label>Email</label>
      <input type="text" placeholder="Email" {...register("email")} />
      <small style={styling}>{errors.email?.message}</small>

      <label>Password</label>
      <input type="text" placeholder="Password" {...register("password")} />
      <small style={styling}>{errors.password?.message}</small>

      <label>Confirm Password</label>
      <input
        type="text"
        placeholder="Confirm Password"
        {...register("cpassword")}
      />
      <small style={styling}>{errors.cpassword?.message}</small>

      <button type="submit">Submit</button>
    </form>
  );
};

export default HookForm;
