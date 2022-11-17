const pollAnswers = document.querySelector('#poll__answers');
const pollTitle = document.querySelector('#poll__title');

const xhrPoll = getXHR('GET', "https://netology-slow-rest.herokuapp.com/poll.php");
xhrPoll.addEventListener('load', () => {
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
})


function showStatic(index) {
	const xhrAnswer = getXHR('POST', 'https://netology-slow-rest.herokuapp.com/poll.php', `vote=${xhrPoll.response.id}&answer=${index}`);
	xhrAnswer.onload = () => {
		pollAnswers.innerHTML = '';
		xhrAnswer.response.stat.find(item => {
			pollAnswers.innerHTML += `<p>${item.answer}: ${item.votes / 10}%</p>`;
		})
	}
}

function getXHR(method, url, data = null) {
	const xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
	xhr.responseType = 'json';
	xhr.send(data);
	return xhr;
}

// function addButton() {
// 	pollTitle.innerText = xhrPoll.response.data.title;
// 	xhrPoll.response.data.answers.find(item => {
// 		pollAnswers.innerHTML += `
// 			<button class="poll__answer">
// 			${item}
// 			</button>
// 		`;
// 	})
// 	const pollAnsver = document.getElementsByClassName('poll__answer');
// 	for(let i = 0; i < pollAnsver.length; i++) {
// 		pollAnsver[i].onclick = () => {
// 			alert('«Спасибо, ваш голос засчитан!»');
// 			showStatic(pollAnsver[i]);
// 		}
// 	}
// }