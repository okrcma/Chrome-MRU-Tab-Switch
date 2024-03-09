let lastTabId: number;
let currentTabId: number;

chrome.tabs.onActivated.addListener((activeInfo) => {
  lastTabId = currentTabId;
  currentTabId = activeInfo.tabId;
});

chrome.commands.onCommand.addListener((command) => {
  console.log("Command received:", command);
  if (command === "switch-to-previous-tab") {
    console.log("Switching tabs...");
    if (lastTabId != null) {
      console.log("Current tab ID:", currentTabId);
      console.log("Last tab ID:", lastTabId);
      chrome.tabs.update(currentTabId, { active: false });
      chrome.tabs.update(lastTabId, { active: true });
    }
  }
});

// TODO make it work for each window separately
