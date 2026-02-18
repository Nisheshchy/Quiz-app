#  Quiz App (React)

A premium, interactive quiz platform designed to provide a seamless learning and testing experience.


##  Features

- **Interactive Quiz Interface**: Clean and intuitive layout for answering multiple-choice questions.
- **Instant Validation**: Real-time feedback on your answers (Green for Correct, Red for Incorrect).
- **Auto-Highlight**: Automatically shows the correct answer if you pick the wrong one.
- **Final Scoring**: Comprehensive result screen showing your total score out of the available questions.
- **State Persistence**: Handles quiz flow efficiently using React Hooks (`useState`, `useRef`).
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **Glassmorphism UI**: Uses modern CSS filters and gradients for a high-end feel.

##  Tech Stack

- **Frontend**: [React.js](https://reactjs.org/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS3 (Custom Variables, Flexbox, Animations)
- **Icons/Fonts**: Google Fonts (Poppins)

##  Project Structure

```text
src/
 ├── assets/             # Data files
 │    └── data.js       # Quiz questions library
 ├── Components/
 │    └── Quiz/         # Logic and Styling for the Quiz
 │         ├── Quiz.jsx
 │         └── Quiz.css
 ├── App.jsx            # Main entry component
 └── index.css          # Global styles & Design Tokens
```

##  Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

##  How to Use

1. **Start**: Answer the displayed questions by clicking on one of the four options.
2. **Review**: Visual feedback instantly tells you if you're right. 
3. **Progress**: Click 'Next' to move to the next challenge.
4. **Finish**: Check your final score on the result card and click 'Reset' to try again!

## Author
- Nishesh Chaudhary

