import React, { useContext } from 'react'
import { BackTop } from 'antd';
import { Breadcrumb } from 'antd';
import ResumeContext from './ResumeContext'
import ShowMultiSelector from './views/ShowMultiSelector';
import ShowProject from './views/ShowProject';
import ShowBasic from './views/ShowBasic';
import ShowEducation from './views/ShowEducation';
import ShowExperience from './views/ShowExperience';
const DisplayResume = () => {

    const {resumeData} = useContext(ResumeContext);
    const logMe = () => {
        console.log(resumeData)
    }
    return (
        <div>
            <BackTop />
            <Breadcrumb>
                <Breadcrumb.Item>Breadcrumb : Resume Maker</Breadcrumb.Item>
                <Breadcrumb.Item>Preview
            </Breadcrumb.Item></Breadcrumb>
            <h1>Resume Preview</h1>
            <button onClick={logMe}>Click to Log Console</button><br></br>

            <ShowBasic />   
            <ShowEducation />
            <ShowExperience />
            <ShowMultiSelector type="Skills"/>
            <ShowMultiSelector type="Languages"/>
            <ShowProject />
            
        </div>
    )
}

export default DisplayResume
