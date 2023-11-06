"use client";

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { useCallback, useState } from "react";
import Input from "@/app/components/inputs/Input";
type Variant = "LOGIN" | "REGISTER";
function AuthForm() {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);
  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    //! TODO این چیه  
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      // Axios Register
    }
    if (variant === "LOGIN") {
      // NextAuth SignIn
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    // NextAuth Social Sign In
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form action="" className="space-y-6 " onSubmit={handleSubmit(onSubmit)}>
        <Input id="email" label="Email" register={register} errors={errors} />
        </form>
      </div>
    </div>
  );
}

export default AuthForm;
