const paragraphContainer = document.querySelectorAll("p");

setTimeout(updateBananas, 3000);

function updateBananas() {
  let formattedParagraph = changeToBananas(paragraphContainer[0].innerText);
  paragraphContainer[0].innerText = formattedParagraph;

  let formattedParagraph2 = changeToBananas(paragraphContainer[1].innerText);
  paragraphContainer[1].innerText = formattedParagraph2;
}

function changeToBananas(input) {
  let changeSmallThe = input.replace("the", "banana");
  let changeLargeThe = changeSmallThe.replace("The", "Banana");

  return changeLargeThe;
}
