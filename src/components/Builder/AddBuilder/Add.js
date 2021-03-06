import React, { useState } from 'react';
import { ReactFormBuilder, ReactFormGenerator } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';
import { useDispatch, useSelector } from 'react-redux';
import {useLocation, Redirect} from "react-router-dom"
import { getData } from '../../../actions/form';
import './custom.css'



const Add = () => {
  const [formData, setFormData] = useState({});
  const [formDataName, setFormDataName] = useState('New Form');

  const dispatch = useDispatch();

  const search = useLocation().search;
  const userId = new URLSearchParams(search).get('userId');

  const { user: currentUser } = useSelector((state) => state.auth);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  else{
    // const userId = currentUser._id;
  }

  const changeNameBuilder = (e) => {
    setFormDataName(e.target.value);
    setFormData({
      ...formData,
      form_data_name: e.target.value,
      form_data_user_id: userId
    });
  };

  const onPostData = (data) => {
    const inputNameForm = document.getElementById('form_builder_name').value;
    setFormData({
      ...formData,
      form_data: data.task_data,
      form_data_name: inputNameForm,
      form_data_user_id: userId
    });
  };

  const saveDataForm = () => {
    if(formDataName === undefined && formDataName === ''){
      console.log('Form name is undefined')
      return;
    }

    if (formData.form_data !== undefined) {
      console.log(formData);
      dispatch(getData(formData))
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
        <div className="form-builder-name">
          <label htmlFor="form_builder_name">Name</label>
          <input type="text" id="form_builder_name" name='form_builder_name' required onChange={changeNameBuilder} value={formDataName}/>
        </div>
        <ReactFormBuilder
          onPost={onPostData}
        />
      </div>
    </div>
  );
}

export default Add;
