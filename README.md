#  Quiz App (React)

A premium, interactive quiz platform designed to provide a seamless learning and testing experience with a focus on Computer Science fundamentals.

##  Features

- **25+ Comprehensive Questions**: Curated library covering Hardware, Networking, Web Dev, Algorithms, and Data Structures.
- **Detailed Explanations**: Every question includes a deep-dive explanation that appears after answering, turning every test into a learning opportunity.
- **Interactive Quiz Interface**: Clean and intuitive layout for answering multiple-choice questions with smooth transitions.
- **Instant Validation**: Real-time feedback on your answers (Green for Correct, Red for Incorrect).
- **Auto-Highlight**: Automatically shows the correct answer if you pick the wrong one.
- **Final Scoring**: Comprehensive result screen showing your total score out of the available questions.
- **Glassmorphism UI**: High-end design using modern CSS filters, gradients, and micro-animations.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.

##  Tech Stack

- **Frontend**: [React.js](https://reactjs.org/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS3 (Custom Design Tokens, Flexbox, Keyframe Animations)
- **Fonts**: Google Fonts (Poppins / Inter)

##  Project Structure

```text
src/
 ├── assets/             # Data files
 │    └── data.js       # Quiz questions library (25+ items with explanations)
 ├── Components/
 │    └── Quiz/         # Logic and Styling for the Quiz
 │         ├── Quiz.jsx # Core logic for selection, scoring, and explanation display
 │         └── Quiz.css # Premium styling and animations
 ├── App.jsx            # Main app container
 └── index.css          # Global styles, variables, and typography
```

##  Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nisheshchy/Quiz-app.git
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

1. **Answer**: Click on one of the four options for the displayed question.
2. **Learn**: Once answered, a **Detailed Explanation** box appears to help you understand the concept better.
3. **Progress**: Click 'Next' to move to the next challenge.
4. **Finish**: Review your final performance on the score card and click 'Reset' to attempt the quiz again!

##  Author
- **Nishesh Chaudhary**

