import "./formInput.style.css";

const FormInput = ({ label, type, name }) => {
  const onChangeHandler = (e) => {
    if (e.target.value === "Shahzod") {
      alert(`Hi ${e.target.value}`);
    } else {
      console.log(`Keep trying`);
      console.log(e);
    }

    console.log(e.target.name, ":", e.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} onChange={onChangeHandler} />
    </div>
  );
};

export default FormInput;
