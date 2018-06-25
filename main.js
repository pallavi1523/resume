function loadJson(file,callback){
  var xhr=new XMLHttpRequest( );
  xhr.overrideMimeType("appliation/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  fun_career(data.career);
  fun_education(data.education);
  fun_achievements(data.achievements);
  fun_technicalskills(data.technicalskills);
});
var div2=document.getElementById("child2");
function fun_career(car){
  var h1=document.createElement("h1");
  h1.textContent="career objective";
  div2.appendChild(h1);
  var hr=document.createElement("hr");
  div2.appendChild(hr);
  var p=document.createElement("p");
  p.textContent=car.info;
  div2.appendChild(p);
}
function fun_education(edu){
  var h1=document.createElement("h1");
  h1.textContent="education qualification";
  div2.appendChild(h1);
  var list=document.createElement("hr");
  div2.appendChild(list);
  var list=document.createElement("ul");
  div2.appendChild(list);
  for(var i=0;i<edu.length;i++){
  var listitem=document.createElement("li");
  listitem.textContent=edu[i].degree;
  list.appendChild(listitem);
  var listitem1=document.createElement("p");
  listitem1.textContent=edu[i].institute;
  list.appendChild(listitem1);
  var listitem2=document.createElement("p");
  listitem2.textContent=edu[i].data;
  list.appendChild(listitem2);
}
}
function fun_achievements(ach){
  var h1=document.createElement("h1");
  h1.textContent="achievements";
  div2.appendChild(h1);
  var list=document.createElement("hr");
  div2.appendChild(list);
  var list=document.createElement("ul");
  div2.appendChild(list);
  for(var i=0;i<ach.length;i++){
  var listitem=document.createElement("li");
  listitem.innerHTML=ach[i].name;
  list.appendChild(listitem);
}
}
function fun_technicalskills(tech){
  var h1=document.createElement("h1");
  h1.textContent="technicalskills";
  div2.appendChild(h1);
  var list=document.createElement("hr");
  div2.appendChild(list);
  var list=document.createElement("ul");
  div2.appendChild(list);
  var tr="";
  var table=document.createElement("table");
  div2.appendChild(table);
  for(var i=0;i<tech.length;i++){
  tr+="<tr><td>"+tech[i].name+"</td><td>"+tech[i].data+"</td></tr>";
}
table.innerHTML=tr;
table.border="2";
}
