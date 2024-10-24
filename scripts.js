/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { isString, splitOnWhitespace } from './lib/helpers.js';

const test = isString('hæ');
console.log('test er strengur?', test);

const stringWithWhitespace = `halló
\theimur
hæ`;
const split = splitOnWhitespace(stringWithWhitespace);
console.log(split);

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const str = document.getElementById('string').value.trim();
    
    if (!str) {
      console.error("Strengur er tómur");
      return;
    }
  
    // Greina strenginn
    const longestWord = longest(str);
    const shortestWord = shortest(str);
    const reversed = reverse(str);
    const numVowels = vowels(str);
    const numConsonants = consonants(str);
    const isPalindrome = palindrome(str);
  
    // Setja niðurstöður í DOM
    document.querySelector('.input').textContent = str;
    document.querySelector('.longest').textContent = longestWord;
    document.querySelector('.shortest').textContent = shortestWord;
    document.querySelector('.vowels').textContent = numVowels;
    document.querySelector('.consonants').textContent = numConsonants;
    document.querySelector('.palindrome').textContent = isPalindrome ? 'samhverfur' : 'ekki samhverfur';
    document.querySelector('.reversed').textContent = reversed;
  
    // Sýna niðurstöður
    document.querySelector('.output').classList.remove('hidden');
  });
  
  document.querySelector('form').addEventListener('reset', function () {
    document.querySelector('.output').classList.add('hidden');
  });

  function longest(str) {
    if (typeof str !== 'string') return null;
    return str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');
  }
  
  function shortest(str) {
    if (typeof str !== 'string') return null;
    return str.split(' ').reduce((shortest, word) => word.length < shortest.length ? word : shortest, str);
  }
  
  function reverse(str) {
    if (typeof str !== 'string') return null;
    return str.split('').reverse().join('');
  }
  
  function vowels(str) {
    if (typeof str !== 'string') return 0;
    const matches = str.match(/[aeiouáéíóúýöæ]/gi);
    return matches ? matches.length : 0;
  }
  
  function consonants(str) {
    if (typeof str !== 'string') return 0;
    const matches = str.match(/[bdðfghjklmnprstvxþ]/gi);
    return matches ? matches.length : 0;
  }
  
  function palindrome(str) {
    if (typeof str !== 'string') return false;
    const cleaned = str.replace(/[^a-zA-Záéíóúýöæ]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
  }
