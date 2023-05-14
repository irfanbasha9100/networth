<div  className="row g-0">
                                <div  className="col-5 col-sm-4">
                                    <img width="300" height="300" src={article.avatar_url} class="img-fluid w-100" className="rounded" alt="card-horizontal"/>
                                </div>
                                <div className="col-7 col-sm-8">
                                    <div className="card-body">
                                    <h5 className="card-title">{article.login.toUpperCase()}</h5>
                                    {/* <a className="card-text">Repos Url : href={article.repos_url}</a> */}
                                    <a href={article.repos_url}>Repos Url</a>
                                    
                                    </div>
                                </div>
                                </div>




return (
    <>
    
    <li className="card mt-2 col-md-40">
    <div className="row g-0">
    <div className="col-5 col-sm-4">
        <img width="300" height="300" src={article.avatar_url} class="img-fluid w-100" className="rounded" alt="card-horizontal"/>
    </div>
    <div className="col-7 col-sm-8">
        <div className="card-body">
        <h5 className="card-title">{article.login.toUpperCase()}</h5>
        {/* <a className="card-text">Repos Url : href={article.repos_url}</a> */}
        <a href={article.repos_url}>Repos Url</a>
        
        </div>
    </div>
    </div>
</li>
</>

)