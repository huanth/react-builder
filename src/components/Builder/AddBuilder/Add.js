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
    if (formData.form_data !== undefined) {
      dispatch(getData(formData.form_data))
    }
    else{
      console.log('data is undefined')
    }
  }

  const previewForm = () => {
    if (formData.form_data !== undefined) {
      console.log('previewForm');
    }
    else{
      console.log('data is undefined')
    }
  }

  return (
    <div className="App">
      <div className='app_header'>
        <button className="btn btn-primary float-left" 
          onClick={saveDataForm}
        >
          Save Form
        </button>
        <button className="btn btn-primary float-left" 
          style={{marginLeft: '10px'}}
          onClick={previewForm}
        >
          Preview Form
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
