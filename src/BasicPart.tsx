import * as React from 'react';

import {MyDto} from './MyDto';

import { connect, FormikContext } from 'formik';


interface FormikPartProps {
    formik: FormikContext<MyDto>;
}

class BasicPart extends React.Component<FormikPartProps & {}> {
    
    public render() {
        return   (
            <React.Fragment>        
                <input
                type="text"
                name="lastname"
                onChange={this.props.formik.handleChange}
                onBlur={this.props.formik.handleBlur}
                value={this.props.formik.values.lastname}
                />
                {this.props.formik.touched.lastname && this.props.formik.errors.lastname && <div>{this.props.formik.errors.lastname}</div>}
             </React.Fragment>
             )
       }
}
  
export default connect<{}, MyDto> (BasicPart);