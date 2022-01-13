const btnGetQuote = document.querySelector("#btn-get-quote");
const containerQuote = document.querySelector("#container-quote");
const containerAuthor = document.querySelector("#container-author");

//const p = fetch('https://krautipsum.com/api/noun');
//const p = fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random");

btnGetQuote.addEventListener("click", getQuote);

function getQuote() {
  const p = fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random");
  let p2 = p.then((antwort) => {
    console.log(antwort.status); // 200
    console.log(antwort.ok); // true
    if (antwort.ok) {
      return antwort.json(); // returns a promise with the actual resource
    }
  });

  p2.then((dataComplete) => {
    let author;
    let quote;
    /*
    dataComplete.data.forEach((message) => {
      author = message.quoteAuthor;
      quote = message.quoteText;
    });
    */
    author = dataComplete.data[0].quoteAuthor;
    quote = dataComplete.data[0].quoteText;

    console.log(dataComplete);
    console.log(quote);
    //containerQuote.append(document.createTextNode(quote));
    //containerAuthor.append(document.createTextNode(author));
    containerQuote.innerHTML = quote + '<span id="end-of-quote"></span>';
    containerAuthor.innerText = "- " + author;
  });
}

getQuote();
