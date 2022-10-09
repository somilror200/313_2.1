import React from 'react'
import { List,Header } from 'semantic-ui-react'

const ListData = (props) => (
  
  <List>
    {
        props.values.map(string =>
            <List.Item>
              {string}
              </List.Item>
        )
    }
   
  </List>

)

export default ListData