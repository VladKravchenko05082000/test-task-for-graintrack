import * as Form from "@radix-ui/react-form";
import { LockClosedIcon } from "@radix-ui/react-icons";
import { LoginFromType } from "../../../types/types";

const LoginForm: React.FC<LoginFromType> = ({ handleOnSubmit, pending }) => {
  return (
    <Form.Root onSubmit={handleOnSubmit} id="formSubmit">
      <Form.Field name="username">
        <>
          <div>
            <Form.Label className="text-inputLabel text-white">Username</Form.Label>
          </div>

          <Form.Control asChild>
            <input
              className="w-60 rounded p-2.5 bg-inputBackgroundColor shadow-[0_0_0_1px_rgba(0,0,0,0.4)] focus:shadow-[0_0_0_2px_rgba(0,0,0,0.4)] text-white"
              placeholder="Enter your username"
              required
              id="username"
            />
          </Form.Control>

          <div className="h-6 my-1">
            <Form.Message className="text-red-500" match="valueMissing">
              Please enter your username
            </Form.Message>
          </div>
        </>
      </Form.Field>

      <Form.Field name="password">
        <div>
          <Form.Label className="text-inputLabel text-white">Password</Form.Label>
        </div>

        <Form.Control asChild>
          <input
            className="w-60 rounded p-2.5 bg-inputBackgroundColor shadow-outFocus focus:shadow-inFocus text-white"
            type="password"
            placeholder="Enter your password"
            required
            id="password"
          />
        </Form.Control>

        <div className="h-6 my-1">
          <Form.Message className="text-red-500" match="valueMissing">
            Please enter a password
          </Form.Message>

          <Form.Message match={value => value.length < 5}>Your password less than 5 symbols</Form.Message>
        </div>
      </Form.Field>

      <Form.Submit asChild>
        <button
          className="w-full mt-2.5 px-5 h-9 flex justify-center items-center text-purple font-medium bg-white rounded hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={pending}
        >
          {pending ? <LockClosedIcon width="24px" /> : "Login"}
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default LoginForm;
