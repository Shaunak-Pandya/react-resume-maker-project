import moment from 'moment'
import { Card } from 'antd';
import React, { useContext } from 'react'
import ResumeContext from '../ResumeContext'

const ShowEducation = () => {
    const {resumeData} = useContext(ResumeContext)
    return (
        <Card title="University Details" style={{ width: 500, borderColor:'red'}}>
        <div>
            <h1>Education Details</h1>
            <h3>College Name - {resumeData.college_name}</h3>
            <h3>College Location - {resumeData.college_location}</h3>
            <h3>About - {resumeData.college_about}</h3>
            <h3>Study Period - {moment(resumeData.college_duration[0]).format('YYYY')} to {moment(resumeData.college_duration[1]).format('YYYY')}</h3>
        </div></Card>
    )
}

export default ShowEducation
