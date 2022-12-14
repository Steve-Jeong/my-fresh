import {useState, useEffect} from 'preact/hooks'
import { signal, computed, effect, batch } from "@preact/signals";

export const carParkLocation = signal('');

export default function PutCarLocation() {
  const [selected, setSelected] = useState('')
  useEffect(() => {
    console.log('useEffect selected : ', selected)
    carParkLocation.value = selected
    console.log('useEffect count.value : ', carParkLocation.value)
  }, [selected])
  

  function handleChange(e) {
    setSelected((prev) => prev = e.target.value)
    carParkLocation.value = selected
    console.log('handleChange selected : ', selected)
    console.log('handleChange count.value : ', carParkLocation.value)
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
