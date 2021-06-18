import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  firstName: Yup.string().required("Өөрийн нэрээ оруулна уу!"),
  lastName: Yup.string().required("Өөрийн oвогоо оруулна уу!"),
  email: Yup.string()
    .email("Та зөв е-шуудан оруулна уу")
    .required("Е-шуудангаа оруулна уу!"),
  phoneNumber: Yup.string().min(8).required("Утасны дугаараа оруулна уу!"),
  is_active: Yup.boolean()
    .required("Required")
    .oneOf([true], "Та үйлчилгээний нөхцөлүүдийг хүлээн зөвшөөрөх ёстой"),
  password: Yup.string().min(6).required("Нууц үг оруулна уу!"),
});

export default FormSchema;
