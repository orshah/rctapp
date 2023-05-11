import "./customForm.style.css";
import FormInput from "../FormInput/FormInput";
import MyButton from "../MyButton/MyButton";

const CustomForm = () => {
  return (
    <form className="forms">
      <FormInput label="Name" type="text" name="name" />
      <FormInput label="Email" type="email" name="Email" />
      <FormInput label="Password" type="Password" name="Password" />
      <FormInput label="Agree to terms" type="checkbox" name="Chbx" />
      <MyButton name="Submit" type="large" />
    </form>
  );
};

export default CustomForm;
