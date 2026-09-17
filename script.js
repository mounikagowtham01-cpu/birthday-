// Birthday Surprise Website 💙

const openBtn = document.getElementById("openBtn");
const surprise = document.getElementById("surprise");
const typingText = document.getElementById("typingText");

openBtn.addEventListener("click", () => {
  surprise.classList.add("show");

  document.querySelector(".opening").style.display = "none";

  typeMessage();
  createHearts();
});

const message =
  "Today is your birthday, and I woke up with so much excitement in my heart.❤‍🩹 I want to tell you so many things, but I promise not to spoil your happiest day🤎. Forgive me for texting--my soul just wouldn't let me stay silent today. Happy birthday madam 🥰 ... #keep smiling... 💙";

function typeMessage() {
  typingText.innerHTML = "";
  let i = 0;

  function type() {
    if (i < message.length) {
      typingText.innerHTML += message.charAt(i);
      i++;
      setTimeout(type, 35);
    }
  }

  type();
}

function createHearts() {
  setInterval(() => {
    const heart = document.createElement("span");

    heart.innerHTML = Math.random() > 0.5 ? "💙" : "✨";
    heart.className = "floating-heart";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration =
      4 + Math.random() * 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8000);
  }, 700);
}
