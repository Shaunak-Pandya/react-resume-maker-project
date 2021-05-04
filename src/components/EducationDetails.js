import React from 'react'

import 'antd/dist/antd.css';
import {Select, Form, Input, DatePicker} from 'antd';
const { TextArea } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;

function EducationDetails() {
    return (
        <div>
            <hr></hr>
            <h2>Education Details</h2>
                <Form.Item name="college_name" label='College Name' rules={[{ required: true, message: 'College name is required!' }]}>
                    <Input placeholder="Give name of College"/>
                </Form.Item>
                <Form.Item name="college_location" label='College Location' rules={[{ required: true, message: 'Location is required' }]}>
                    <Select defaultValue="Select" style={{ width: 120 }}>
                        <Option value="Select">Select</Option>
                        <Option value="Surat">Surat</Option>
                        <Option value="Ahmedabad">Ahmedabad</Option>
                        <Option value="Baroda">Baroda</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="college_about" label='About' rules={[{ required: true, message: 'Please fill this box' }]}>
                    <TextArea rows={4}/>
                </Form.Item>
                <Form.Item name="college_duration" label='Duration' rules={[{ required: true, message: 'You must specify the duration' }]}>
                    <RangePicker picker="year" />
                </Form.Item>
        <br></br>
        </div>
    )
}

export default EducationDetails
