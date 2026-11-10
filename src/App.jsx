import { useState, useEffect } from "react";
import { tabs } from "./data";
import Tab from "./components/Tab";
import TabContent from "./components/TabContent";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState(
    Number(localStorage.getItem("activeTab")) || 1
  );

  const selected = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <div className="app">
      <div className="header">
        <h1>Tabs Component with React</h1>

        <div className="tabs">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              title={tab.title}
              isActive={tab.id === activeTab}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
      </div>

      <TabContent title={selected.title} content={selected.content} />
    </div>
  );
}

export default App;