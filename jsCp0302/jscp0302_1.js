/* -----------------------------------------------------------------------------*/
// <요구사항>
// 5. styles.css 파일을 보고 새롭게 생성한 요소에 class를 추가하면 미리 작성해둔 스타일이 적용됩니다.
// 6. 스타일은 마음껏 수정해도 좋습니다.
/* -----------------------------------------------------------------------------*/
// 트윗 게시 버튼 요소
const postTweet = document.querySelector('#postTweet');
postTweet.addEventListener('click', function () {
  // 트윗을 입력할 input 요소
  const tweetInput = document.querySelector('#tweetInput');
  // 트윗이 게시될 컨테이너
  const tweetsContainer = document.querySelector('#tweets_container');
  // 여기에 코드를 입력하세요.

  const tweetContent = tweetInput.value;
  // 3. input에 아무것도 입력되어 있지 않으면 트윗이 생성되지 않아야 합니다. (if문)
  if (tweetContent === '') {
    alert('내용을 입력하세요.');
    return;
  }

  const tweetAll = document.createElement('div');
  tweetAll.classList.add('tweet');
  tweetsContainer.appendChild(tweetAll);

  const tweetText = document.createElement('p');
  // 1. input에 트윗을 입력하고 '게시'버튼을 누르면 트윗이 생성되어야 합니다.
  tweetText.textContent = tweetContent;
  tweetText.classList.add('tweet-text');
  tweetAll.appendChild(tweetText);

  // 2. 생성된 트윗은 게시글, 좋아요 버튼, 좋아요 카운트하는 요소를 포함해야 합니다.
  const likeBtn = document.createElement('button');
  likeBtn.classList.add('like-button');
  likeBtn.textContent = '❤️';
  tweetAll.appendChild(likeBtn);

  // 4. 좋아요 버튼을 클릭하면 좋아요 카운트가 1씩 증가해야 합니다.
  const likeCnt = document.createElement('p');
  likeCnt.textContent = '0';
  tweetAll.appendChild(likeCnt);
  likeCnt.classList.add('like-counter');
  likeBtn.addEventListener('click', function() {
    let cnt = parseInt(likeCnt.textContent)
    likeCnt.textContent = cnt + 1;
  })
});
