document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('quiz-form');
  const submitBtn = document.getElementById('submit-btn');
  const resetBtn = document.getElementById('reset-btn');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    validateQuiz();
  });

  resetBtn.addEventListener('click', function() {
    form.reset();
    document.getElementById('result').innerHTML = '';
  });

  function validateQuiz() {
    // Retrieve user inputs from the form
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    const q6 = document.querySelector('input[name="q6"]:checked');
    const q7 = document.querySelector('input[name="q7"]:checked');

    //  validation logic 
    if (q1 && q2 && q3 && q4 && q5 && q6 && q7) {
      // Calculate the score based on the user inputs
      const score = calculateScore(q1.value, q2.value, q3.value, q4.value, q5.value, q6.value, q7.value);
      // Display the result
      displayResult(score);
    } else {
      // If any question is not answered, show an error message
      document.getElementById('result').innerHTML = '<p>Please answer all questions.</p>';
    }
  }

  function calculateScore(q1, q2, q3, q4, q5, q6, q7) {
    // Convert string values to numbers
    q1 = parseInt(q1);
    q2 = parseInt(q2);
    q3 = parseInt(q3);
    q4 = parseInt(q4);
    q5 = parseInt(q5);
    q6 = parseInt(q6);
    q7 = parseInt(q7);

    // Assign weights to each answer
    const weights = {
        q1: { '1': 4, '2': 3, '3': 2, '4': 1 },
        q2: { '1': 4, '2': 3, '3': 2, '4': 1 },
        q3: { '1': 4, '2': 3, '3': 2, '4': 1 },
        q4: { '1': 4, '2': 3, '3': 2, '4': 1 },
        q5: { '1': 4, '2': 3, '3': 2, '4': 1 },
        q6: { '1': 4, '2': 3, '3': 2, '4': 1 },
        q7: { '1': 1, '2': 2, '3': 3, '4': 4 }
    };

    // Check if any of the parsed values are NaN
    if (isNaN(q1) || isNaN(q2) || isNaN(q3) || isNaN(q4) || isNaN(q5) || isNaN(q6) || isNaN(q7)) {
        return NaN; // Return NaN if any answer is not a number
    }

    // Calculate the total score 
    const score = q1 + q2 + q3 + q4 + q5 + q6 + q7;

    return score;
}


  function displayResult(score) {
    let resultMessage = '';
    if (!isNaN(score)) {
      if (score >= 28) {
        resultMessage = 'You really love social media!';
      } else if (score >= 21) {
        resultMessage = 'You like social media, but you have some reservations.';
      } else if (score >= 14) {
        resultMessage = 'You have a neutral stance on social media.';
      } else if (score >= 7) {
        resultMessage = 'You\'re not a big fan of social media.';
      } 
      document.getElementById('result').innerHTML = '<p>Your score is: ' + score + '. ' + resultMessage + '</p>';
    } else {
      document.getElementById('result').innerHTML = '<p>Please select valid answers.</p>';
    }
  }
});


function navigatePortfolio() {
  var dropdown = document.getElementById("portfolio-dropdown");
  var selectedPage = dropdown.value;
  if (selectedPage) {
    window.location.href = selectedPage;
  }
}
