import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import React, { useState } from "react";

function App() {
  let items = ["New York", "London", "Paris", "Berlin", "Tokyo"];

  const handleSelectItem = (item: string) => {
    setAlertVisibility(true);
    setAlertMessage(`You clicked on ${item}.`);
    console.log(item);
  };

  const [alertMessage, setAlertMessage] = useState("");
  const [alertVisbility, setAlertVisibility] = useState(false);

  return (
    <>
      <div>
        {alertVisbility && (
          <Alert onClose={() => setAlertVisibility(false)}>
            {alertMessage}
          </Alert>
        )}
      </div>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
}

export default App;
