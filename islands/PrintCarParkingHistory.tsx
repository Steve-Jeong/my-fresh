import { signal } from "@preact/signals";
import { useState, useEffect } from "preact/hooks";
import { carParkLocation, count } from "./PutCarLocation.tsx";

export const oneTime = signal(true)

type CarLocationType = {
  location:string;
  username:string;
  saveDate:Date;
}

export default function PrintCarParkingHistory() {
  const [carLocations, setCarLocations] = useState<CarLocationType[]>([{}])
  useEffect(() => {
    async function readFromDB() {
      const res = await fetch("/api/readCarLocation");
      console.log('res in PrintCarParkingHistory : ', res)
      if(res.status === 404){
        console.log('PrintCarLocation res.status === 404')
      } else {
        try {
          const data = await res.json();
          console.log('PrintCarLocation useEffect data : ', data);
          const carArray = Array.from(data)
          console.log('carArrary in PrintCarParkingHistory : ', carArray);
          setCarLocations(carArray)
          console.log('carLocations : ', carLocations)
        } catch(err) {
          console.log('err in PrintCarParkingHistory : ', err);
        }
      }

      // const data = await res.json()   // this line makes error
    }
    readFromDB()
  }, [oneTime]);

  return (
    <div class="flex flex-1">
      <div class="flex-1 max-w-screen-md mt-2 p-2 mx-auto border-solid border-4 border-indigo-600 rounded">
        <p class="my-2 text-xl text-blue-600 font-bold">
          차량 주차 위치 이력
        </p>
        <div class="flex flex-col justify-center" id="printHistory">
          Car Parking Location : {carParkLocation.value.location}
          {/* <div>count : {count.value} </div> */}
        </div>
      </div>
    </div>
  );
}
