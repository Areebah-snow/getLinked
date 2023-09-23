
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Intro from './components/theBigIdea/Intro';
import Rules from './components/RandG/Rules';
import Criteria from './components/criteria/Criteria';
import FAQAccordion from './components/faq/FAQAccordion';
import Timeline from './components/timeline/Timeline';

const faqData = [
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What happens if I need help during the hackathon?",
    answer: "You can install React using npm or yarn.",
  },
  {
    question: "What happens if I don't have an idea for a project?",
    answer: "Tailwind CSS is a utility-first CSS framework.",
  },
  {
    question: "Can I join a team or do I have to come with one?",
    answer: "You can configure Tailwind CSS by creating a configuration file.",
  },
  {
    question: "What happens after the hackathon ends?",
    answer: "You can configure Tailwind CSS by creating a configuration file.",
  },
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: "You can configure Tailwind CSS by creating a configuration file.",
  },



];


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Intro/>
      <Rules/>
      <Criteria/>

      <div className=" min-h-screen p-8">
      
      <FAQAccordion faqData={faqData} />
      </div>
      <Timeline/>
    </div>
  );
}

export default App;
