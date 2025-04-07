export default function () {
  return (
    <div>
      <h1>Route2</h1>
      <button onClick={() => (location.href = "http://localhost:5173")}>
        Go to Route1
      </button>
    </div>
  )
}
