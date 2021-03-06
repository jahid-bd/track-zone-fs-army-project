import { Input, InputError } from "../../UI";

const InputGroup = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  disabled,
  error,
  onFocus,
  onBlur,
  small,
}) => {
  return (
    <>
      <label>{label}</label> <br />
      <Input
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        error={error}
        onFocus={onFocus}
        onBlur={onBlur}
        small={small}
      />
      <div>{error && <InputError>{error}</InputError>}</div>
    </>
  );
};

export default InputGroup;
