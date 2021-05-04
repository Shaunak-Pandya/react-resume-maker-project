import React from 'react'
import 'antd/dist/antd.css';
import {DatePicker, Form, Input} from 'antd';
const { TextArea } = Input;

function BasicDetails() {
    return (
        <div>
            <h2>Personal Details</h2>
                <Form.Item name="name" label='Name' rules={[{ required: true, message: 'Please input your Name!' }]}>
                    <Input placeholder="You name goes here.."  />
                </Form.Item>
                <Form.Item name="birthday" label="Birthday" rules={[{ required: true, message: 'Please input your BirthDate!' }]}>
                    <DatePicker />
                </Form.Item>
                <Form.Item name="email" label='Email' rules={[{ required: true, message: 'Please input your Email!' }]}>
                    <Input type="email" placeholder="You Email goes here.."/>
                </Form.Item>
                <Form.Item name="about" label='About' rules={[{ required: true, message: 'You must fill this!' }]}>
                    <TextArea rows={4}/>
                </Form.Item> 
        </div>
    )
}

export default BasicDetails
