# Stary Sad — strona demonstracyjna

Fikcyjne siedlisko, zbudowane jako przykład realizacji do portfolio.
Miejsce, ceny, nazwiska i numer telefonu są zmyślone.

## Co tu jest

```
index.html     strona główna (hero, o miejscu, kalendarz sadu, pokoje, okolica, galeria, kontakt)
pokoje.html    trzy pokoje, wyposażenie, tabela zasad i cen
kontakt.html   dojazd samochodem / pociągiem / rowerem, dane kontaktowe
styl.css       wspólny arkusz stylów
skrypt.js      kalendarz sadu + zastępniki brakujących zdjęć
img/           zdjęcia
```

Bez frameworków, bez systemu budowania. Jedyna rzecz z zewnątrz to fonty Google
(Petrona + Karla) — jeśli chcesz stronę całkowicie offline, usuń trzy linijki
`<link>` z `<head>` każdej podstrony, a przeglądarka użyje zapasowych krojów.

## Publikacja na GitHub Pages

1. Nowe repozytorium, np. `stary-sad`.
2. Wgraj całą zawartość tego folderu do głównego katalogu repo.
3. Settings → Pages → Source: `Deploy from a branch`, gałąź `main`, folder `/ (root)`.
4. Po minucie strona jest pod `https://TWOJANAZWA.github.io/stary-sad/`.

## Zdjęcia

Wszystkie dwanaście zdjęć jest na miejscu, w folderze `img/`. Są wygenerowane,
skompresowane (jakość 78, progresywny JPEG) i mają wpisane wymiary w kodzie,
żeby układ nie skakał przy wczytywaniu. Cała strona waży ok. 2,8 MB.

Podmiana: wystarczy wgrać nowy plik pod tą samą nazwą i w tych samych
proporcjach. Lista proporcji jest w pliku BRIEF-ZDJEC.md.

## Element charakterystyczny

„Kalendarz sadu" na stronie głównej to dwanaście miesięcy z krótkim opisem
tego, co się w sadzie akurat dzieje. Wysokość słupka pokazuje, jak dużo się
wtedy dzieje. Po wejściu na stronę podświetla się bieżący miesiąc.

To zamiast standardowego zdania „u nas jest pięknie o każdej porze roku".
