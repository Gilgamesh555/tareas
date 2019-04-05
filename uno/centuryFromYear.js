function centuryFromYear(x){
  ans=parseInt(x/100,10);
  if(x%100!=0)ans++;
  return ans;
}
var m=1700;
console.log(centuryFromYear(m));
