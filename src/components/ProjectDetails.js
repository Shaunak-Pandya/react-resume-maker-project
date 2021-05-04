import React from 'react'
import 'antd/dist/antd.css';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {Form, Input, Button} from 'antd';
const { TextArea } = Input;

const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 8,
    },
  };

function ProjectDetails() {
    return (
        <div>
            <hr></hr>
            <h2>Project Details</h2>
            <Form.Item label="Add Projects here" {...formItemLayout}>
            <Form.List name="project_details" rules={[{ required: true, message: 'Must specify Project Details' }]}>
            {(fields, { add, remove }) => (
            <>
            {fields.map(({ key, name, fieldKey}) => (
              <div key={key}>

                <Form.Item
                    label="Project Name"
                    rules={[{ required: true, message: 'Must specify project name' }]}
                    name={[name, 'project_name']}
                    fieldKey={[fieldKey, 'project_name']}>
                    <Input placeholder="Title of Project"/>
                </Form.Item>

                <Form.Item
                    
                    label="Description"
                    rules={[{ required: true, message: 'Must specify project definition' }]}
                    name={[name, 'project_description']}
                    fieldKey={[fieldKey, 'project_description']}>
                    <TextArea rows={4} placeholder="Tell us something about your project" />
                </Form.Item>

                <Form.Item
                    label="Role"

                     name={[name, 'project_role']}
                     rules={[{ required: true, message: 'Must specify contribution' }]}
                    fieldKey={[fieldKey, 'project_role']}>
                    <Input placeholder="Your role in project"/>
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </div>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Project
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      </Form.Item>
            <br></br>
        </div>
    )
}

export default ProjectDetails
