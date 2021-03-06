import React from 'react';

import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export class FinancialService extends React.Component {



    

    render(){
        return (

        <Grid container spacing={0}>
          <Grid item xs={4}>
            <ListItem divider="true" >
                <ListItemText primary={this.props.name} />
            </ListItem>
          </Grid>
          <Grid item xs={8}>
            <ListItem selected="true" dense="true" >
                <ListItemText secondary={this.props.value} />
            </ListItem>
          </Grid>
          
         </Grid>
          
    


        );
    }

}