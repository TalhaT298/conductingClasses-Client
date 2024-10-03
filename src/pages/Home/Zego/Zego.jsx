import React, { useState } from "react";

const Zego = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter ypur name"
        />
        <button>Join</button>
      </div>
    </div>
  );
};

export default Zego;
