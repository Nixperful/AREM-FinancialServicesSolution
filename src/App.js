import React, { Component } from 'react';
import logo from './coin_logo.svg';
import './App.css';
import {getFinancialServicesAxiosList} from './AxiosConnection'
import backEndSimulator from './BackEndSimulator';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {FinancialServicesList} from './FinancialServiceList';
import {FinancialCurrencyConverter} from './FinancialCurrencyConverter';

class App extends Component {
  

  constructor(props) {
    super(props);
    this.getFinancialServicesMockedList=this.getFinancialServicesMockedList.bind(this);
    this.getFinancialServiceList=this.getFinancialServiceList.bind(this);
    this.state = {financialServicesList:[]};
    //this.getFinancialServicesMockedList();
    this.getFinancialServiceList();
  }
  

  getFinancialServiceList(){
      var self = this;
      var financials=[];
      var callback = {
          onSuccess: function(response){
            var list = response.data.rates; 
             
            for(var key in list) {
              var val = list[key];
              financials.push({name:key,value:val})
            }


            localStorage.setItem("JSON", JSON.stringify(financials));

            self.setState({financialServicesList: financials });
          },
          onFailed: function(error){
              console.log(error);
          }
      };
      getFinancialServicesAxiosList(callback);
  }

  getFinancialServicesMockedList(){
      var self=this;
      backEndSimulator.getFinancialServicesMockedList( function (response) {
          localStorage.setItem("PRUEBA",JSON.stringify(response.data));
          self.state={financialServicesList:response.data};   
      }
      );
  }

  render() {
   
    return (
      <div className="App">
        <header className="App-header">
        
        <div>
          <img src={logo} className="App-logo" alt="logo" /> 
          <h1 className="App-title">AREM Financial Services</h1>
        </div>
        
          
        </header>
        <div >
        
        <Grid className="ContainerApp" container spacing={4} >
          <Grid item xs={1.3}>
            <Paper >
              <FinancialServicesList financialServices={this.state.financialServicesList} />
            </Paper>
          </Grid>
          <Grid item xs={16}>
            <Paper >
              <FinancialCurrencyConverter financialServices={this.state.financialServicesList}/>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <img class="thumb-image loaded"  data-load="false" data-type="image" src="https://media.giphy.com/media/72HahsJD4atSE/giphy.gif?format=300w" width="300" height= "300" data-image-resolution="400w"></img>  
          </Grid>
        </Grid>
        
        </div>

        <footer>
 
        </footer>
        

       




      </div>
    );
  }
}

export default App;
