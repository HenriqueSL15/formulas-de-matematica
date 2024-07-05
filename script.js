const questions = [
  {
    question: 'Área do Retângulo',
    answer: ['A', 'b', 'x', 'h', '?', '?', '?'],
    type: 4,
    img: 'img/retangulo.png',
  },
  {
    question: 'Área do Paralelogramo',
    answer: ['A', 'b', 'x', 'h', '?', '?', '?'],
    type: 4,
    img: 'img/paralelogramo.png',
  },
  {
    question: 'Área do Círculo',
    answer: ['A', 'pi', 'x', 'r2', '?', '?', '?'],
    type: 4,
    img: 'img/circulo.png',
  },
  {
    question: 'Área do Triângulo',
    answer: ['A', 'b', 'x', 'h', '?', '?', '2'],
    type: 5,
    img: 'img/triangulo.png',
  },
  {
    question: 'Área do Quadrado',
    answer: ['A', 'l2', '?', '?', '?', '?', '?'],
    type: 2,
    img: 'img/quadrado.png',
  },
  {
    question: 'Área do Losango',
    answer: ['A', 'D', 'x', 'd', '?', '?', '2'],
    type: 4,
    img: 'img/losango.png',
  },
  {
    question: 'Volume do Cubo',
    answer: ['V', 'a3', '?', '?', '?', '?', '?'],
    type: 4,
    img: 'img/cubo.png',
  },
  {
    question: 'Volume do Paralelepípedo',
    answer: ['V', 'a', 'x', 'b', 'x', 'c', '?'],
    type: 6,
    img: 'img/paralelepipedo.png',
  },
  {
    question: 'Volume do Cilindro',
    answer: ['V', 'pi', 'x', 'r2', 'x', 'h', '?'],
    type: 6,
    img: 'img/cilindro.png',
  },
  {
    question: 'Volume do Cone',
    answer: ['V', '1/3xpi', 'x', 'r2', 'x', 'h', '?'],
    type: 6,
    img: 'img/cone.png',
  },
];

const image = document.getElementById('image');

let questionNumber = getRandomInt(0, questions.length);
// questionNumber = 4;
question.innerText = questions[questionNumber].question;
image.setAttribute('src', `${questions[questionNumber].img}`);

let points = 0;

function verifyValues(array, typeOfQuestion) {
  let i = 0;

  array.forEach((element) => {
    if (element != typeOfQuestion.answer[i]) {
    } else {
      i++;
    }
  });

  if (i == typeOfQuestion.answer.length) {
    questionNumber = getRandomInt(0, questions.length);
    question.innerText = questions[questionNumber].question;
    image.setAttribute('src', `${questions[questionNumber].img}`);
    points++;
    clearInputs();
    return true;
  } else {
    return false;
  }
}

function clearInputs() {
  document.getElementById('first-part').value = '?';
  document.getElementById('second-part').value = '?';
  document.getElementById('third-part').value = '?';
  document.getElementById('fourth-part').value = '?';
  document.getElementById('fifth-part').value = '?';

  document.getElementById('first-operator').value = '?';
  document.getElementById('second-operator').value = '?';
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function submitForm() {
  const option1 = document.getElementById('first-part').value;
  const option2 = document.getElementById('second-part').value;
  const option3 = document.getElementById('third-part').value;
  const option4 = document.getElementById('fourth-part').value;
  const option5 = document.getElementById('fifth-part').value;

  const operator1 = document.getElementById('first-operator').value;
  const operator2 = document.getElementById('second-operator').value;

  const question = document.getElementById('question');

  const preview = document.getElementById('preview');

  verifyValues(
    [option1, option2, operator1, option3, operator2, option4, option5],
    questions[questionNumber]
  );
}
