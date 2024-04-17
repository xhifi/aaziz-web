import clsx from "clsx";
import FieldWrapper from "./FieldWrapper";

const TextAreaField = (props) => {
  const { label, className, rows, registration, error, placeholder } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <textarea
        className={clsx(
          "transition-all appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
          className
        )}
        rows={rows}
        placeholder={placeholder}
        {...registration}
      />
    </FieldWrapper>
  );
};

export default TextAreaField;
