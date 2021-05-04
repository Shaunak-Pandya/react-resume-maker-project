import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Switch, Form, Input, DatePicker, Button} from 'antd';
const { RangePicker } = DatePicker;

const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 8,
    },
  };



function ExperienceDetails() {
    return (
        <div>
            <hr></hr>
            <h2>Experience Details</h2>
                {/* <Form.Item name="company_name" label='Company Name'>
                    <Input placeholder="Company name goes here"/>
                </Form.Item>
                <Form.Item name="job_post" label='Job Post'>
                    <Input placeholder="Job Post"/>
                </Form.Item>
                <Form.Item name="job_location" label='Location'>
                    <Input placeholder="Place of work"/>
                </Form.Item>
                <Form.Item name="job_description" label='Description'>
                    <Input placeholder="Tell us something about your role "/>
                </Form.Item>
                <Form.Item name="current_job" label='Current Employer'>
                    <Switch defaultChecked/>
                </Form.Item>
                <Form.Item name="from_to" label='Duration'>
                    <RangePicker />
                </Form.Item>

                <hr></hr> */}
                <Form.Item label="Add Experience here" {...formItemLayout} >
                <Form.List name="experience_details" rules={[{ required: true, message: 'Must specify company name' }]}>
                {(fields, { add, remove }) => (
                <>
                {fields.map(({ key, name, fieldKey}) => (
                <div key={key}>

                    <Form.Item

                        label="Company Name"
                        rules={[{ required: true, message: 'Must specify company name' }]}
                        name={[name, 'company_name']}
                        fieldKey={[fieldKey, 'company_name']}>
                        <Input placeholder="Name of Company"/>
                    </Form.Item>

                    <Form.Item
                        label="Job Post"
                        rules={[{ required: true, message: 'Must specify current position' }]}
                        name={[name, 'job_post']}
                        fieldKey={[fieldKey, 'job_post']}>
                        <Input placeholder="Job Post"/>
                    </Form.Item>

                    <Form.Item
                        label="Location"
                        rules={[{ required: true, message: 'Location is required' }]}
                        name={[name, 'job_location']}
                        fieldKey={[fieldKey, 'job_location']}>
                        <Input placeholder="Place of work"/>
                    </Form.Item>

                    <Form.Item
                        label="Work Profile"
                        rules={[{ required: true, message: 'Role must be specified' }]}
                        name={[name, 'job_description']}
                        fieldKey={[fieldKey, 'job_description']}>
                        <Input placeholder="Tell us something about your role "/>
                    </Form.Item>

                    <Form.Item
                        label="Current Employer"
                        rules={[{ required: true, message: 'Status input required' }]}
                        name={[name, 'current_job']}
                        fieldKey={[fieldKey, 'current_job']}>
                        <Switch />
                    </Form.Item>
                    <Form.Item
                        label="Duration"
                        rules={[{ required: true, message: 'Tenure of service is required' }]}
                        name={[name, 'job_from_to']}
                        fieldKey={[fieldKey, 'job_from_to']}>
                        <RangePicker />
                    </Form.Item>

                    <MinusCircleOutlined onClick={() => remove(name)} />
                </div>
                ))}
                <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Add New Company
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

export default ExperienceDetails
