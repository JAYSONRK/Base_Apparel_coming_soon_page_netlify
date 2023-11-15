import React from "react";
import Arrow from "./icon-arrow.svg";
import Error from "./icon-error.svg";
import { useFormik } from 'formik';

const Description = () => {
    const validate = values => {

        const errors = {};
     
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Please provide a valid email';
        }
        return errors;
      };

      const formik = useFormik({
        initialValues: {
          email: '',
        },
        validate,
        onSubmit: values => {
          alert('Email is submitted');
        },
      });

    return (<>
        <div className="description">
            <h1><span>We're</span><br/>coming<br/> soon</h1>
            <p>Hello fellow shoppers! We're currently building our new fashion store. 
  Add your email below to stay up-to-date with announcements and our launch deals.</p>
            <form onSubmit={formik.handleSubmit}>
                <button type="submit"><img src={Arrow} alt="arrow"/></button>
                {formik.errors.email && <i><img className="error" src={Error} alt="error"/></i>}
                <input style={{border: formik.errors.email && '1px solid hsl(0, 93%, 68%)'}} id="email" name="email" type="email"  placeholder="Email Address" onChange={formik.handleChange} value={formik.values.email} />
                {formik.errors.email ? <div style={{padding: '1rem 0 0 5%', color: 'hsl(0, 93%, 68%)'}}>{formik.errors.email}</div> : null}
            </form>
        </div>
    </>)
}

export default Description;