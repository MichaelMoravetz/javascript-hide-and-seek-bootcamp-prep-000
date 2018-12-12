function getFirstSelector(selector) {
 
  return document.querySelector(selector)
}

function nestedTarget() {
  
  return document.getElementsByTagName('div')[4] 
}
 
 function deepestChild() {
 
  var deepChild = document.getElementById('grand-node').querySelectorAll('div div div div');
   
   for (let i = 0; i < deepChild.length; i++) {
   
    return deepChild[i].querySelector('div')
   }
 }
 
 function increaseRankBy(n) {
   
  const lis = document.getElementsByClassName('ranked-list').querySelectorAll('li');
  
  for (let i = 0; i < lis.length; i++) {
    
     lis[i].innerHTML.querySelectorAll(li[i]).parseInt(n);
    
  } 
  return lis
 }