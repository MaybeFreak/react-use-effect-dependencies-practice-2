import { useEffect } from "react";
import { useState } from "react";

function StarshipsListItem(props) {
  const { starship } = props;

  const [listOfPliots, setListOfPilots] = useState([])

  console.log({ starship });

  // useEffect(() => {
  //   fetch(starship.pilots[0])
  //     .then(res=>res.json())
  //     .then(data=>setPilot(data))
  // },[starship])

  useEffect(() => {
    starship.pilots.forEach((pilot)=> {
      fetch(pilot)
        .then(res=>res.json())
        .then(data=>setListOfPilots(listOfPliots => [...listOfPliots, data]))
    })
  }, [starship])

  return (
    <li>
      {starship.name} -Pilots:
      <ul>
        {listOfPliots.map((pilot, index) => (
          <li key={index}>{pilot.name}</li>
        ))}
        {listOfPliots.length === 0 && <li>N/A</li>}
      </ul>
    </li>
  );
}

export default StarshipsListItem;
