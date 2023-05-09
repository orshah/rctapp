import "./formInput.style.css";

const FormInput = ({ label, type }) => {
  const onChangeHandler = () => {
    alert("WAIT STOP");
  };
  return (
    <div>
      <label>{label}</label>
      <input type={type} onChange={onChangeHandler} />
    </div>
  );
};

export default FormInput;
