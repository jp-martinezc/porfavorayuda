import useSignUpForm from "./customHooks";

import * as Joi from "joi";

const schema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  repeat_password: Joi.ref("password"),
}).with("password", "repeat_password");

console.dir(Joi.validate(data, schema, { abortEarly: false }));

function Signup() {
  const { handleSubmit, handleInputChange } = useSignUpForm(schema);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            autoComplete="password"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="password"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="repeat_password">Confirm password</label>
          <input
            type="password"
            id="repeat_password"
            name="repeat_password"
            autoComplete="password"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Signup;