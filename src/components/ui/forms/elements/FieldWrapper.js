import clsx from "clsx";

const FieldWrapper = (props) => {
  const { label, className, error, children } = props;

  return (
    <div>
      <label className={clsx("block text-base font-medium text-slate-900", className)}>
        {label}
        <div className="mt-1">{children}</div>
      </label>
      {error?.message && (
        <div role="alert" aria-label={error.message} className="text-sm font-semibold text-red-500">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default FieldWrapper;
