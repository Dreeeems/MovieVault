const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

async function createWindow() {
  const isDev = (await import("electron-is-dev")).default;

  console.log("Creating window...");

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  const startURL = isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "build/index.html")}`;

  mainWindow.loadURL(startURL);

  mainWindow.on("closed", () => {
    console.log("Window closed.");
    mainWindow = null;
  });
}

app.on("ready", () => {
  console.log("App is ready.");
  createWindow();
});

app.on("window-all-closed", () => {
  console.log("All windows closed.");
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  console.log("App activated.");
  if (mainWindow === null) {
    createWindow();
  }
});
