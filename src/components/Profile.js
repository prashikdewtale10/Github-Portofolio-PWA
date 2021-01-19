import React, { Component } from 'react';
import Repodata from './Repodata';


export class Profile extends Component {
    constructor(){
        super();
        this.state ={
            data:{},
            repos:[],
            loading:true,
        }
    }
    async componentDidMount (){
        const profile=await fetch('https://api.github.com/users/prashikdewtale10');
        const profileData = await profile.json();
        if(profileData){
            const repo = await fetch(profileData.repos_url);
            const repository = await repo.json();
            console.log(repository);
            this.setState({
                data:profileData,
                repos:repository,
                loading:false,
            })
            // console.log(profileData);

        }
    }
    render() {
        const {data,repos,loading}=this.state;
        console.log(data,loading,repos)
        if(loading){
            return <div>Loading</div>
        }
        return (
            <div className="pro">
            <div className="pro_data">
                <img src={data.avatar_url} alt=""/>
            <ul> 
                <h2>Profile</h2>
                <li>Name : {data.name}</li>
                <li>Bio : {data.bio}</li>
                <li>Company : Skills Startups</li>
                <li>Location : Chandrapur </li>
                <li>Email : prashikdewtale69@gmail.com</li>
                <li>Avtar Url : <a href={data.avatar_url}>{data.avatar_url} </a> </li>
                <li>html_url: <a href={data.html_url}>{data.html_url}</a> </li>
                <li>Public Repository : {data.public_repos}</li>
                <li>Repos_url: <a href={data.repos_url}>{data.repos_url}</a> </li>
            </ul>
            </div>
            <Repodata repos={this.state.repos} />
            </div>
        )
    }
}

export default Profile
