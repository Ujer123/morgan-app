import React, { useRef, useState } from "react";
import { useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import 'primeicons/primeicons.css';
import { InputTextarea } from 'primereact/inputtextarea';

export default function Contact(){

    const toast = useRef(null);

    const [value, setValue] = useState('');

    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: data.value });
    };

    const formik = useFormik({
        initialValues: {
            value: '',
            email: '',
            mobile: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.value) {
                errors.value = 'Name - Surname is required.';
            }
            if (!data.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Invalid email address';
            }
            if (!data.mobile) {
                errors.mobile = 'Mobile number is required';
            } else if (!/^\d{10}$/i.test(data.mobile)) {
                errors.mobile = 'Invalid mobile number';
            }

            return errors;
        },
        onSubmit: (data) => {
            show(data);
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return(
        <section className="mb-4">
            <div className='about'> 
                <div className='about-text text-8xl font-bold text-white flex justify-content-center'>Contact</div>  
            </div>

            <div className='lg:grid lg:flex justify-content-around'>

                <div className='lg:col-6 col-11 '>
                    <h2 className="ml-4 val-txt">Get In Touch</h2>
                    <div className="card flex justify-content-center">
                        <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                            <span className="p-float-label">
                                <Toast ref={toast} />
                                <InputText
                                    id="value"
                                    name="value"
                                    value={formik.values.value}
                                    onChange={formik.handleChange}
                                    className={classNames({ 'p-invalid': isFormFieldInvalid('value') })}
                                />
                                <label htmlFor="input_value">Name</label>
                            </span>
                            {getFormErrorMessage('value')}

                            <span className="p-float-label">
                                <InputText
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    className={classNames({ 'p-invalid': isFormFieldInvalid('email') })}
                                />
                                <label htmlFor="email">Email</label>
                            </span>
                            {getFormErrorMessage('email')}

                            <span className="p-float-label">
                                <InputText
                                    id="mobile"
                                    name="mobile"
                                    value={formik.values.mobile}
                                    onChange={formik.handleChange}
                                    className={classNames({ 'p-invalid': isFormFieldInvalid('mobile') })}
                                />
                                <label htmlFor="mobile">Mobile Number</label>
                            </span>
                            {getFormErrorMessage('mobile')}

                            <span className="p-float-label">
                            <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} className="msg-inp"/>
                            <label htmlFor="message">Type Message</label>
                            </span>
                            
                            <Button type="submit" label="Submit" className='bg-white text-orange-500 border-orange-500 border-round-3xl sub-but'/>
                        </form>
                    </div>
                </div>

                <div className='lg:col-6 col-11  '>
                    <h2>Our Address</h2>
                    <p><i className="pi pi-building text-white bg-black-alpha-90 p-1 mr-2"></i>2130 Fulton Street, San Diego, USA</p>
                    <p><i className="pi pi-phone text-white bg-black-alpha-90 p-1 mr-2"></i>1-800-1234-567</p>
                    <p><i className="pi pi-envelope text-white bg-black-alpha-90 p-1 mr-2"></i> info@demolink.org</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15092.899608597789!2d72.8310554!3d18.9656724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfdf5cadca43%3A0x2f248f63460fcd4f!2sHeuristic%20Academy!5e0!3m2!1sen!2sin!4v1712155173082!5m2!1sen!2sin" allowfullscreen="" loading="lazy" title="map" referrerpolicy="no-referrer-when-downgrade" style={{height:'50%', width:'80%'}}/>
                </div>
            </div>
        </section>
    );
}
