import React, { Component } from 'react';
import { FinancialService } from './FinancialService';

import List from '@material-ui/core/List';


export class FinancialServicesList extends Component {
  

  render() {

    const financialServicesTable = this.props.financialServices.map((financialService, i) => {
      return (   
          <FinancialService key={i} name={financialService.name} value={financialService.value}/>
      );
  });


    return (
      
        <List >
          {financialServicesTable}
        </List>


    );
  }
}


