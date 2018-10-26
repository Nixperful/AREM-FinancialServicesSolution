import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';


export class FinancialCurrencyConverter extends Component {
  

    constructor(props) {
        super(props);
        this.state = { value:'', originalCurrency:'', newCurrency:'', originalValue:'', newValue:'', realValue:""};
        this.handleValueChange=this.handleValueChange.bind(this);
        this.handleNewCurrencyChange=this.handleNewCurrencyChange.bind(this);
        this.handleOriginalCurrencyChange=this.handleOriginalCurrencyChange.bind(this);
        this.updateResult=this.updateResult.bind(this);

    }




  render() {

    const financialServicesOptions =  this.props.financialServices.map((financialService, i) => {
        
        return (   
            <option value={financialService.name}>{financialService.name}</option>
        );
    });

    return (
      
        <Card >
            <CardContent>
                <br/>
                <br/>
                <TextField id="value" label="De:" type="number" onChange={this.handleValueChange} value={this.state.value} InputLabelProps={{shrink: true}}/>
                
            </CardContent> 

            
            <CardActions style={{justifyContent: 'center'}}>
            
                
            
            
            
                  
            <Grid  alignItems="center" justify="center" container spacing={0}>
                <Grid item xs={3}>
                    <ListItem  >

                        

                        <FormControl variant="outlined" >
                                <InputLabel >
                                Your Currency
                                </InputLabel>
                                <Select
                                native
                                
                                onChange={this.handleOriginalCurrencyChange}    
                                input={
                                    <OutlinedInput
                                    name="currency"
                                    labelWidth={2}
                                    id="currencySelecter"
                                    />
                                }
                                >
                                {financialServicesOptions}
                                </Select>
                            </FormControl>
                    </ListItem>
                </Grid>
                <h2>A</h2> 
                <Grid item xs={3}>
                    <ListItem  >
                        <FormControl variant="outlined" >
                                <InputLabel>
                                New Currency
                                </InputLabel>
                                <Select
                                native
                                
                                onChange={this.handleNewCurrencyChange}
                                input={
                                    <OutlinedInput
                                    name="newCurrency"
                                    labelWidth={2}
                                    id="currencySelecter2"
                                    />
                                }
                                >
                                {financialServicesOptions}
                                </Select>
                            </FormControl>  
                    </ListItem>
                </Grid>
                <Grid item xs={24}>
                    <ListItem  >
                        <h2>La operación da un resultado de:</h2>
                        
                    </ListItem>
                    <ListItem >
                    <h3>{this.state.realValue}</h3> 
                    </ListItem>
                </Grid>
            </Grid>
         </CardActions>

        </Card>

    );
  }


  handleOriginalCurrencyChange(e) {
    this.props.financialServices.map((financialServiceElement, i) => {
        if (financialServiceElement.name===e.target.value){
            
            this.setState({
                originalCurrency:e.target.name,
                originalValue:financialServiceElement.value
            }); 
            this.state={
                value:this.state.value, originalCurrency: e.target.value,
                newCurrency:this.state.newCurrency,newValue:this.state.newValue, originalValue:financialServiceElement.value,
                realValue:this.state.realValue
            }
            localStorage.setItem("OHO",this.state.originalCurrency)
       
        }
    }); 
    this.updateResult();

  }

  handleNewCurrencyChange(e) {
    this.props.financialServices.map((financialServiceElement, i) => {
        
        if (financialServiceElement.name===e.target.value){
            this.setState({
                newCurrency: e.target.value, newValue:financialServiceElement.value
            }); 

            this.state={
                value:this.state.value, originalCurrency:this.state.originalCurrency ,
                newCurrency:e.target.value,newValue:financialServiceElement.value, originalValue:this.state.originalValue,
                realValue:this.state.realValue
            }
        }
        
    }); 
    this.updateResult();
  }

  handleValueChange(e) {
    
    this.setState({
        value: e.target.value
    }); 
    this.state={
        value:e.target.value, originalCurrency: this.state.originalCurrency,
        newCurrency:this.state.newCurrency, newValue:this.state.newValue,
        originalValue:this.state.originalValue,realValue:this.state.realValue
    }
    this.updateResult();



  }

  updateResult(){

    var dolarValue=this.state.value/parseFloat(this.state.originalValue);
    var finalValue=dolarValue*this.state.newValue;
    this.setState(
        {realValue:finalValue}
    )

    

  }
 
}
