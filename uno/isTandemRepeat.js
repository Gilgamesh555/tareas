function isTandemRepeat(s){
  var x=parseInt(s.length/2,10);
  //console.log(x);
    if(s.length%2==0 && s.length>0){
      for(var i=0;i<x;i++){
        //console.log(s[i]+" "+s[i+x]);
        if(s[i]!=s[i+x])return false;
      }
      return true;
    }
    else{
      return false;
    }
}
s="aa";
console.log(isTandemRepeat(s) ? "true" : "false");
