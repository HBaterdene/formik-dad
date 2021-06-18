import React from "react";
import { Form, Input, FormItem, Checkbox } from "formik-antd";
import { Formik } from "formik";
import FormSchema from "./../utils/form_scheme";
import data from "../data/formik-input";
function RegisterAntd() {
  return (
    <div className="form-antd">
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
        <Form layout={"vertical"}>
          {data.map((el) => (
            <FormItem name={el[0]}>
              <Input
                key={el[0]}
                name={el[0]}
                type={el[1]}
                placeholder={el[2]}
              />
            </FormItem>
          ))}
          <FormItem name="is_active">
            <Checkbox name="is_active">
              Үйлчилгээний нөхцөлүүдийг хүлээн зөвшөөрч байна.
            </Checkbox>
          </FormItem>

          <button type="submit">Бүртгүүлэх</button>
        </Form>
      </Formik>
    </div>
  );
}

export default RegisterAntd;
