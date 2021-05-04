import moment from 'moment'
import { Card } from 'antd';

import React, { useContext } from 'react'
import ResumeContext from '../ResumeContext'

const ShowExperience = () => {
    const {resumeData} = useContext(ResumeContext)
    return (
        <div><hr></hr>
        <h2>Experience Details</h2>
        
        {resumeData.experience_details.map(data => <div>
            <Card title="Company Details" style={{ width: 500, borderColor:'green'}}>
            <h3>Company Name - {data.company_name}</h3>
            <h3>Current Position - {data.job_post}</h3>
            <h3>Work Description - {data.job_description}</h3>
            <h3>Currently Working? - {(data.current_job) === true ? 'Yes' : 'No'}</h3>
            <h3>Duration - {moment(data.job_from_to[0]).format('Do MMMM YYYY')} to {moment(data.job_from_to[1]).format('Do MMMM YYYY')}</h3>
            <h3>Location - {data.job_location}</h3><br></br></Card>
        </div>)}
        </div>
    )
}

export default ShowExperience
