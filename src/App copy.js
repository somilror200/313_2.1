import logo from './logo.svg';
import './App.css';

import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import FeaturedTutorials from './home/featuredtutorials'
import FeaturedArticles from './home/featuredarticles'
import { Grid,Header, Button } from 'semantic-ui-react'
import ListData from './listitem'
import Footer from './home/footer.js'
import SocialButtons from './home/socialbuttons';
import Subscribe from './home/subscribe';
function App() {  
  let footer1=["one","two","three"]
  let articles=[{title:'First Article',content:'',image:'https://picsum.photos/200?id=1',rating:4,author:'Aurthor'},
  {title:'Second Article',content:'',image:'https://picsum.photos/200?id=1',rating:4,author:'Timsy'},
  {title:'Third Article',content:'',image:'https://picsum.photos/200?id=1',rating:4,author:'Berin'}
]

let tutorials=[{title:'First Tutorial',content:'',image:'https://picsum.photos/200?id=1',rating:4,author:'Aurthor'},
{title:'Second Tutorial',content:'',image:'https://picsum.photos/200?id=1',rating:4,author:'Timsy'},
{title:'Third Tutorial',content:'',image:'https://picsum.photos/200?id=1',rating:4,author:'Berin'}
]

  return (
<>


<Grid columns={1}>
  <Grid.Row>
    <Grid.Column>
    <Subscribe/>
    </Grid.Column>
  </Grid.Row>
</Grid>
<Grid columns={1}>
  <Grid.Row>
    <Grid.Column>
    <img class="ui fluid image" src="https://picsum.photos/200?id=1"/>
    </Grid.Column>
  </Grid.Row>
</Grid>
<Header as='h1'>Featured Articles</Header>
    <Grid columns={3}>
    
          
        <Grid.Row>
          {
            articles.map(data=>
              <Grid.Column>
              <FeaturedArticles content={data}/>
              </Grid.Column>
            )
          }
         
         
        </Grid.Row>
        </Grid>
        <Button primary>See all Articles</Button>
        <Header as='h1'>Featured Tutorials</Header>
      <Grid columns={3}>
      <Grid.Row>
          {
            tutorials.map(data=>
              <Grid.Column>
              <FeaturedTutorials content={data}/>
              </Grid.Column>
            )
          }
         
         
        </Grid.Row>
        </Grid>

        <Button primary>See all Tutorials</Button>
        <Grid columns={3}>
    
       
    <Grid.Row>
      <Grid.Column>
      <Footer values={footer1} title="Explore"/>
      </Grid.Column>
      <Grid.Column>
      
      <Footer values={footer1} title="Support"/>
      </Grid.Column>
      <Grid.Column>
      
      <SocialButtons/>
      </Grid.Column>
    </Grid.Row>
    </Grid>

        </> 
  );
}

export default App;
