import { forwardRef } from "react";

interface LoginFormInputProps {
  label: string;
  type: string;
  id: string;
  error?: string;
}
const LoginFormInput = forwardRef<HTMLInputElement, LoginFormInputProps>(
  ({ label, type, error, id }, ref) => {
    return (
      <div className="my-4">
        <label htmlFor={id} className="text-lg">
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          id={id}
          className="mt-1 p-5 block w-full border-2 border-solid border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : undefined}
          required
        />
        {error && (
          <span
            id={`${id}-error`}
            role="alert"
            className="text-red-600 inline-block mt-1"
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);

export default LoginFormInput;
