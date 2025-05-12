interface LoginFormInputProps {
  label: string;
  type: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  id: string;
}

function LoginFormInput(props: LoginFormInputProps) {
  return (
    <div className="my-4">
      <label htmlFor={props.id} className="text-lg">
        {props.label}
      </label>
      <input
        className="mt-1 p-5 block w-full border-2 border-solid border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        aria-invalid={props.error ? "true" : "false"}
        aria-describedby={props.error ? `${props.id}-error` : undefined}
        required
        {...props}
      />
      {props.error && (
        <span
          id={`${props.id}-error`}
          role="alert"
          className="text-red-600 inline-block mt-1"
        >
          {props.error}
        </span>
      )}
    </div>
  );
}

export default LoginFormInput;
