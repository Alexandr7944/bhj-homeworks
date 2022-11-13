const pollAnswers = document.querySelector('#poll__answers');
const pollTitle = document.querySelector('#poll__title');

const xhrPoll = new XMLHttpRequest();
xhrPoll.open('GET', "https://netology-slow-rest.herokuapp.com/poll.php");
xhrPoll.responseType = 'json';
xhrPoll.send();

xhrPoll.onload = () => {
	pollTitle.innerText = xhrPoll.response.data.title;
	xhrPoll.response.data.answers.find(item => {
		pollAnswers.innerHTML += `
			<button class="poll__answer">
              ${item}
            </button>
		`;
	})
	const pollAnsver = document.getElementsByClassName('poll__answer');
	for(let i = 0; i < pollAnsver.length; i++) {
		pollAnsver[i].onclick = () => {
            alert('«Спасибо, ваш голос засчитан!»');
            showStatic(pollAnsver[i]);
        }
	}
}

function showStatic(index) {
	const xhrAnswer = new XMLHttpRequest();
	xhrAnswer.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
	xhrAnswer.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
	xhrAnswer.responseType = 'json';
	xhrAnswer.send( `vote=${xhrPoll.response.id}&answer=${index}` );
	xhrAnswer.onload = () => {
		pollAnswers.innerHTML = '';
		xhrAnswer.response.stat.find(item => {
			pollAnswers.innerHTML += `<p>${item.answer}: ${item.votes / 10}%</p>`;
		})
	}
}