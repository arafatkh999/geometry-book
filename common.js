let serial = 0

// GetInputType-1 Function
function getResultFromInput(input1, input2){
    const firstInput = document.getElementById(input1).value;
    const firstInputNumber = parseFloat(firstInput);
    const secondInput = document.getElementById(input2).value;
    const secondInputNumber = parseFloat(secondInput);

    //Validation Check
    if(firstInputNumber =="" || secondInputNumber =="" || firstInputNumber <0 || secondInputNumber < 0 || isNaN(firstInputNumber) || isNaN(secondInputNumber)){
       return alert('Input a valid Number');
       
    }
    

    const output = (0.5*firstInputNumber*secondInputNumber).toFixed(2);
    
    return output
};




//  GetInputType-2 Function
function getResultAnotherInput(input1, input2){
    const firstInput = document.getElementById(input1).value;
    const firstInputNumber = parseFloat(firstInput);
    const secondInput = document.getElementById(input2).value;
    const secondInputNumber = parseFloat(secondInput);

    //Validation Check
    if(firstInputNumber =="" || secondInputNumber =="" || firstInputNumber <0 || secondInputNumber < 0 || isNaN(firstInputNumber) || isNaN(secondInputNumber)){
        return alert('Input a valid Number');
    }

     const output = (firstInputNumber*secondInputNumber).toFixed(2);
    
    return output


};


// Display Table Function

function displayData(serial, title, result) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.style.width ='50%';
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${title}</td>
      <td>${result}cm<sup>2</sup></td>
      <td>
      <button class="btn-info text-white p-1.5 rounded">Convert to <span> m<sup>2</sup> </span> </button>
      </td>
      
    `;
    
    container.appendChild(tr);
  };



  //Random Color Function
  function colorChange(elementId){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById(elementId).style.backgroundColor="#" + randomColor;
    };


// BlogPage Function
function blogpage(){
    window.location.href="blog.html";
}
