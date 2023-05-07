import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts"
import Layout from "../components/Layout.tsx";
import {useState, useEffect} from 'preact/hooks'
import PutCarLocation from "../islands/PutCarLocation.tsx";
import PrintCarParkingHistory from "../islands/PrintCarParkingHistory.tsx";
import { getCookies } from "std/http/cookie.ts";

interface Data {
  isAllowed: boolean;
}

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
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    return ctx.render!({ isAllowed: cookies.auth === "bar" });
  },
};

export default function Home({ data }: PageProps<Data>) {
  console.log(red('Hello Car Parking History Web App'));

  return (
    <div class='h-full'>
      <Head>
        <title>Car Parking History</title>
      </Head>
      <div class='h-full'>
        <Layout data={data}>
          <PutCarLocation  />
          <PrintCarParkingHistory />
        </Layout>
      </div>
    </div>
  );
}
