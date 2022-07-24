/* Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
The Database
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
Possible invalid inputs include:

IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
IP_ADDRESS_NOT_FOUND - ip address not in the database
IP_ADDRESS_REQUIRED - no ip address was supplied */


/* PREP
Parameter:
  a string of a lowercase name of a language
  will it ever be uppercase?
  will it ever be empty?
  is it always a string? - can it be a number, float, boolean, other data types
  can also take in 3 specific capitalize strings

Return:
  returns back a string depending on the language, stored in the object and a specific string

Example:
  greet4('english') => 'Welcome'
  greet4('czech') => 'Vitejte'

Pseudo code:
  store the languages into a object
  if database contains the language argument
  return it
  if not return default english

  
 */

function greet4(language) {
  const database = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
  }

  if (database[language]) {
    return database[language]
  } else {
    return database.english
  }

}


console.log(greet4('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
console.log(greet4('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");
console.log(greet4('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");



