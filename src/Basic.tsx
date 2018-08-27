import * as React from 'react';
import { Formik, FormikContext } from 'formik';
import {MyDto} from './MyDto';

import BasicPart from './BasicPart';

const formInitialValues : MyDto = {
    firstname : "",
    lastname: ""
}

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
        initialValues={formInitialValues}
       
        onSubmit={(
          values: MyDto
        ) => {
            console.log("Submitted values are", values);
        }}
        render={(props:  FormikContext<MyDto>) => (
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              name="firstname"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.firstname}
            />
            {props.touched.firstname && props.errors.firstname && <div>{props.errors.firstname}</div>}
             <BasicPart myOuterProp="test" />
            <button type="submit">
              Submit
            </button>
          </form>
        )}
      />
    </div>
  );
  
  export default Basic;