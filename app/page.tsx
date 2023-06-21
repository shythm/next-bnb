"use client";

import { useState } from "react";

export default function Page() {
  const [data, setData] = useState("");

  console.log(data);

  return (
    <div>
      <p>Hello, world!</p>
      <form>
        <input
          type="text"
          name="data"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button type="submit">Call server action</button>
      </form>
    </div>
  );
}
