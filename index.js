function getFirstSelector(selector) {
 
  return document.querySelector(selector)
}

function nestedTarget() {
  
  return document.getElementsByTagName('div')[4] 
}
 
 function deepestChild() {
   
    const ident = document.getElementById('grand-node');
    
    const div = ident.children[0]
    
    const deepChild = div.getElementsByTagName('div')
    
    return deepChild
    
    
 }
 