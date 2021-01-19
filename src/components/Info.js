import React from 'react'

const Info = ({data,loading}) => {
    console.log(data)
        return (
        <div>
            <ul>
                <li>Your Information is here</li>
                <li>{data.html_url}</li>
            </ul>
        </div>
    )
}

export default Info
