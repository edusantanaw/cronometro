import { useEffect, useState } from "react";
import { Global } from "./styles/Global";
import { Container } from "./styles/styles";

function App() {
  const [now, setNow] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [mins, setMins] = useState<string>('00');
  const [seconds, setSeconds] = useState<string>('00');
  const [hours, setHours] = useState<string>('00');
  const [att, setAtt] = useState(Date.now)

  useEffect(() => {
    let getNow: any = localStorage.getItem("@Now");
    getNow = JSON.parse(getNow);
    if (getNow) {
      getNow = parseInt(getNow);
      setNow(getNow);
    }
  }, []);

  const add = () => {
    console.log("here");
    setCount(count + 1000000);

    if (now === 0) {
      const date = Date.now();
      localStorage.setItem("@Now", JSON.stringify(date));
      setNow(date);
    }
  };

  console.log(att)
  const getNow = Date.now();
  const time = now + count;
  useEffect(()=>{
    if (now > 0) {
      if (time - getNow !== 0 && time - getNow > 0) {
        const countdown = time - getNow;
        const hoursv = Math.floor(
          (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(hoursv.toString());
        const min = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
        setMins( min.toString());
        const second = Math.floor((countdown % (1000 * 60)) / 1000);
        setSeconds(second.toString());
      }
    }
  },[att])

  setTimeout(()=>{
    setAtt(Date.now())
  }, 1000)

  return (
    <>
      <Global />
      <Container>
        <h1>stopwatch</h1>
        <div className="stopwatch">
          <div>
            <span>{hours}</span>
            <p>Hours</p>
          </div>
          <div>
            <span>{mins}</span>
            <p>Minutes</p>
          </div>
          <div>
            <span>{seconds}</span>
            <p>Seconds</p>
          </div>
        </div>
        <button onClick={() => add()}>acrecent</button>
      </Container>
    </>
  );
}

export default App;
