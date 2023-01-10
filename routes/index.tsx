import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts"
import Layout from "../components/Layout.tsx";
import {useState, useEffect} from 'preact/hooks'
import PutCarLocation from "../islands/PutCarLocation.tsx";
import PrintCarParkingHistory from "../islands/PrintCarParkingHistory.tsx";

import {
  bgBlue,
  bgRgb24,
  bgRgb8,
  bold,
  italic,
  red,
  rgb24,
  rgb8,
} from "https://deno.land/std@0.171.0/fmt/colors.ts";

export const handler: Handlers = {

}

export default function Home() {
  console.log(red('Hello Car Parking History Web App'));

  return (
    <div class='h-full'>
      <Head>
        <title>Car Parking History</title>
      </Head>
      <div class='h-full'>
        <Layout >
          <PutCarLocation />
          <PrintCarParkingHistory />
        </Layout>
      </div>
    </div>
  );
}
