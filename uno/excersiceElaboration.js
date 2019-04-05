function isDigit(n){
  n*=n;
  var ans=0;
  //console.log(n);
  while(n>0){
    ans+=n%10;
    n=parseInt(n/10,10);
  }
  return ans;
}
function excersiceElaboration(p,n){
  if(n>=1){
    return isDigit(p*100+p);
  }
  else{
    return isDigit(p*10+p);
  }
}
console.log(excersiceElaboration(1,2));
