var backEndSimulator = (function () {

    
    var mockedFinancialServices=[{name:"Dolar",value:3500 },{name:"Peso",value:1000},{name:"Euro",value:4000}];
    var mocked= {"AED":3.673181,"AFN":75.554842,"ZAR":14.656313};

    var fin=[];
    return {

        

        getFinancialServicesMockedList: function(callback){

            for(var key in mocked) {
                var val = mocked[key];
                fin.push({name:key,value:val})
               
              }            

            callback({data:fin});
        }
       
    }

})();





export default backEndSimulator;

