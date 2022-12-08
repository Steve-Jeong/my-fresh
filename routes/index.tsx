import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Car Parking History</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md border-solid border-4 border-indigo-600 rounded">
        <p class="my-2 text-3xl text-blue-600 font-bold">
          차량 주차 위치 지정
        </p>
        <div class='flex justify-center'>
          <div class='flex flex-auto justify-center'>
            <input type="radio" name="flexRadio" id="flexRadio1" value="지하1층" />
            <label class='ml-2' for="flexRadio1">지하1층</label>
          </div>

          <div class='flex flex-auto justify-center'>
            <input type="radio" name="flexRadio" id="flexRadio2" value="지하2층" />
            <label class='ml-2' for="flexRadio2">지하2층</label>
          </div>
          
          <div class='flex flex-auto justify-center'>
            <input type="radio" name="flexRadio" id="flexRadio3" value="지하3층" />
            <label class='ml-2' for="flexRadio3">지하3층</label>
          </div>

          <div class='flex flex-auto justify-center'>
            <input type="radio" name="flexRadio" id="flexRadio4" value="지하4층" />
            <label class='ml-2' for="flexRadio4">지하4층</label>
          </div>

          <div class='flex flex-auto justify-center'>
            <input type="radio" name="flexRadio" id="flexRadio5" value="지하5층" />
            <label class='ml-2' for="flexRadio5">지하5층</label>
          </div>
        </div>
      </div>
      <div class="p-4 mx-auto max-w-screen-md border-solid border-4 border-indigo-600 rounded">
        <p class="my-2 text-3xl text-blue-600 font-bold">
          차량 주차 위치 이력
        </p>
        <div class='flex justify-center'>
          <div class='flex flex-auto justify-center'>
            <input type="radio" name="flexRadio" id="flexRadio1" value="지하1층" />
            <label class='ml-2' for="flexRadio1">지하1층</label>
          </div>

          <div class='flex flex-auto justify-center'>
            <input type="radio" name="flexRadio" id="flexRadio2" value="지하2층" />
            <label class='ml-2' for="flexRadio2">지하2층</label>
          </div>
          
          <div class='flex flex-auto justify-center'>
            <input type="radio" name="flexRadio" id="flexRadio3" value="지하3층" />
            <label class='ml-2' for="flexRadio3">지하3층</label>
          </div>

          <div class='flex flex-auto justify-center'>
            <input type="radio" name="flexRadio" id="flexRadio4" value="지하4층" />
            <label class='ml-2' for="flexRadio4">지하4층</label>
          </div>

          <div class='flex flex-auto justify-center'>
            <input type="radio" name="flexRadio" id="flexRadio5" value="지하5층" />
            <label class='ml-2' for="flexRadio5">지하5층</label>
          </div>
        </div>
      </div>
    </>
  );
}
