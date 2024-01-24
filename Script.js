  // Array of phrases to type
  const phrases = ["Greetings, I'm Himanshu Kumar, a dedicated Software Engineer and proficient Front-End Developer. My passion for crafting captivating websites extends beyond the confines of my professional role, as I find joy in dedicating my spare time to web development. Alongside my proficiency in Front-End Development, I bring valuable expertise in DevOps, amplifying my ability to deliver seamless and efficient solutions."];

  // Function to simulate typing effect
  function typeText(element, text, speed, index) {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(() => typeText(element, text, speed, index), speed);
    }
  }

  // Function to initiate the typing effect for each phrase
  function startTyping() {
    const container = document.getElementById("typing-container");

    phrases.forEach((phrase, index) => {
      setTimeout(() => {
        container.innerHTML = ''; // Clear previous text
        typeText(container, phrase, 50, 0);
      }, index * 3000); // Adjust timing as needed
    });
  }

  // Call the function when the page loads
  window.onload = startTyping;


  
