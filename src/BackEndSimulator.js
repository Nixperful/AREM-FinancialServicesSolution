var backEndSimulator = (function () {

    
    var mockedFinancialServices=[{name:"Dolar",value:3500 },{name:"Peso",value:1000},{name:"Euro",value:4000}];
    

    return {
        getFinancialServicesMockedList: function(callback){
            callback({data:mockedFinancialServices});
        }
    }

})();

export default backEndSimulator;

