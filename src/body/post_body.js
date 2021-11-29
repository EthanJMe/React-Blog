import { Card, CardImg } from "react-bootstrap"
import content from "../content/content"
function postBody () {
    const updatedContent = []
    
  return (
    <>
{content.map((blogInfo, i)=> {
return <a href=  {"/posts/"+blogInfo.title.replace(/ /g, '')}>
<Card className = 'article'>   
   <CardImg src = {blogInfo.myImg}/>
   <Card.Body>
    <Card.Title>{blogInfo.title}</Card.Title>
   <Card.Text>
  {blogInfo.description}
    </Card.Text>
  </Card.Body>
   </Card>
   </a>
})}
</>
  );
    // return (<div>
    //     <Card className = "article">
    //      <CardImg variant = 'top' src = {pineconeLamp} />
    //     <Card.Body>
    //           <Card.Title>Article 1</Card.Title>
    //           <Card.Text>
    //             This pinecone lamp is complex, so we will  
    //             only cover the electronics this week.
    //           </Card.Text>
    //         </Card.Body>
    //     </Card>
    //     <Card className = "article">
    //      <CardImg variant = 'top' src = {suspended} />
    //     <Card.Body>
    //           <Card.Title>Article 2</Card.Title>
    //           <Card.Text>
    //             Suspending items can cause bubbles in your resin
    //             here are solutions.
    //           </Card.Text>
    //         </Card.Body>
    //     </Card>
    //     <Card className = "article">
    //      <CardImg variant = 'top' src = {equipment} />
    //     <Card.Body>
    //           <Card.Title>Article 3</Card.Title>
    //           <Card.Text>
    //             Having the right tools for the job is
    //             paramount, here is a list of those essentials.
    //           </Card.Text>
    //         </Card.Body>
    //     </Card>
    //     </div>
    // )
  }
    export default postBody