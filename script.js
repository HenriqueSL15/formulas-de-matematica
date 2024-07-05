const questions = [
  {
    question: 'Área do Retângulo',
    answer: ['A', 'b', 'x', 'h', '?', '?', '?'],
    type: 4,
    img: '',
  },
  {
    question: 'Área do Paralelogramo',
    answer: ['A', 'b', 'x', 'h', '?', '?', '?'],
    type: 4,
  },
  {
    question: 'Área do Círculo',
    answer: ['A', 'pi', 'x', 'r2', '?', '?', '?'],
    type: 4,
  },
  {
    question: 'Área do Triângulo',
    answer: ['A', 'b', 'x', 'h', '?', '?', '2'],
    type: 5,
  },
  {
    question: 'Área do Quadrado',
    answer: ['A', 'l2', '?', '?', '?', '?', '?'],
    type: 2,
  },
  {
    question: 'Área do Losango',
    answer: ['A', 'D', 'x', 'd', '?', '?', '2'],
    type: 4,
  },
  {
    question: 'Volume do Cubo',
    answer: ['V', 'a3', '?', '?', '?', '?', '?'],
    type: 4,
  },
  {
    question: 'Volume do Paralelepípedo',
    answer: ['V', 'a', 'x', 'b', 'x', 'c', '?'],
    type: 6,
  },
  {
    question: 'Volume do Cilindro',
    answer: ['V', 'pi', 'x', 'r2', 'x', 'h', '?'],
    type: 6,
  },
  {
    question: 'Volume do Cone',
    answer: ['V', '1/3xpi', 'x', 'r2', 'x', 'h', '?'],
    type: 6,
  },
  {
    question: 'Volume da Esfera',
    answer: ['V', '4/3xpi', 'x', 'r3', '?', '?', '?'],
    type: 6,
  },
];

let questionNumber = getRandomInt(0, questions.length);
question.innerText = questions[questionNumber].question;

let points = 0;

function verifyValues(array, typeOfQuestion) {
  let i = 0;

  array.forEach((element) => {
    console.log(element, typeOfQuestion.answer[i]);
    if (element != typeOfQuestion.answer[i]) {
      console.log('errado');
    } else {
      console.log('correto');
      i++;
    }
    console.log(i);
  });

  if (i == typeOfQuestion.answer.length) {
    questionNumber = getRandomInt(0, questions.length);
    question.innerText = questions[questionNumber].question;
    points++;
    console.log(points);
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

  if (question.innerText == questions[0].question) {
    verifyValues(
      [option1, option2, operator1, option3, operator2, option4, option5],
      questions[questionNumber]
    );
  } else if (question.innerText == questions[1].question) {
    verifyValues(
      [option1, option2, operator1, option3, operator2, option4, option5],
      questions[questionNumber]
    );
  } else if (question.innerText == questions[2].question) {
    verifyValues(
      [option1, option2, operator1, option3, operator2, option4, option5],
      questions[questionNumber]
    );
  } else if (question.innerText == questions[3].question) {
    verifyValues(
      [option1, option2, operator1, option3, operator2, option4, option5],
      questions[questionNumber]
    );
  } else if (question.innerText == questions[4].question) {
    verifyValues(
      [option1, option2, operator1, option3, operator2, option4, option5],
      questions[questionNumber]
    );
  } else if (question.innerText == questions[5].question) {
    verifyValues(
      [option1, option2, operator1, option3, operator2, option4, option5],
      questions[questionNumber]
    );
  } else if (question.innerText == questions[6].question) {
    verifyValues(
      [option1, option2, operator1, option3, operator2, option4, option5],
      questions[questionNumber]
    );
  }
}
