"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useForm } from "react-hook-form";

const Form = ({ onSubmit, children, className, options, id, schema }) => {
  const methods = useForm({ ...options, resolver: schema && zodResolver(schema) });
  return (
    <form className={clsx("", className)} onSubmit={methods.handleSubmit(onSubmit)} id={id}>
      {children(methods)}
    </form>
  );
};
export default Form;
