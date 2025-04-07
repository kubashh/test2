export default function () {
  return (
    <div>
      <h1>Route1</h1>
      <button onClick={() => (location.href = "http://localhost:5173/r2")}>
        Go to Route2
      </button>
    </div>
  )
}
