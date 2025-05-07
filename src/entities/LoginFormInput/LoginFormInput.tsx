interface LoginFormInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  id: string;
}

const LoginFormInput: React.FC<LoginFormInputProps> = ({
  label,
  type,
  value,
  onChange,
  error,
  id,
}) => {
  return (
    <div className="my-4">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className="mt-1 p-5 block w-full border-2 border-solid border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        value={value}
        onChange={onChange}
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
};

export default LoginFormInput;
