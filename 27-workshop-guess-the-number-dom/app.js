/**
 * Guess the number - DOM Edition
 *
 * Skriv om ”gissa talet” till att ta emot och visa utfall i DOM. Använd
 * formulär-fält för att ta emot input från användaren, och när formuläret
 * skickas (submits) så jämför det gissade talet mot svaret och visar utfallet
 * i DOM istället för alert()-rutor.
 *
 * STEG 1
 * En input-fält där man kan gissa på ett tal. En knapp för att gissa.
 *
 * STEG 1.1
 * Visa resultatet i en alert.
 *
 * STEG 1.2
 * Visa om resultatet var rätt eller inte i ett HTML-element.
 * (T.ex. ”Du gissade rätt!” eller ”Du gissade fel!”)
 * Ska så klart uppdateras varje gång användaren gissar.
 *
 * STEG 2
 * Visa om det gissade talet var för högt eller lågt i ett HTML-element.
 *
 * STEG 3
 * Visa antalet gissningar hittills i ett HTML-element.
 * Ska så klart också uppdateras varje gång användaren gissar.
 *
 * STEG 4
 * Skapa en knapp för att starta om spelet (ett nytt tal ska slumpas fram och
 * antalet gissningar ska nollställas).
 *
 */

const getRandomNumber = (max = 10) => {
	return Math.ceil( Math.random() * max );
}
