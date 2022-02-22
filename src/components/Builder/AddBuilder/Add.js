import React, { useState } from 'react';
import { ReactFormBuilder, ReactFormGenerator } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../../actions/form';
import './custom.css'



const Add = () => {
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();

  const onPost = (data) => {
    console.log('onPost', data.task_data);
    setFormData({
      ...formData,
      form_data: data.task_data
    });
  };

  const saveDataForm = () => {
    console.log('saveDataForm', formData.form_data);
    dispatch(getData(formData.form_data))
  }

  return (
    <div className="App">
      <div className='app_header'>
        <button className="btn btn-primary float-left" 
          onClick={saveDataForm}
        >
          Save Form
        </button>
      </div>
      <div className='app_body'>
        <ReactFormBuilder
          onPost={onPost}
        />
      </div>
    </div>
  );
}

export default Add;
