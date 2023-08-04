import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [n, setN] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Number.isInteger(n) || n < 1) {
      alert("Please enter a valid positive integer for n.");
      return;
    }

    await fetch('api/calculateFibonacci', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({n}),
    });

    router.push(`/results?n=${n}`);

  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Enter an integer:
            <br/>
            <input
              type = "number"
              value = {n}
              onChange={(e) => setN(parseInt(e.target.value))}
              required />
            <br/>
          </label>
          <button type="submit">Generate Fibonacci Sequence</button>
        </form>
      </div>
    </>
  );
  
}