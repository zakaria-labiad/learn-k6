import http from "k6/http";
import { sleep, check } from "k6";

const HOST = __ENV.K6_HOST || "host.docker.internal";
const PORT = __ENV.PORT || "3000";

export const options = {
  vus: __ENV.K6_VUS || 10, // Number of virtual users
  duration: __ENV.K6_DURATION || "10s", // Test duration
  thresholds: {
    http_req_failed: ["rate<0.01"], // Fail the test if more than 1% of requests fail
    http_req_duration: ["p(95)<500"], // 95% of requests should be below 500ms
  },
};

export default function () {
  const res = http.get(`http://${HOST}:${PORT}/api/cubes`);
  check(res, {
    "status was 200": (r) => r.status === 200,
    "duration was < 200ms": (r) => r.timings.duration < 200,
  });
  sleep(1);
}
