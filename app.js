//Triangle Button
document.getElementById('btn-triangle').addEventListener('click', function(){
   const triResult= getResultFromInput('tri-input-1', 'tri-input-2');
   const title = document.getElementById('tri-title').innerText;

   //Validation Check
   if(triResult!=="" && triResult>0){
    serial++;
    displayData(serial, title , triResult);
    }
 

});

//Rectangle Button
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const recResult = getResultAnotherInput('rec-input-1', 'rec-input-2');
    const title = document.getElementById('rec-title').innerText;

    //Validation Check
    if(recResult!=="" && recResult>0){
        serial++;
        displayData(serial, title , recResult);
        }

   
});

//Parallelogram Button
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const paraResult = getResultAnotherInput('para-input-1', 'para-input-2');
    const title = document.getElementById('para-title').innerText;

    //Validation Check
    if(paraResult!=="" && paraResult>0){
        serial++;
        displayData(serial, title , paraResult);
        }

  
    
});

//Rhombus Button
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const rhomResult = getResultFromInput('rhom-input-1', 'rhom-input-2');
    const title = document.getElementById('rhom-title').innerText;

    //Validation Check
    if(rhomResult!=="" && rhomResult>0){
        serial++;
        displayData(serial, title , rhomResult);
        }

});

//Pentagon Button
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const pentResult = getResultFromInput('pent-input-1', 'pent-input-2');
    const title = document.getElementById('pent-title').innerText;

    //Validation Check
    if(pentResult!=="" && pentResult>0){
        serial++;
        displayData(serial, title , pentResult);
        }


});

//Ellipse Button
document.getElementById('btn-ellipse').addEventListener('click', function(){

    const firstInput = document.getElementById('elli-input-1').value;
    const firstInputNumber = parseFloat(firstInput);
    const secondInput = document.getElementById('elli-input-2').value;
    const secondInputNumber = parseFloat(secondInput);

    //Validation Check
    if(firstInputNumber =="" || secondInputNumber =="" || firstInputNumber <0 || secondInputNumber < 0 || isNaN(firstInputNumber) || isNaN(secondInputNumber)){
       return alert('Input a valid Number');
       
    }
    

    const output = (3.14*firstInputNumber*secondInputNumber).toFixed(2);
    
    const elliResult =  output;
    const title = document.getElementById('elli-title').innerText;

    //Validation Check
    if(elliResult!=="" && elliResult>0){
        serial++;
        displayData(serial, title , elliResult);
        }

    
});