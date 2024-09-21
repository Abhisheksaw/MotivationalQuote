const quote = document.getElementsByTagName("blockquote")[0];
const author = document.getElementsByClassName("author")[0];

const newQuote = document.querySelector(".quote_btn");
const tweetBtn = document.querySelector(".tweet_btn");

const apiLink = "https://quotes-api-self.vercel.app/quote";

// API Call---> Async Await
let temp;
const getData = async () => {
  const response = await fetch(apiLink);
  const data = await response.json();
  temp = data.quote;
  quote.innerText = data.quote;
  author.innerText = data.author;
};

// Function call
getData();

newQuote.addEventListener("click", () => {
  getData();
});

// window.open ---> Open a new window for tweet
tweetBtn.addEventListener("click", () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" + encodeURIComponent(temp),
    "tweet post",
    "width=400, height=400"
  );
});
