import React, { useContext } from 'react'
import { Card } from 'antd';

import ResumeContext from '../ResumeContext'


const ShowProject = () => {
    const {resumeData} = useContext(ResumeContext)
    return (
        
        <div><hr></hr>
            <h2>Project Details </h2>
            {resumeData.project_details.map(data => <div><Card title="Project Details" style={{ width: 500, borderColor:'blue'}}>
                <h3>Project Name - {data.project_name}</h3>
                <h3>Project Name - {data.project_role}</h3>
                <h3>Project Name - {data.project_description}</h3><br></br></Card>
            </div>)}
        </div>
    )
}

export default ShowProject
