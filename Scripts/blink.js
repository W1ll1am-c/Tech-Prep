const updates = [
    "Initializing update log...",
    "Patch 0.5.0 Applied!",
    "Patch Notes:",
    "Added mobile views... Kinda broken, but useable",
    "Holocards: The Game is still WIP... Game is in the testing phase!",
    " ",
    "You are logged in as 'UPDATE'   --Type 'fetch' for current engine version.   --Type exit to quit.", 
    "Holocards | MMXXV"
  ];
  
  const fetchArt = ` 
 ───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄─── Dizz HTML Engine V0.1.0 (Sleepy Bear)
 ───█▒▒░░░░░░░░░▒▒█─── Last Updated Mon Jan 27 14:52:34
 ────█░░█░░░░░█░░█──── Logged in as 'UPDATE'
 ─▄▄──█░░░▀█▀░░░█──▄▄─ 
 █░░█─▀▄░░░░░░░▄▀─█░░█ Don't wake the bear.

 update ttyl --Type 'exit' to quit.
  `;
  
  const bomboclat = 'Bombo.. and a rasclat!'

  const help = 'Commands [insert commands here]'

  const terminalOutput = document.getElementById("terminal-output");
  const terminalInput = document.getElementById("terminal-input");
  
  // Disable input initially
  terminalInput.disabled = true;

  
  function displayUpdates() {
    let index = 0;
    const interval = setInterval(() => {
      if (index < updates.length) {
        terminalOutput.textContent += `${updates[index]}\n`;
        terminalOutput.scrollTop = terminalOutput.scrollHeight; // Scroll to bottom
        index++;
      } else {
        clearInterval(interval);
        enableInput();
      }
    }, 1500);
  }
  
  function enableInput() {
    terminalInput.disabled = false;
    terminalInput.focus();
  }
  
  // Handle user input
  terminalInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const command = terminalInput.value.trim();
      terminalOutput.textContent += `update@localhost:$ ${command}\n`;
      terminalInput.value = "";
  
      if (command === "fetch") {
        terminalOutput.textContent += `${fetchArt}\n`;
      } else if (command === "exit") {
        window.location.href = "index.html";
      } else {
        terminalOutput.textContent += "Command not found, I'm not a miracle worker.\n";
      }
  
      terminalOutput.scrollTop = terminalOutput.scrollHeight; // Scroll to bottom
    }
  });
  

  window.onload = displayUpdates;