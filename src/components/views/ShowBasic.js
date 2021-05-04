import moment from 'moment'
import { Card } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React, { useContext } from 'react'
import ResumeContext from '../ResumeContext'

const ShowBasic = () => {
    const {resumeData} = useContext(ResumeContext)
    return (
        <div>
            <hr></hr>
            <Card title="Basic Details" style={{ width: 500, borderColor:'lime'}}>
            <h2><Avatar size={64} icon={<UserOutlined />} /> {resumeData.name}</h2>
            <h3>Date of Birth - {moment(resumeData.birthday).format("Do MMM YYYY")}</h3>
            <h3>Email - {resumeData.email}</h3>
            <h3>About Me - {resumeData.about}</h3></Card>
            <hr></hr>           
        </div>
    )
}

export default ShowBasic
