import React from 'react';
import { camelCase } from 'lodash';

const FormInput = ({ title, placeholder, refer ,type, onChange}) => {
  return (<>
    <div className='col p-1 '>
      <label class="form-label"><b>{title}</b></label>  
      <input class="form-control" type={type} name={camelCase(title)} ref={refer} placeholder={placeholder} onChange={onChange} required />
    </div>
    </>
  )
}

export default FormInput