function highlightParas(containing) {
  if (typeof containing === 'string')
    containing = new RegExp(`\\b${containing}\\b`, 'i');
  const paras = document.getElementsByTagName('p');
  console.log(paras);
  for (let p of paras) {
    if (!containing.test(p.textContent)) continue;
    p.classList.add('highlight'); // 클래스를 추가할 때는 classList.add 이용.
  }
}

// 클래스를 지우는 함수.
function removeParaHighlights() {
  const paras = document.querySelectorAll('p.highlight');
  for (let p of paras) {
    p.classList.remove('highlight'); // 클래스를 제거할 때는 classList.remove 이용.
  }
}

// button 2개를 함수와 연결.
// 새로운 CSS선택자가 나옴. 대괄호 문법은 어떤 속성이든 찾을 수 있음. 데이터 속성은 대괄호 문법.
const highlightActions = document.querySelectorAll('[data-action="highlight"]');
for (let a of highlightActions) {
  a.addEventListener('click', (evt) => {
    evt.preventDefault();
    highlightParas(a.dataset.containing); // highlightParas 함수에 data 속성의 containing요소를 삽입.
  });
}
const removeHighlightsAction = document.querySelectorAll(
  '[data-action="removeHighlights"]'
);
for (let a of removeHighlightsAction) {
  a.addEventListener('click', (evt) => {
    evt.preventDefault();
    removeParaHighlights(); // removeParaHighlights 실행.
  });
}
