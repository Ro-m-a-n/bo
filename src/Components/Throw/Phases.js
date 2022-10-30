import { Form, Field } from "react-final-form";
export const FirstPhase = () => {
  
  return (
    <>

      <Field
        name="throw1"
        render={({ input, meta }) => (
          <div>
            <label>Перше</label>
            <input {...input} required type={"number"} />
            {meta.touched && meta.error && <span>{meta.error}</span>}
          </div>
        )}
      />
      <Field
        name="throw2"
        render={({ input, meta }) => (
          <div>
            <label>Друге</label>
            <input {...input} required type={"number"} />
            {meta.touched && meta.error && <span>{meta.error}</span>}
          </div>
        )}
      />
      
    </>
  );
};

export const SecondPhase = () => {
  return (
    <>
      <Field
        name="throw3"
        render={({ input, meta }) => (
          <div>
            <label>Третє</label>
            <input {...input} required type={"number"} />
            {meta.touched && meta.error && <span>{meta.error}</span>}
          </div>
        )}
      />
    </>
  );
};