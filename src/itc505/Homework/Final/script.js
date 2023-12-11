const size = 5;
  let board;
  let steps = 0;

//   function createRandomSolvableBoard(size) {
//     const board = createBoard(size);

//     // Simulate clicks to create a solvable board
//     for (let i = 0; i < size * size; i++) {
//       const row = Math.floor(i / size);
//       const col = i % size;
//       simulateClick(board, row, col);
//     }

//     return board;
//   }
function createRandomSolvableBoard(size) {
    const board = createBoard(size);
  
    // Randomly toggle cells to create a solvable board
    for (let i = 0; i < size * size; i++) {
      const row = Math.floor(i / size);
      const col = i % size;
  
      // Randomly decide whether to toggle the current cell
      if (Math.random() < 0.5) {
        simulateClick(board, row, col);
      }
    }
  
    return board;
  }
  function simulateClick(board, row, col) {
    toggleCell(board, row, col);
    toggleAdjacentCells(board, row, col);
    steps++;
  }

  function createBoard(size) {
    return Array.from({ length: size }, () => Array(size).fill(false));
  }

  function renderBoard() {
    const gameElement = document.getElementById('game');
    gameElement.innerHTML = '';

    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.classList.toggle('is-off', board[row][col]);
        cell.addEventListener('click', handleCellClick);
        gameElement.appendChild(cell);
      }
    }
  }

  function handleCellClick() {
    const row = parseInt(this.dataset.row);
    const col = parseInt(this.dataset.col);
    steps++;
    toggleCell(board, row, col);
    toggleAdjacentCells(board, row, col);
    renderBoard();

    if (isBoardEmpty()) {
      window.alert(`You win! It took you ${steps} steps.`);
      startGame();
    }
  }

  function toggleCell(board, row, col) {
    board[row][col] = !board[row][col];
   
    updateInfo();
  }

  function toggleAdjacentCells(board, row, col) {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (isValidCell(newRow, newCol)) {
        toggleCell(board, newRow, newCol);
      }
    }
  }

  function isValidCell(row, col) {
    return row >= 0 && row < size && col >= 0 && col < size;
  }

  function isBoardEmpty() {
    return board.every(row => row.every(cell => !cell));
  }

  function updateInfo() {
    const infoElement = document.getElementById('info');
    infoElement.textContent = `Steps: ${steps}`;
  }

  function startGame() {
    board = createRandomSolvableBoard(size);
    steps = 0;
    renderBoard();
    updateInfo();
    toggleButtonsVisibility(false);

  }
  function toggleButtonsVisibility(startBtnVisible) {
    const startBtn = document.getElementById('startBtn');
    const restartBtn = document.getElementById('restartBtn');
    const bg=document.getElementById("bg")
    startBtn.style.display = startBtnVisible ? 'block' : 'none';
    restartBtn.style.display = startBtnVisible ? 'none' : 'block';
  }

  startGame();