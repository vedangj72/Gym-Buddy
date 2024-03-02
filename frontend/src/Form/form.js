import { useState } from "react";

export default function Dataform() {
  const [title, settitle] = useState("");
  const [reps, setreps] = useState("");
  const [load, setload] = useState("");
  const [error, seterror] = useState(null);

  function handleTitle(e) {
    settitle(e.target.value);
  }

  function handleReps(e) {
    setreps(e.target.value);
  }

  function handleLoad(e) {
    setload(e.target.value);
  }

  async function handleclick(e) {
    e.preventDefault();
    const workout = { title, reps, load }; // Use an object for the workout data
    const response = await fetch("/work", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json", // Correct content type
      },
    });
    const json = await response.json();
    if (!response.ok) {
      seterror(json.error);
    }
    if (response.ok) {
      settitle("");
      setreps("");
      setload("");
      seterror(null);
      alert("New workout added");
    }
  }

  return (
    <div className="container" mt-3>
      <h1 className=" text-center text-success">
        Add the workout that you have done
      </h1>
      <form
        className="container mt-5"
        style={{
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <div className="mb-3">
          <label className="form-label text-start">Title:-</label>
          <input
            type="text"
            onChange={handleTitle}
            value={title}
            className="form-control"
            placeholder="Enter the workout title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Repetition:-</label>
          <input
            type="number"
            onChange={handleReps}
            value={reps}
            className="form-control"
            placeholder="enter the repetition"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Load (in Kg):-</label>
          <input
            type="number"
            onChange={handleLoad}
            value={load}
            className="form-control"
            placeholder="enter the load you lift"
          />
        </div>
        <div>
          <button className="btn btn-primary w-20 m-2" onClick={handleclick}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
