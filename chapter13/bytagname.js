function byTagName(node, tagName) {
  let nodes = [];

  if (node.childNodes.length > 0){
    node.childNodes.forEach((childNode) => {
      if (childNode.tagName && childNode.tagName.toLowerCase() === tagName){
        nodes.push(childNode);
      }
      nodes = nodes.concat(byTagName(childNode, tagName));
    });
  }
  return nodes;
}

console.log(byTagName(document.body, "h1").length);
// → 1
console.log(byTagName(document.body, "span").length);
// → 3
var para = document.querySelector("p");
console.log(byTagName(para, "span").length);
// → 2