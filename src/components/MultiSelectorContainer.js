import React from 'react'
import { Select, Form } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

const languages =['Hindi', 'English', 'Gujarati']
const skills = ['C++', 'Java', 'JavaScript', 'React.js', 'Node.js']

const languagesOptions = []
const skillsOptions = []

skills.map(skill => skillsOptions.push(<Option key={skill}>{skill}</Option>))
languages.map(language => languagesOptions.push(<Option key={language}>{language}</Option>))

function MultiSelectorContainer(props) {
    return (
        <div>
                <Form.Item name={props.type} label={props.type} rules={[{ required: true, message: 'Must specify Choice' }]}>
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    >
                    {(props.type) === 'Skills' ? skillsOptions : languagesOptions}
                </Select>
                </Form.Item>
        </div>
    )
}

export default MultiSelectorContainer
