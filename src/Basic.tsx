import * as React from 'react';
import { Formik } from 'formik';


const Basic = () => (
    <div>
      <h1>My Form</h1>
      <p>This can be anywhere in your application</p>
      {/*
            The benefit of the render prop approach is that you have full access to React's
            state, props, and composition model. Thus there is no need to map outer props
            to values...you can just set the initial values, and if they depend on props / state
            then--boom--you can directly access to props / state.
            The render prop accepts your inner form component, which you can define separately or inline
            totally up to you:
            - `<Formik render={props => <form>...</form>}>`
            - `<Formik component={InnerForm}>`
            - `<Formik>{props => <form>...</form>}</Formik>` (identical to as render, just written differently)
          */}
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
       
        onSubmit={(
          values,
          { setSubmitting, setErrors /* setValues and other goodies */ }
        ) => {
        }}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors.email && <div>{errors.email}</div>}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {touched.password && errors.password && <div>{errors.password}</div>}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      />
    </div>
  );
  
  export default Basic;