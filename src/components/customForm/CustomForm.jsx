import "./customForm.style.css";
import FormInput from "../FormInput/FormInput";
import MyButton from "../MyButton/MyButton";

const CustomForm = () => {
  return (
    <form className="forms">
      <FormInput label="Name" type="text" />
      <FormInput label="Email" type="email" />
      <FormInput label="Password" type="Password" />
      <FormInput label="Agree to terms" type="checkbox" />
      <MyButton name="Submit" type="large" />
    </form>
  );
};

export default CustomForm;
