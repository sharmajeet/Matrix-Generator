document.getElementById('generateMatrix').addEventListener('click',function(){
  const rows=parseInt(document.getElementById('rows').value);
  const cols=parseInt(document.getElementById('cols').value);
  const matrixContainer=document.getElementById('matrixContainer');
  const submitButton=document.getElementById('submitMatrix');

  matrixContainer.innerHTML='';
  submitButton.style.display='inline-block';

  for(let i=0;i<rows;i++){
    const rowDiv=document.createElement('div');
    rowDiv.style.display='flex';

    for(let j=0;j<cols;j++){
      const input=document.createElement('input');
      input.type='number';
      input.className='matrix-cell';
      input.dataset.row=i;
      input.dataset.cols=j;
      rowDiv.appendChild(input);
    }

    matrixContainer.appendChild(rowDiv)
  }

});

document.getElementById('submitMatrix').addEventListener('click',function(){
  const matrixContainer=document.getElementById('matrixContainer');
  const inputs=matrixContainer.querySelectorAll('.matrix-cell');
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);
    const resultDiv=document.getElementById('result');

    const matrix=[];
    let maxVal=-Infinity;
    let maxPos=null;

    for(let i=0;i<rows;i++){
      const row=[];
      for(let j=0;j<cols;j++){
        const cell = inputs[i*cols+j];
        const value = parseFloat(cell.value) || 0;
        row.push(value);

        if(value>maxVal){
          maxVal=value;
          maxPos={row:i,col:j}
        }
      }
      matrix.push(row);
    }

    if(maxPos){
      const leftValue = maxPos.col>0? matrix[maxPos.row][maxPos.col-1]:'None';
      const rightValue = maxPos.col<cols-1? matrix[maxPos.row][maxPos.col+1]:'None';
      resultDiv.innerHTML=`
        <h3>Maximum Value: ${maxVal}</h3>
         <p>Left: ${leftValue}, Right: ${rightValue}</p>
      `
    }
    else{
      resultDiv.innerHTML=`
          <p>No values found</p>`
    }


})