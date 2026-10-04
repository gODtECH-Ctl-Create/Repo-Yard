const steps = {
  working: {
    title: "You edited a file locally.",
    copy: "The change exists on your computer, but Git has not staged or committed it yet.",
    command: "git status"
  },
  staged: {
    title: "You staged the change.",
    copy: "Git now knows which changes you want included in the next commit.",
    command: "git add <file>"
  },
  committed: {
    title: "You created a commit.",
    copy: "Your local repository now has a saved snapshot with a message explaining the change.",
    command: 'git commit -m "docs: improve the lesson"'
  },
  pushed: {
    title: "You pushed the branch.",
    copy: "Your commit has moved from your computer to the remote repository on GitHub.",
    command: "git push -u origin feat/my-change"
  },
  review: {
    title: "You opened a Pull Request.",
    copy: "The change is now a proposal that teammates can inspect, discuss, test and improve.",
    command: "Pull Request → Review"
  },
  merged: {
    title: "The change reached main.",
    copy: "The reviewed work is now part of the shared branch. Time to start the next mission.",
    command: "Merge → main"
  }
};

const buttons = document.querySelectorAll("[data-step-button]");
const nodes = document.querySelectorAll("[data-step]");
const title = document.getElementById("step-title");
const copy = document.getElementById("step-copy");
const command = document.getElementById("step-command");

function setStep(step) {
  const data = steps[step];
  if (!data) return;
  title.textContent = data.title;
  copy.textContent = data.copy;
  command.textContent = data.command;

  buttons.forEach(button => {
    button.classList.toggle("active", button.dataset.stepButton === step);
  });

  nodes.forEach(node => {
    node.classList.toggle("node-active", node.dataset.step === step);
  });
}

buttons.forEach(button => {
  button.addEventListener("click", () => setStep(button.dataset.stepButton));
});
