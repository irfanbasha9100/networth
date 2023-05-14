import { Link, useLocation} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


const Profile = (props)=>{
  const [followers,setFollowers] = useState([])
  const [repos,setRepos] = useState([])

  // to Load followers
  const loadFollowers = () => {
    axios({
        url: `https://api.github.com/users/${propsData.login}/followers`,
        method: "GET",
        
    }).then((res) => {
        setFollowers(res.data)
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    })
    }
    //To load repos
    const loadRepos = () => {
      axios({
          url: `https://api.github.com/users/${propsData.login}/repos`,
          method: "GET",
          
      }).then((res) => {
          setRepos(res.data)
          console.log(res.data);
      }).catch((err) => {
          console.log(err);
      })
      }
      useEffect(()=>{
        //eslint-disable-next-line
        loadFollowers()
        loadRepos()
        //eslint-disable-next-line
      },[])

    const location = useLocation();
    const propsData = location.state;
    console.log(propsData)

    return (
        <div>
          <h3 style={{paddingTop:30}} className="text-muted">{propsData.login.toUpperCase()}</h3>
          <img className="rounded" style={{border:10}} width="300" height="300" src = {propsData.avatar_url} alt="Avatar_pic"/>
          <div>
            
            <h3 className="text-muted" style={{ marginTop: 10 }}>Repositories:</h3>
          <div style={{display:"flex" ,marginTop: 10, justifyContent:"space-evenly"}}>
                <th scope="col">SL.No</th>
                <th scope="col">Repository Name</th>
                <th scope="col">Github Link</th>
              
          </div>
      
          <ul style={{marginTop: 20}}>
          {
            repos.map((repo,index)=>{
              return(
                <div>
                  <div className="table" style={{display:"flex" ,justifyContent:"space-evenly"}} key={index}  >
                    
                        <span>{index+1}</span>
                        <Link to={`/repo/${repo.id}`} state={repo}><span>{repo.name.toUpperCase().slice(0,4)}</span></Link>
                        <span><a href={repo.html_url}>Nav to{repo.name.slice(0,10)}</a> </span>
                    
                    
                  </div>
                </div>
              )
            })
          }
          </ul>
          </div>
          <h1 className="text-muted" style={{ marginTop: 100 }}>Followers List :</h1>
          <div style={{display:"flex" , justifyContent:"space-around" ,marginTop: 100}}>
                <th scope="col">SL.No</th>
                <th scope="col">Name of the Follower</th>
                <th scope="col">Image</th>
          </div>
          {
          followers.map((follower,index)=>{
            return(
            <div key = {index} style={{display:"flex" , justifyContent:"space-around",marginTop:30}} >
                <span >{index+1}</span>
                <span>{follower.login.toUpperCase()}</span>
                <span><img src = {follower.avatar_url} alt="Avatar_pic" width="100" height="100" /></span>
                </div>
            )
          })}
        </div>
    )

}
export default Profile;