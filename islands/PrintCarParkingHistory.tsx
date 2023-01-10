import { carParkLocation } from "./PutCarLocation.tsx";

export default function PrintCarParkingHistory() {
  return (
    <div class="flex flex-1">
      <div class="flex-1 max-w-screen-md mt-2 p-2 mx-auto border-solid border-4 border-indigo-600 rounded">
        <p class="my-2 text-xl text-blue-600 font-bold">
          차량 주차 위치 이력
        </p>
        <div class="flex justify-center" id="printHistory">
          Car Parking Location : {carParkLocation.value}
        </div>
      </div>
    </div>
  );
}
