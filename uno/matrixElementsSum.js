function matrixElementsSum(m){
  var v=new Array(m.length),ans=0;
  for(var x=0;x<m[0].length;x++)v[x]=0;
  for(var x=0;x<m.length;x++){
    for(var y=0;y<m[x].length;y++){
      //console.log(m[x][y]+" "+v[y])
      if(m[x][y]!=0 && v[y]==0){
        ans+=m[x][y];
      }
      else{
        v[y]=1;
      }
    }
  }
  return ans;
}
var m=[[1,1,1,0],
       [0,5,0,1],
       [2,1,3,10],
     ];
console.log(matrixElementsSum(m));
