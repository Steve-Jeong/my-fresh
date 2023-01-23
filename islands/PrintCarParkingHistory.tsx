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
  const [carLocations, setCarLocations] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function readFromDB() {
      setLoading(true);
      const res = await fetch("/api/readCarLocation")
      if(res.status === 404){
        console.log('ReadCarLocation res.status === 404')
      } else {
        try {
          const carArray = await res.json();
          // console.log('carArrary in PrintCarParkingHistory : ', carArray);
          // console.log('before carLocations in PrintCarParkingHistory : ', carLocations);
          setCarLocations((prev)=>{
            console.log('before sort : ', carArray);
            carArray.sort((a,b)=>{if(Date.parse(a.saveDate) - Date.parse(b.saveDate) > 0) return -1})
            console.log('after sort : ', carArray);
            setLoading(false);
            return [...carArray]
          })
          console.log('after carLocations : ', carLocations)
        } catch(err) {
          console.log('err in PrintCarParkingHistory : ', err);
        }
      }
      setLoading(false)
    }
    readFromDB();
  }, [count.value]);

  return (
    <div class="flex flex-1">
      <div class="flex-1 max-w-screen-md mt-2 p-2 mx-auto border-solid border-4 border-indigo-600 rounded">
        <div class='flex justify-between'>
          <p class="my-2 text-xl text-blue-600 font-bold">
            차량 주차 위치 이력
          </p>
          <p class="mr-4 text-lg text-red-500">{loading? 'Loading ...' : null}</p>
        </div>
        <div class="flex flex-col items-center" id="printHistory">
          {/* Car Parking Location : {carParkLocation.value.location} */}
          {/* <div>count : {count.value} </div> */}
          {/* {carLocations.map((car)=><div>{JSON.stringify(car)}</div>)} */}
          {carLocations.map((car, index)=><div class="mt-2">{index} : {new Date(car.saveDate).toLocaleString("ko-Kr")} : {car.location}</div>)}
        </div>
      </div>
    </div>
  );
}
