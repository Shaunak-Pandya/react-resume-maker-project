import React, { useContext } from 'react'
import 'antd/dist/antd.css';
import { Form, Button } from 'antd';

import BasicDetails from './components/BasicDetails';
import EducationDetails from './components/EducationDetails';
import ExperienceDetails from './components/ExperienceDetails';
import MultiSelectorContainer from './components/MultiSelectorContainer';
import ProjectDetails from './components/ProjectDetails';
import ResumeContext from './components/ResumeContext';

const FormContainer = (props) => {
  
  const {SetResumeData} = useContext(ResumeContext);
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log(values);
    SetResumeData(values);
    props.history.push('/display');
  };
  


  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 8,
    },
  };

  return (
        <div>
            <Form form={form} name="Resume Maker Form" {...formItemLayout} onFinish={onFinish}>
            <h1>Resume Maker</h1>
            <hr></hr>
            <BasicDetails />
            <ExperienceDetails />
            <EducationDetails />
            <hr></hr>
            <MultiSelectorContainer type="Skills" />
            <MultiSelectorContainer type="Languages" />
            <ProjectDetails />
            <Button type="primary" htmlType="submit">SUBMIT</Button>
            <br></br>
            </Form>
        </div>
    )
}

export default FormContainer
