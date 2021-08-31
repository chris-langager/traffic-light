import { useEffect, useState } from 'react';

const RED = `hsl(353, 97%, 53%)`;
const YELLOW = `hsl(46, 100%, 47%)`;
const GREEN = 'hsl(124, 81%, 53%)';

export function TrafficLight() {
  const [active, setActive] = useState('red');

  const nextLight = (prev) =>
    prev === 'red' ? 'green' : prev === 'green' ? 'yellow' : 'red';

  // useEffect(() => {
  //   setInterval(() => {
  //     setActive((prev) =>
  //       prev === 'red' ? 'green' : prev === 'green' ? 'yellow' : 'red'
  //     );
  //   }, 2000);
  // }, []);

  const buttonClicked = () => {
    setActive(nextLight(active));
  };

  return (
    <div className="traffic-light">
      <div className="lights">
        <Light color={RED} on={active === 'red'} />
        <Light color={YELLOW} on={active === 'yellow'} />
        <Light color={GREEN} on={active === 'green'} />
      </div>
      <button onClick={buttonClicked}>Change!</button>
    </div>
  );
}

//Feel free to check out the Light component, but you shouldn't need to modify anything here.
function Light({ color = 'hsl(0, 0%, 50%)', on = false } = {}) {
  return (
    <div
      className="light"
      style={{
        backgroundColor: color,
        boxShadow: on ? `0px 0px 10px 5px ${color}` : '',
        filter: `brightness(${on ? '1' : '.35'})`,
      }}
    />
  );
}
