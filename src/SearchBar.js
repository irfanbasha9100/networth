
const SearchBar = ({articles,setSearchResults,setShowList})=>{
    
    const handleSubmit=(e)=>e.preventDefault()
    const handleSearchChange =(e)=>{
        if(!e.target.value) return setSearchResults(articles)
        
        const resultsArray = articles.filter(article=>
            
            article.login.includes(e.target.value)
        )
        console.log(resultsArray);
        setSearchResults(resultsArray)
        setShowList(true)
    }
    
    return (
        <header>
        <form className="" onSubmit={handleSubmit} >
            <input style={{margin:30 }}
            type="text" 
            id='search'
            placeholder="Username"
            onChange={handleSearchChange }>
            </input>
            
        </form>
        </header>
        
    )

}
export default SearchBar;