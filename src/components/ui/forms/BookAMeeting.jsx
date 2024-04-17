"use client";

import * as z from "zod";
import Form from "./elements/Form";
import Input from "./elements/Input";
import Select from "./elements/Select";
import TextAreaField from "./elements/Textarea";

const schema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().min(5, "Email is required").email("Invalid email"),
  makeselection: z.string().min(1, "Please select something"),
  message: z.string().min(10, "Message is required"),
});

const LoginForm = ({ onSuccess }) => {
  const submit = (vals) => {
    console.log(vals);
    onSuccess();
  };

  return (
    <Form
      schema={schema}
      options={{ shouldUnregister: true }}
      onSubmit={submit}
      className="backdrop-blur-lg bg-white/80 shadow-white rounded-lg p-8 mx-auto mb-0 space-y-3 "
    >
      {({ register, formState }) => (
        <>
          <span className="text-xl font-medium">Request a Call Back</span>
          {console.log(formState.errors)}
          <Input type="name" label="Full Name" placeholder="John Doe" error={formState.errors["name"]} registration={register("name")} />
          <Input
            type="email"
            label="Email"
            placeholder="someone@example.com"
            error={formState.errors["email"]}
            registration={register("email")}
          />
          <Select
            label="Select Something"
            options={[
              { label: "Hello", value: "World" },
              { label: "Dhinka", value: "Chika" },
            ]}
            error={formState.errors["makeselection"]}
            registration={register("makeselection")}
          />
          <TextAreaField
            label="Message"
            placeholder="Something goes here"
            className="resize-none"
            rows="4"
            registration={register("message")}
          />
          <div>
            <button
              type="submit"
              className="block text-sm w-full px-3 py-2 border border-primary text-primary rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:bg-primary focus:text-white hover:bg-primary hover:text-white focus:ring-2 ring-offset-2 transition-all"
            >
              Request a Callback
            </button>
          </div>
        </>
      )}
    </Form>
  );
};

export default LoginForm;
