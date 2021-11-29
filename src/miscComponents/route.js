import HomeBody from '../body/home_body';
import AboutBody from "../body/about_us_body";
import PostBody from '../body/post_body';
import ContactUsBody from '../body/contact_us_body';
import {Switch, Route} from "react-router-dom"
import AboutEthanBody from '../body/about_Ethan_body';
import AboutWarrenBody from '../body/about_Warren_body';
import AboutMavidBody from '../body/about_Mavid_body';
import ArticleMap from '../body/article_map';
const Hub = () => {
    return(
        <Switch>
        <Route exact path = '/'>
      <HomeBody/>
        </Route>
        <Route exact path = '/about'>
          <AboutBody/>
        </Route>
          <Route path = "/about/Ethan">
            <AboutEthanBody/>
          </Route>
          <Route path = "/about/Warren">
            <AboutWarrenBody/>
          </Route>
          <Route path = "/about/Mavid">
            <AboutMavidBody/>
          </Route>
        <Route exact path = '/posts'>
          <PostBody/>
          </Route>
          <Route exact path = "/contactUs">
          <ContactUsBody/>
          </Route>
          <ArticleMap/>
      </Switch>
    )
}
export default Hub