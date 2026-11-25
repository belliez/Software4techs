const signal = [
  27, 28, 29, 26, 28, 32, 30, 29, 29, 31, 32, 28, 27, 29, 30, 31, 29, 28, 0, 0,
  0, 0, 33, 29, 28, 28, 30, 32, 29, 31, 30, 28, 29, 27, 28, 30, 29, 31, 30, 28,
  27, 30,
];
export default function Bench() {
  return (
    <figure className="bench">
      <div className="consolehead">
        <span>
          <i /> DIAGNOSTICS
        </span>
        <span>EXAMPLE SESSION</span>
      </div>
      <div className="consolebody">
        <div className="monitorhead">
          <div>
            <small>NETWORK MONITOR</small>
            <h2>Connectivity log</h2>
          </div>
          <span className="online">● Online</span>
        </div>
        <div
          className="scope"
          role="img"
          aria-label="Illustrative connection log showing a short dropout followed by recovery"
        >
          <div className="bars">
            {signal.map((n, i) => (
              <b
                key={i}
                className={n ? "" : "drop"}
                style={{ height: (n ? 32 + n * 0.95 : 4) + "%" }}
              />
            ))}
          </div>
        </div>
        <div className="ruler">
          <span>09:00</span>
          <span>09:10</span>
          <span>09:20</span>
        </div>
        <div className="event">
          <span className="dot amber" />
          09:09 <strong>Connection lost</strong>
        </div>
        <div className="event">
          <span className="dot" />
          09:11 <strong>Connection restored</strong>
        </div>
      </div>
      <figcaption>
        Technician Toolbox <span>/</span> Network diagnostics
      </figcaption>
    </figure>
  );
}
