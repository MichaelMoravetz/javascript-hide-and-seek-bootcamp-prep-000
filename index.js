function getFirstSelector(selector) {
 
  return document.querySelector(selector)
}

function nestedTarget() {
  
  return document.getElementsByTagName('div')[4] 
}
 
 function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
  }

// function deepestChild() {
  
//   var deepChild = document.getElementById('grand-node').querySelectorAll('div div div div');
 
// return deepChild[0].querySelector('div')
  // // for (let i = 0; i <= deepChild.length; i++) {
    
  // //   return deepChild[i].querySelector('div')
  // }
// }
 
 function increaseRankBy(n) {
   
   var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
   
   for (let i = 0; i < lis.length; i++) {
     
     lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
    
   }
 }