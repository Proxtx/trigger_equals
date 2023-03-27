const add = triggerGui.getElementsByClassName("add")[0];
add.addEventListener("click", async () => {
  await new Promise((r) => setTimeout(r, 500));
  let e = document.createElement("trigger-config");
  e.classList.add("triggerConfig");
  triggerGui.appendChild(e);
});

getTriggerConfiguration(async () => {
  const triggerConfig = triggerGui.getElementsByClassName("triggerConfig");
  let configData = [];
  let text = "";
  for (let config of triggerConfig) {
    let genC = await config.component.getTriggerConfiguration();
    text += " equal to " + genC.text;
    configData.push(genC);
  }

  text = text.substring(5);

  return {
    text: text,
    data: configData,
  };
});
