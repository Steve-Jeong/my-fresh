import { useEffect, useState } from "preact/hooks";
import { batch, computed, effect, signal } from "@preact/signals";

export type carParkLocationType = {
  location: string;
  username: string;
  saveDate: number;
}

export const carParkLocation = signal({
  location: '',
  username:'',
  saveDate: new Date()
});

export const count = signal(12)

export default function PutCarLocation() {
  const [selected, setSelected] = useState("");
  useEffect(() => {
    // console.log("useEffect selected : ", selected);
    count.value++;
    carParkLocation.value.location = selected;
    carParkLocation.value.username = 'Steve Jeong';
    carParkLocation.value.saveDate = new Date();
    console.log("useEffect in PutCarLocation : ", carParkLocation.value);
    async function saveToDB() {
      const res = await fetch("/api/putCarLocation", { 
        method: "POST",
        body: JSON.stringify(carParkLocation.value),
      });
      if(res.status === 404){
        console.log('PutCarLocation res.status === 404')
      } else {
        const data = await res.json();
        console.log('useEffect data : ', data);
      }
      // const data = await res.json()   // this line makes error
    }
    saveToDB();
  }, [selected]);

  function handleChange(e) {
    setSelected((prev) => prev = e.target.value);
    
    // console.log("handleChange selected : ", selected);
    // console.log("handleChange carParkLocation : ", carParkLocation.value);
  }

  return (
    <div>
      <div class="p-2 mt-2 mx-auto max-w-screen-md border-solid border-4 border-indigo-600 rounded">
        <p class="my-2 text-xl text-blue-600 font-bold">
          차량 주차 위치 지정
        </p>
        <div onChange={handleChange} class="flex justify-center">
          <div class="flex flex-auto justify-center">
            <input
              type="radio"
              name="flexRadio"
              id="flexRadio1"
              value="지하1층"
            />
            <label class="ml-2" for="flexRadio1">지하1층</label>
          </div>

          <div class="flex flex-auto justify-center">
            <input
              type="radio"
              name="flexRadio"
              id="flexRadio2"
              value="지하2층"
            />
            <label class="ml-2" for="flexRadio2">지하2층</label>
          </div>

          <div class="flex flex-auto justify-center">
            <input
              type="radio"
              name="flexRadio"
              id="flexRadio3"
              value="지하3층"
            />
            <label class="ml-2" for="flexRadio3">지하3층</label>
          </div>

          <div class="flex flex-auto justify-center">
            <input
              type="radio"
              name="flexRadio"
              id="flexRadio4"
              value="지하4층"
            />
            <label class="ml-2" for="flexRadio4">지하4층</label>
          </div>

          <div class="flex flex-auto justify-center">
            <input
              type="radio"
              name="flexRadio"
              id="flexRadio5"
              value="지하5층"
            />
            <label class="ml-2" for="flexRadio5">지하5층</label>
          </div>
        </div>
      </div>
    </div>
  );
}
