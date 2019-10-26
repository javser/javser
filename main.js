try{
with(document){
var dlc=function(){
alert(7);
//removeEventListener("DOMContentLoaded", dlc,false);
};
addEventListener("DOMContentLoaded", dlc,false);
}
}catch(e){alert(e)}
