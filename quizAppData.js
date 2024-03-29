'use strict';
const COUNTRYDATA = 
    /**
     * 
     */
   [{questions:'What is the capital of Djibouti?', 
     answers:['Djibouti', 'Yerevan', 'Dili', 'Cairo'], 
     correctAnswer:'Djibouti', 
     icon:'url(https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg)', 
     alt:'Flag of Djibouti'}, 
    /**
     * 
     */
    {questions: 'What is the capital of France?',
     answers:['Paris', 'Sofia', 'Prague', 'Montpelier' ], 
     correctAnswer:'Paris', 
     icon:'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png', 
     alt:'Flag of France'},
    /**
     * 
     */
     {questions: 'What country has the capital of Georgetown?', 
     answers:['Guyana', 'Uruguay', 'Cayenne', 'Madagascar'], 
     correctAnswer:'Guyana', 
     icon:'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg', 
     alt:'Flag of Guyana'},
    /**
     * 
     */
    {questions: 'What country has the capital of Nuuk?', 
     answers:['Greenland', 'Faroe Islands', 'Luxembourg', 'Ivory Coast'], 
     correctAnswer:'Greenland', 
     icon:'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Greenland.svg', 
     alt:'Flag of Grenland'},
    /**
     * 
     */
    {questions: 'What is the capital of Greece?', 
     answers:['Athens', 'Rome', 'Skopje', 'Mykonos'], 
     correctAnswer:'Athens', 
     icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/2000px-Flag_of_Greece.svg.png', 
     alt:'Flag of Greece'}];




const newBackground = [
  {icon:'', alt:'Djibouti'},
  {icon:'', alt:'French'},
  {icon:'', alt:'Guyana'},
  {icon:'', alt:'Greenland'},
  {icon:'', alt:'Greece'}
];