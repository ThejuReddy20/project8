var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for (var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}
var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.wibkitIndexedDB ;
if(!idb in window)
{
  console.log("indexedDB is not supported");
}
//indexedDB creation
var request;
var store;
var open=idb.open("storeData",1);
console.log("IndexedDB is created");
//window.open("index.html");
open.onupgradeneeded=function (e) {
  request=e.target.result;
  request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created");
  }
open.onerror=function (error) {
  console.log("error is occured");
  }
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
  var info=store.get(paravalue);
  info.onsuccess=function (data) {
    console.log(data);
    quest(data.target.result);
      }
}
var question=document.querySelector(".question");
function quest(q){
  var hh=document.createElement("h2");
  hh.textContent=q.q1;
  question.append(hh);
}
