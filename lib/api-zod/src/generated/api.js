import * as zod from "zod";
const HealthCheckResponse = zod.object({
  "status": zod.string()
});
export {
  HealthCheckResponse
};
