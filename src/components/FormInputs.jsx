import { InputWrapper, Input, Radio, RadioGroup } from "@mantine/core";

export function PasswordInput({ register, err }) {
  const options = {
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters long!",
    },
    required: "Password is required!",
  };
  return (
    <InputWrapper
      id="password"
      required
      label="Password"
      description="Password must be at least 6 characters long."
      error={err?.message}
    >
      <Input
        type={"password"}
        {...register("password", options)}
        id="password"
        placeholder="Your password"
      />
    </InputWrapper>
  );
}

export function EmailInput({ register, err }) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const options = {
    pattern: { value: re, message: "E-mail invalid!" },
    required: "E-mail is required!",
  };
  return (
    <InputWrapper id="email" required label="Email" error={err?.message}>
      <Input
        type={"email"}
        {...register("email", options)}
        id="email"
        placeholder="Your email"
      />
    </InputWrapper>
  );
}

export function NameInput({ register, err }) {
  const re = /^[a-z ]+$/i;
  const options = {
    pattern: { value: re, message: "Name is invalid" },
    required: "Name is required!",
  };
  return (
    <InputWrapper id="name" required label="Name" error={err?.message}>
      <Input
        type={"name"}
        {...register("name", options)}
        id="name"
        placeholder="Your name"
      />
    </InputWrapper>
  );
}

export function PhoneInput({ register, err }) {
  const re = /^[0-9]{8}$/;
  const options = {
    pattern: { value: re, message: "Phone number invalid!" },
    required: "Phone number is required!",
  };
  return (
    <InputWrapper id="phone" required label="Phone number" error={err?.message}>
      <Input
        type={"phone"}
        {...register("phone", options)}
        id="phone"
        placeholder="Your phone number"
      />
    </InputWrapper>
  );
}

export function TeamNameInput({ register, err }) {
  const options = {
    required: "Team name is required!",
  };
  return (
    <InputWrapper
      size="md"
      id="teamName"
      label="Team name"
      error={err?.message}
    >
      <Input
        type={"text"}
        {...register("teamName", options)}
        id="teamName"
        placeholder="Your team name"
      />
    </InputWrapper>
  );
}

export function TShirtSizeInput({ register, err }) {
  return (
    <RadioGroup
      label="T-Shirt size"
      description="select your t-shirt size"
      defaultValue="L"
      error={err?.message}
      size="md"
      color={"red"}
      name="tShirt"
      {...register("tShirt", { required: "t-shirt size is required!" })}
    >
      <Radio
        {...register("tShirt", { required: "t-shirt size is required!" })}
        name="tShirt"
        value="S"
        label="S"
      />
      <Radio
        {...register("tShirt", { required: "t-shirt size is required!" })}
        name="tShirt"
        value="M"
        label="M"
      />
      <Radio
        {...register("tShirt", { required: "t-shirt size is required!" })}
        name="tShirt"
        value="L"
        label="L"
      />
      <Radio
        {...register("tShirt", { required: "t-shirt size is required!" })}
        name="tShirt"
        value="XL"
        label="XL"
      />
      <Radio
        {...register("tShirt", { required: "t-shirt size is required!" })}
        name="tShirt"
        value="XXL"
        label="XXL"
      />
    </RadioGroup>
  );
}

export function TeamCodeInput({ register, err }) {
  const options = {
    required: "Team code is required!",
  };
  return (
    <InputWrapper
      size="md"
      id="teamLink"
      label="Team code"
      error={err?.message}
    >
      <Input
        type={"text"}
        {...register("teamLink", options)}
        id="teamLink"
        placeholder="Paste code here"
      />
    </InputWrapper>
  );
}
