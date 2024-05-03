//Imports for nav and form components
import { Header } from './components/Header.jsx'
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

export default function App() {
  return (
    <main>
      <div>
        <Header />
        < Navigation />
        < Form />
      </div>
    </main>
  )
}

