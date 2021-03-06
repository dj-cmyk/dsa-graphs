class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let node of vertexArray) {
      this.addVertex(node)
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let toVisitStack = [start]
    let visitedNodes = [start.value]
  
    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (!visitedNodes.includes(current.value)) {
        visitedNodes.push(current.value);
      }
      
      for (let connection of current.adjacent) {
        if (!visitedNodes.includes(connection.value)) {
          if (!toVisitStack.includes(connection)) {
            toVisitStack.push(connection)
          }
        }
      }
       
    }
    // console.log(visitedNodes)
    return visitedNodes;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    // traverse the graph and make an array of each node once it is visited
    let toVisitQueue = [start]
    let visitedNodes = [start.value]
  
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      for (let connection of current.adjacent) {
        if (!visitedNodes.includes(connection.value)) {
          toVisitQueue.push(connection)
          visitedNodes.push(connection.value);
        }
      }
       
    }
    return visitedNodes;
  }
}

module.exports = {Graph, Node}