import * as React from 'react';

import {MyDto} from './MyDto';

import { connect, FormikContext } from 'formik';


interface FormikPartProps {
    formik: FormikContext<MyDto>;
}

interface OuterProps {
    myOuterProp: string;
}

class BasicPart extends React.Component<FormikPartProps & OuterProps> {
    
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
                {this.props.myOuterProp}
                {this.props.formik.touched.lastname && this.props.formik.errors.lastname && <div>{this.props.formik.errors.lastname}</div>}
             </React.Fragment>
             )
       }
}
  
export default connect<OuterProps, MyDto> (BasicPart);