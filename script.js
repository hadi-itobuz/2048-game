const grid= [["","","",""],["","","",""],["","","",""],["","","",""]];
const isEmpty=(i,j)=>!grid[i][j].trim.length;
const fillRandomCell=()=>{
    const i=Math.floor(Math.random()*4);
    const j=Math.floor(Math.random()*4);
    if(isEmpty(i,j)) grid[i][j]="2";
    else fillRandomCell();

}
const leftShift=(i,row)=>{
    const e=row[i];
    if(i>0){
        if(row[i-1]===e) row[i]=e*2;
    }
}
const left=(row)=>{
    for(let i=0;i<row.length;i++){
        leftShift(i,row);
    }
}