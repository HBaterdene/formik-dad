import React from "react";
import { Formik, Form } from "formik";
import FormSchema from "../utils/form_scheme";
import { TextInput, Checkbox } from "../components/formik-input";
import data from "../data/formik-input";
export default function Register() {
  return (
    <div className="form">
      <Formik
        initialValues={{
          firstName: undefined,
          lastName: undefined,
          email: undefined,
          phoneNumber: undefined,
          is_active: false,
          password: undefined,
        }}
        validationSchema={FormSchema}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          {data.map((el) => (
            <TextInput
              key={el[0]}
              name={el[0]}
              type={el[1]}
              placeholder={el[2]}
            />
          ))}
          <Checkbox name="is_active">
            <p>Үйлчилгээний нөхцөлүүдийг хүлээн зөвшөөрч байна.</p>
          </Checkbox>
          <button type="submit">Бүртгүүлэх</button>
        </Form>
      </Formik>
    </div>
  );
}
