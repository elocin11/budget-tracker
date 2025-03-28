import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Request permission to send notifications
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted");
        } else {
          console.log("Notification permission denied");
        }
      });
    }
  }, []);

  const triggerNotification = () => {
    if ("Notification" in window) {
      console.log("supported", Notification.permission);
      if (Notification.permission === "granted") {
        // Show notification
        const options = {
          body: "This is a static push notification!",
          icon: "localhost:4173/public/icons/icon-32x32.png", // Optional: Specify a custom icon
          badge: "localhost:4173/public/icons/icon-32x32.png", // Optional: Specify a custom badge
        };

        new Notification("Static Push Notification", options);
      } else {
        console.log("Notification permission not granted");
      }
    } else {
      console.log("Notification API is not supported in this browser");
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={triggerNotification}>Trigger Push Notification</button>
    </>
  );
}

export default App;
