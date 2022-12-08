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
          차량 주차 위치 이력
        </p>
        
      </div>
    </>
  );
}
