export default function CountdownBox({ num, label }) {
  return (
    <div className="countdown-box">
      <div className="countdown-num">{String(num).padStart(2, '0')}</div>
      <div className="countdown-label">{label}</div>
    </div>
  );
}
