
// import Input from "./../../shared/input/Input";
// import { Button } from "./../../shared/button/button";
// import Upload from "../../shared/upload/upload";


// const Form = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     setValue,
//     getValues,
//     setError,
//     clearErrors,

//     formState: { errors, isValid },
//   } = useForm({ mode: "onBlur" });

//   const onSubmit = (data) => {
//     console.log(data);
//     reset();
//   };
  
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* <Input
//         name={"name"}
//         placeholder={"Your name"}
//         register={register}
//         error={errors.name}
//         watch={watch}
//       />
//       <Input
//         name={"email"}
//         placeholder={"Email"}
//         register={register}
//         error={errors.email}
//         watch={watch}
//         type="email"
//       />
//       <Input
//         name={"phone"}
//         placeholder={"Phone number"}
//         helperText={"+38(XXX) XXX-XX-XX"}
//         register={register}
//         error={errors.phone}
//         watch={watch}
//         type="tel"
//       /> */}

//       <input hidden {...register("photo")} type="file" />

//       <Upload
//         {...register("photo")}
//         setValue={setValue}
//         error={errors.photo}
//         name={"photo"}
//         getValues={getValues}
//         setError={setError}
//         clearErrors={clearErrors}
//       />

//       {/* <input
//         {...register("testPhotos", {
//           validate: {
//             lessThan10MB: (files) => files[0]?.size < 30000 || "Max 30kb",
          
//           },
//         })}
//         type="file"
    
//         name="testPhotos"
//         accept="image/png, image/jpeg"
//       /> */}

//       <Button
//         design={"yellow"}
//         text="Sign up"
//         type="submit"
//         isValid={isValid}
//       />
//     </form>
//   );
// };

