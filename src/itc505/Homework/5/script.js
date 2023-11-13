const stages = {
  1: {
    text: 'You wake up in a mysterious forest. You see two paths.',
    choices: ['Path leads to mountains', 'Path leads to villages'],
    consequence: [2, 3],
    image: '',
  },
  2: {
    text: 'You find a hidden cave. Inside, you encounter a dragon.',
    choices: ['Fight the dragon', 'Try to sneak past the dragon'],
    consequence: [4, 5],
    image: 'S:\assignments\cs212\Homework\4\images\home.png',
  },
  3: {
    text: 'You follow the path and discover a friendly village.',
    choices: ['Stay in the village', 'Continue your journey'],
    consequence: [11, 12],
    image: 'S:/assignments/cs212/Homework/4/images/home.png',
  },
  4: {
    text: 'You bravely fight the dragon but unfortunately, you are defeated.',
    choices: [],
    consequence: [],
    image: 'images/output.png',
  },
  5: {
    text: 'You successfully sneak past the dragon and find a treasure chest.',
    choices: ['Open the chest', 'Leave the chest and continue'],
    consequence: [6, 7],
    image: 'treasure.jpg',
  },
  6: {
    text: 'You open the chest and find a powerful artifact.',
    choices: ['Use the artifact', 'Leave the artifact and continue'],
    consequence: [8, 7],
    image: 'artifact.jpg',
  },
  7: {
    text: 'You decide to continue your journey without opening the chest. There you see theives looting the supplies.',
    choices: ['Fight the theives', 'Go away'],
    consequence: [9, 10],
    image: 'continue.jpg',
  },
  8: {
    text: 'You used the powerful artifact and became a legendary hero!',
    choices: [],
    consequence: [],
    image: 'images/artifact.png',
  },
  9: {
    text: 'You defeated the theives became a legendary hero!',
    choices: [],
    consequence: [],
    image: 'images/fight.png',
  },
  10: {
    text: 'You left the fight and you are no longer remembered',
    choices: [],
    consequence: [],
    image: 'images/leavevillage.png',
  },
  11: {
    text: 'villagers are facing a problem with raiders',
    choices: ['Kill the enemy leader', 'Join the Raiders'],
    consequence: [13, 14],
    image: 'hero.jpg',
  },
  12: {
    text: 'You found a beautiful woman near the mountains.',
    choices: ['chose to mary her', 'Live a solo life'],
    consequence: [15, 16],
    image: 'hero.jpg',
  },
  13: {
    text: 'You saved the villagers from the raiders and saved the village and became a Hero',
    choices: [],
    consequence: [],
    image: 'images/hero2.png',
  },
  14: {
    text: 'You became a traitor',
    choices: [],
    consequence: [],
    image: 'images/rogue.png',
  },
  15: {
    text: 'You maried her and led a beautiful life',
    choices: [],
    consequence: [],
    image: 'images/marriage.png',
  },
  16: {
    text: 'You lead a solo miserable life',
    choices: [],
    consequence: [],
    image: 'images/village.png',
  },
};

let currentStage;

function startGame() {
  currentStage = 1;
  updatePage();
}

function updatePage() {
  const stage = stages[currentStage];
  writeToOutput(stage.text);
  

  if (stage.choices.length > 0) {
    const choices = stage.choices.map(
      (choice, index) =>
        `<br><button onclick="handleChoice(${index})">${choice}</button>`
    );
    document.getElementById('output').innerHTML += choices.join('');
  } else {
    endGame(stage.text, stage.image);
  }
}

function handleChoice(index) {
  const stage = stages[currentStage];
  currentStage = stage.consequence[index];
  updatePage();
}

function endGame(result, image) {
  writeToOutput(`<strong>Game Over:</strong> ${result}`);

  document.getElementById('output').innerHTML +=
    '<br><div src="" id="img-container" ></div><br><button   onclick="startGame()">Restart Game</div>';
  const imgContainer = document.getElementById('img-container');
      if (imgContainer) {
        console.log("Trust");
        imgContainer.innerHTML = `<img src="${image}" alt="End Game Image">`;
      }
}

function writeToOutput(text) {
  document.getElementById('output').innerHTML = text;
}