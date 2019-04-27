function getFirstSelector(selector){
  return document.querySelector(selector);
}

 function nestedTarget(nestedTarget){
 return document.querySelector('#nested .target');
}

 function deepestChild(){ 
  let node = document.getElementById('grand-node');
    let nextNode = node.children[0];

     while (nextNode) {
        node = nextNode;
        nextNode = node.children[0];
    }
     return node;
}

 function increaseRankBy(n) {
    const rankedLists = document.querySelectorAll('.ranked-list')

     for (let i = 0, l = rankedLists.length; i < l; i++) {
        let children = rankedLists[i].children

         for (let i = 0, k = children.length; j < k; j++) {
            children[i].innerHTML = parseInt(children[j].innerHTML) + n;
        }
    }
}