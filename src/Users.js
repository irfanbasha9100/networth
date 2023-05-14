import axios from 'axios';
import { useEffect,useState } from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Users = ()=>{
   
    const [articles, setArticles] = useState([]);
    const [searchResults,setSearchResults] = useState([])
    const [showList,setShowList]= useState(false)
    const loadNews = () => {
        axios({
            url: "https://api.github.com/users",
            method: "GET",
            
        }).then((res) => {
            setArticles(res.data)
            setSearchResults(res.data)
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    
    useEffect(() => {
        loadNews()
    
    }, [])
    

    return (
        <>
        <h1 className="text-muted" style={{margin:30 }}> GitHub Users Repo Project</h1>
        
        <SearchBar articles={articles} setSearchResults={setSearchResults} setShowList={setShowList}  />
        <div>
        {showList?<ul>{(
                searchResults.map((article, index) => {
                            return (
                                <>
                                <Link to ={`/profile/${article.id}`} state={article}>
                                <li key={index}  className="card mt-2 col-md-40">
                                    <div>
                                    <img width="300" height="300" src={article.avatar_url}  class="img-fluid w-100" className="rounded" alt="card-horizontal"/>
                                    <h5 style={{marginTop:30}} className="card-title">{article.login.toUpperCase()}</h5>
                                    {/* <a className="card-text">Repos Url : href={article.repos_url}</a> */}
                                    </div>
                                </li>
                                </Link>
                                <a style={{marginTop:30}} href={article.html_url}>Github {article.login}</a>
                                </>
                            )
                        }))}</ul>:
                        <ul>
                            {(articles.map((article, index) => {
                                return (
                                    <>
                                    <Link to ={`/profile/${article.id}`} state={article}> 
                                    <li key={index} className="card mt-2 col-md-40">
                                        <div >
                                        <img width="300" height="300" src={article.avatar_url} class="img-fluid w-100" className="rounded" alt="card-horizontal"/>
                                    <h5 style={{marginTop:30}}  >{article.login.toUpperCase()}</h5>
                                    {/* <a className="card-text">Repos Url : href={article.repos_url}</a> */}
                                    
                                    </div>
                                    </li>
                                    </Link>
                                    <a style={{marginTop:30}} href={article.html_url}>Github {article.login}</a>
                                    </>
                                    
                                )
                            
                        }))}
                        </ul>
                    }
        </div>
        </>
        
    )
    
}

export default Users;