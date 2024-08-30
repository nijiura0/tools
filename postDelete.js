const callback = function(mutationsList, observer) {
  for(let mutation of mutationsList) {
      if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
              // 追加されたノードが特定のクラスに属しているかを確認
              if (node.nodeType === Node.ELEMENT_NODE && node.getAttribute('data-testid') === 'cellInnerDiv') {
                wordAutoDelete()
              }
          });
      }
  }
};

url = window.location.href
myAccountID = "oekakimon"


setTimeout(()=>{
console.log("timeout start")
//ページの更新を監視し、更新があればブロック処理の実行
const observer = new MutationObserver(callback);
const target = document.querySelector('body');
const config = { childList: true, subtree: true };
observer.observe(target, config);
},1500);

blockWords = ["削除対象の単語","IDなど"]


function wordAutoDelete() {
  if(url != "https://x.com/"+myAccountID){
  console.log("start")
  //Tweet一覧を取得
  var menuText
  tweets = document.querySelectorAll("[data-testid='cellInnerDiv']")
  tweets.forEach((tweet) => {
    tweetText = tweet.textContent || tweet.innerHTML
    //ツイート内容にブロック対象の文字列が含まれるか判定
    const banWordSearch = blockWords.some(word => tweetText.includes(word));
    if (banWordSearch) {
      tweet.innerHTML = ""
    }

      })
  }
}
