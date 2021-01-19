import React from 'react'

const Repodata = ({repos}) => {
    return (
        <div>
            <h2 className='title'>Repository</h2>
      
      <ol className='listdata'>  
      {repos.map(repo =>  
      <li className='list_item'>
               {repo.name} <a href={repo.html_url} target="_blank">Repository Url</a>  
               
               </li>)}
               </ol>
        </div>
    )
}

export default Repodata

