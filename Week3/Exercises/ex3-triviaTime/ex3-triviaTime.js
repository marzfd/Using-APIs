function main() {

  const h1 = document.createElement('h1');
  h1.innerText = "Let's Play Some Trivia !";
  document.body.appendChild(h1);

  const h3 = document.createElement('h3');
  h3.innerText = 'Try your best to figure out the answer. If you really have no clue, click on the question to reveal the answer...';
  document.body.appendChild(h3);

  const mainDiv = document.createElement('div');
  mainDiv.className = 'questionBox';
  document.body.appendChild(mainDiv);


  // fetch 5 random trivia questions
  url = 'https://opentdb.com/api.php?amount=5'

  async function fetchData () {
    try {
    const fetchedData = await fetch(url);
    const parsedData = await fetchedData.json();

    parsedData.results.forEach(element => {
      const question = document.createElement('button');
      mainDiv.appendChild(question);
      question.innerText = decodeHTMLEntities(element.question);

      const answer = document.createElement('div');
      mainDiv.appendChild(answer);
      answer.className = 'answer';
      answer.innerText = ' ✅ ' + decodeHTMLEntities(element.correct_answer);
      answer.style.display = 'none';

      hideAnswer();

      function showAnswer() {
        answer.style.display = 'block';
        question.removeEventListener('click',showAnswer);
        question.addEventListener('click', hideAnswer);
      }

      function hideAnswer() {
        answer.style.display = 'none';
        question.removeEventListener('click', hideAnswer);
        question.addEventListener('click', showAnswer);
      }
    });
    }
    catch (err) {
      console.log('Oops, something went wrong!', err);
    }
  }

  fetchData();

  // ! Decode HTML-entities
  function decodeHTMLEntities(text) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }
}

main();