import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const ContactSchema = yup
  .object()
  .shape({
    name: yup.string().required("Name is Required"),
    email: yup.string().required("Email is Required"),
    message: yup.string().required("Message is Required"),
    subject: yup.string().required("Subject is Required"),
  })
  .required();