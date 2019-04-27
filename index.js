function getFirstSelector(selector){
  return document.querySelector(selector);
}

 function nestedTarget(nestedTarget){
 return document.querySelector('#nested .target');
}

 function deepestChild(){ 
  return document.querySelector('#grand-node div div div div');
}

 function increaseRankBy(n){
  const rankedList = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = (i + 1).toString();
  }
} 