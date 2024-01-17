import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Button, Checkbox, FormField, Label } from 'semantic-ui-react';
import * as Yup from "yup";

function ProductAdd() {
    const initialValues = { title: "", price: 10 };
    const schema = Yup.object({
        title: Yup.string().required("Ürün Adı Zorunludur"),
        price: Yup.number().required("Ürün fiyatı zorunludur")
    });

    const handleSubmit = (values) => {
        // Form gönderim işlemleri burada yapılabilir.

        alert(values.title);
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <FormField>
                        <label>Ürün İsmi</label>
                        <Field type="text" name="title" placeholder='Ürün İsmi' />
                        <ErrorMessage name="title" render={error =>
                            <Label pointing basic color="red" content={error}></Label>}>
                        </ErrorMessage>
                    </FormField>
                    <FormField>
                        <label>Fiyat</label>
                        <Field type="number" name="price" placeholder='Fiyat' />
                        <ErrorMessage name="price" render={error =>
                            <Label pointing basic color="red" content={error}></Label>}>
                        </ErrorMessage>
                    </FormField>
                    <FormField>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </FormField>
                    <Button type='submit'>Ekle</Button>
                </Form>
            </Formik>
        </div>
    );
}

export default ProductAdd;
