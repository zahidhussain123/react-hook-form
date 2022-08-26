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
      <small>{errors.firstName?.message}</small>
      <label>LastName</label>
      <input type="text" placeholder="Last Name" {...register("lastName")} />
      <small>{errors.lastName?.message}</small>

      <label>Email</label>
      <input type="text" placeholder="Email" {...register("email")} />
      <small>{errors.email?.message}</small>

      <label>Password</label>
      <input type="text" placeholder="Password" {...register("password")} />
      <small>{errors.password?.message}</small>

      <label>Confirm Password</label>
      <input
        type="text"
        placeholder="Confirm Password"
        {...register("cpassword")}
      />
      <small>{errors.cpassword?.message}</small>

      <button type="submit">Submit</button>
    </form>
  );
};

export default HookForm;
