function knightMoves(start, end) {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  function isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  let queue = [[start]];
  let visited = new Set();
  visited.add(start);

  while (queue.length) {
    let path = queue.shift();
    let position = path[path.length - 1];

    if (position[0] === end[0] && position[1] === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach((pos) => console.log(pos));
      return path;
    }

    for (let i = 0; i < moves.length; i++) {
      let newX = position[0] + moves[i][0];
      let newY = position[1] + moves[i][1];

      if (isValid(newX, newY)) {
        let newPosition = [newX, newY];

        if (!visited.has(newPosition)) {
          visited.add(newPosition);
          let newPath = path.slice();
          newPath.push(newPosition);
          queue.push(newPath);
        }
      }
    }
  }
}

knightMoves([0, 0], [1, 2]);
knightMoves([3, 3], [0, 0]);
knightMoves([3, 3], [4, 3]);
knightMoves([0, 0], [7, 7]);
