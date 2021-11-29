import { Route } from "react-router"
import articleContent from "../content/articleContents"

function article_map() {
    return (
       <>
       {articleContent.map((articleBits, i)=> {
           return (
               <>
               <Route exact path = {articleBits.route}>
               <div className = "center">
                    <img className = "smallerImage" src = {articleBits.coverImg} alt = ""/>
                    <h2>{articleBits.title}</h2>
               </div>
               <div className = "center">
                   <img className ="circleImage smallerImage" src = {articleBits.authorImg} alt = ""/>
                   <h4>{articleBits.authorNames}</h4>
                   <p>{articleBits.publishDate}</p>
               </div>
               <div className = "center">
                    <p>{articleBits.text}</p>
               </div>
               </Route>
               </>
           )
       })}
       </>
    )
}

export default article_map
