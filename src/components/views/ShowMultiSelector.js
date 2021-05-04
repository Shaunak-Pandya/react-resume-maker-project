import React, { useContext } from 'react'
import ResumeContext from '../ResumeContext'
import { Card } from 'antd';
import { Tag } from 'antd';


function ShowMultiSelector(props) {
    const {resumeData} = useContext(ResumeContext)
    const moduleName = props.type
    return (
        <div>
            <hr></hr>
            {/* <h3>{moduleName} : </h3> */}
            <Card title={moduleName} style={{ width: 500, borderColor:'lime-inverse'}}>
            {(moduleName) === 'Skills' ? <div>{resumeData.Skills.map(data => <Tag color="lime-inverse">{data}</Tag>)}</div> :
            <div>{resumeData.Languages.map(data => <Tag color="magenta-inverse">{data}</Tag>)}</div>}</Card>
            
        </div>
    )
}

export default ShowMultiSelector
