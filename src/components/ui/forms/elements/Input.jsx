import clsx from "clsx";
import FieldWrapper from "./FieldWrapper";

/**
 * Input component is a reusable component that renders an input field with a label and error message.
 * @param {object} props - The props of the component.
 * @param {string} props.label - The label of the input field.
 * @param {string} props.type - The type of the input field.
 * @param {string} props.error - The error message of the input field.
 * @param {string} props.className - The class name of the input field.
 * @param {object}
 * @returns {JSX.Element} - The JSX element of the component.
 */
function Input(props) {
  const { type = "text", label, className, registration, placeholder, error } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        className={clsx(
          "transition-all appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
          error && "border-red-500",
          className
        )}
        placeholder={placeholder}
        {...registration}
      />
    </FieldWrapper>
  );
}

export default Input;
