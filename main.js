function submitData() {
  var q1=document.querySelector("#q1").value;
  var q1o1=document.querySelector("#q1o1").value;
  var q1o2=document.querySelector("#q1o2").value;
  var q1o3=document.querySelector("#q1o3").value;
  var q1o4=document.querySelector("#q1o4").value;
  var ca1=document.querySelector("#ca1").value;
  var q2=document.querySelector("#q2").value;
  var q2o1=document.querySelector("#q2o1").value;
  var q2o2=document.querySelector("#q2o2").value;
  var q2o3=document.querySelector("#q2o3").value;
  var q2o4=document.querySelector("#q2o4").value;
  var ca2=document.querySelector("#ca2").value;
  var q3=document.querySelector("#q3").value;
  var q3o1=document.querySelector("#q3o1").value;
  var q3o2=document.querySelector("#q3o2").value;
  var q3o3=document.querySelector("#q3o3").value;
  var q3o4=document.querySelector("#q3o4").value;
  var ca3=document.querySelector("#ca3").value;
  var q4=document.querySelector("#q4").value;
  var q4o1=document.querySelector("#q4o1").value;
  var q4o2=document.querySelector("#q4o2").value;
  var q4o3=document.querySelector("#q4o3").value;
  var q4o4=document.querySelector("#q4o4").value;
  var ca4=document.querySelector("#ca4").value;
  var q5=document.querySelector("#q5").value;
  var q5o1=document.querySelector("#q5o1").value;
  var q5o2=document.querySelector("#q5o2").value;
  var q5o3=document.querySelector("#q5o3").value;
  var q5o4=document.querySelector("#q5o4").value;
  var ca5=document.querySelector("#ca5").value;
  var q6o1=document.querySelector("#q6o1").value;
  var q6o2=document.querySelector("#q6o2").value;
  var q6o3=document.querySelector("#q6o3").value;
  var q6o4=document.querySelector("#q6o4").value;
  var ca6=document.querySelector("#ca6").value;
  var q7o1=document.querySelector("#q7o1").value;
  var q7o2=document.querySelector("#q7o2").value;
  var q7o3=document.querySelector("#q7o3").value;
  var q7o4=document.querySelector("#q7o4").value;
  var ca7=document.querySelector("#ca7").value;
  var q8o1=document.querySelector("#q8o1").value;
  var q8o2=document.querySelector("#q8o2").value;
  var q8o3=document.querySelector("#q8o3").value;
  var q8o4=document.querySelector("#q8o4").value;
  var ca8=document.querySelector("#ca8").value;
  var q9o1=document.querySelector("#q9o1").value;
  var q9o2=document.querySelector("#q9o2").value;
  var q9o3=document.querySelector("#q9o3").value;
  var q9o4=document.querySelector("#q9o4").value;
  var ca9=document.querySelector("#ca9").value;
  var q10o1=document.querySelector("#q10o1").value;
  var q10o2=document.querySelector("#q10o2").value;
  var q10o3=document.querySelector("#q10o3").value;
  var q10o4=document.querySelector("#q10o4").value;
  var ca10=document.querySelector("#ca10").value;
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
  window.open("index.html");
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
    store.put({
      q1:q1,
      q1o1:q1o1,
      q102:q1o2,
      q1o3:q1o3,
      q1o4:q1o4,
      ca1:ca1,
      q2o1:q2o1,
      q2o2:q2o2,
      q2o3:q2o3,
      q2o4:q2o4,
      ca2:ca2,
      q3o1:q3o1,
      q3o2:q3o2,
      q3o3:q3o3,
      q3o4:q3o4,
      ca3:ca3,
      q4o1:q4o1,
      q4o2:q4o2,
      q4o3:q4o3,
      q4o4:q4o4,
      ca4:ca4,
      q5o1:q5o1,
      q5o2:q5o2,
      q5o3:q5o3,
      q5o4:q5o4,
      ca5:ca5,
      q6o1:q6o1,
      q6o2:q6o2,
      q6o3:q6o3,
      q6o4:q6o4,
      ca6:ca6,
      q7o1:q7o1,
      q7o2:q7o2,
      q7o3:q7o3,
      q7o4:q7o4,
      ca7:ca7,
      q8o1:q8o1,
      q8o2:q8o2,
      q8o3:q8o3,
      q8o4:q8o4,
      ca8:ca8,
      q9o1:q9o1,
      q9o2:q9o2,
      q9o3:q9o3,
      q9o4:q9o4,
      ca9:ca9,
      q10o1:q10o1,
      q10o2:q10o2,
      q10o3:q10o3,
      q10o4:q10o4,
      ca10:ca10,
    });


}
}
