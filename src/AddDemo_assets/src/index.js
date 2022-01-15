import { AddDemo } from "../../declarations/AddDemo";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with AddDemo actor, calling the greet method
  const greeting = await AddDemo.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
