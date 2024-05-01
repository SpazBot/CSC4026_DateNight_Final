import { Navigation } from './components/Navigation.jsx'
import { Form } from './Form'


// Database with key value pairs for storing questions
const questionDatabase = {
    question1: "What's your favorite movie?",
    question2: "If you could travel anywhere in the world, where would you go?",
    question3: "What is your dream job?",
    question4: "What is your favorite food?",
    question5: "If you could have any superpower, what would it be?",
};

// Database with key value pairs for storing answers. Initialized with null values.
const answerDatabase = {
    answer1: null,
    answer2: null,
    answer3: null,
    answer4: null,
    answer5: null,
};

//Styling since css is being a problem child
document.body.style.backgroundImage = "url('public/Background.png')";
document.body.style.backgroundSize = "100%";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.alignItems = "center";

/*
// Create labels and input fields dynamically
for (let i = 1; i <= 5; i++) {
    // Create label
    const label = document.createElement('label');
    label.setAttribute('for', `field${i}`);
    label.textContent = questionDatabase[`question${i}`];

    // Create input field
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', `field${i}`);
    input.setAttribute('name', `field${i}`);

    // Add line break
    const br = document.createElement('br');
    
    // Append label, input, and line break to the body
    document.body.appendChild(label);
    document.body.appendChild(br);
    document.body.appendChild(input);
    document.body.appendChild(br);
}

// Create submit button
const button = document.querySelector('button');

const submitButton = document.createElement('button');
submitButton.textContent = 'Submit Answers';

// Append button to the body
document.body.appendChild(submitButton);

// Add click event listener to the button
submitButton.addEventListener('click', function() {
    // Get the input values
    const field1Value = document.getElementById('field1').value;
    const field2Value = document.getElementById('field2').value;
    const field3Value = document.getElementById('field3').value;
    const field4Value = document.getElementById('field4').value;

    // Update answerDatabase with the input values
    answerDatabase.answer1 = field1Value;
    answerDatabase.answer2 = field2Value;
    answerDatabase.answer3 = field3Value;
    answerDatabase.answer4 = field4Value;

    // Optional: You can console log the updated answerDatabase
    console.log(answerDatabase);
});

//Validation function
function validateInput(){
  let x = document.forms["myForm"]["fname"].value;
  if (x == "" || x.length > 20) {
    alert("Invalid input");
    return false;
  }
  else{
    return x;
  }
}
*/

export default function App() {
  return (
    <main style={{fontFamily: 'serif', fontSize: '40px', textAlign: 'center'}}>
      <div>
        < Navigation />
        <Form />
      </div>
    </main>
  )
}

