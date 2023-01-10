// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/create.ts";
import * as $1 from "./routes/api/read.ts";
import * as $2 from "./routes/index.tsx";
import * as $3 from "./routes/test.tsx";
import * as $$0 from "./islands/PrintCarParkingHistory.tsx";
import * as $$1 from "./islands/PutCarLocation.tsx";

const manifest = {
  routes: {
    "./routes/api/create.ts": $0,
    "./routes/api/read.ts": $1,
    "./routes/index.tsx": $2,
    "./routes/test.tsx": $3,
  },
  islands: {
    "./islands/PrintCarParkingHistory.tsx": $$0,
    "./islands/PutCarLocation.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
