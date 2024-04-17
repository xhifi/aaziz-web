import clsx from "clsx";
import FieldWrapper from "./FieldWrapper";

/**
 * SelectField component is a reusable component that renders a select field with a label and error message.
 * @param {object} props - The props of the component.
 * @param {string} props.label - The label of the select field.
 * @param {array} props.options - The options of the select field.
 * @param {string} props.error - The error message of the select field.
 * @param {string} props.className - The class name of the select field.
 * @param {string} props.defaultValue - The default value of the select field.
 * @param {object} props.registration - The registration object of the select field.
 * @param {string} props.placeholder - The placeholder of the select field.
 * @returns {JSX.Element} - The JSX element of the component.
 */
const Select = (props) => {
  const { label, options, error, className, defaultValue, registration, placeholder } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <select
        placeholder={placeholder}
        name="location"
        className={clsx(
          "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md",
          error && "border-red-500",
          className
        )}
        defaultValue={defaultValue}
        {...registration}
      >
        {options.map(({ label, value }) => (
          <option key={label?.toString()} value={value}>
            {label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
};

export default Select;
