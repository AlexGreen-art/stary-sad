/* Zdjęcia, których jeszcze nie ma, zamieniają się w kulturalny zastępnik
   zamiast pokazywać ikonę zepsutego obrazka. */
document.querySelectorAll(".ph img").forEach(function (img) {
  var brak = function () { img.closest(".ph").classList.add("brak"); };
  img.addEventListener("error", brak);
  if (img.complete && img.naturalWidth === 0) brak();
});

/* Kalendarz sadu */
var kalendarz = document.querySelector(".miesiace");
if (kalendarz) {
  var opis = document.querySelector(".opis-miesiaca");
  var nazwa = opis.querySelector("b");
  var tresc = opis.querySelector("p");

  var wybierz = function (btn) {
    kalendarz.querySelectorAll(".mies").forEach(function (b) {
      b.setAttribute("aria-pressed", b === btn ? "true" : "false");
    });
    nazwa.textContent = btn.dataset.pelna;
    tresc.textContent = btn.dataset.opis;
  };

  kalendarz.querySelectorAll(".mies").forEach(function (btn) {
    btn.addEventListener("click", function () { wybierz(btn); });
    btn.addEventListener("mouseenter", function () { wybierz(btn); });
  });

  var teraz = kalendarz.querySelectorAll(".mies")[new Date().getMonth()];
  if (teraz) wybierz(teraz);
}
