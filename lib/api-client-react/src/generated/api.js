import {
  useQuery
} from "@tanstack/react-query";
import { customFetch } from "../custom-fetch.js";
const withQueryKey = (query, queryKey) => {
  const result = { queryKey };
  for (const key of Object.keys(query)) {
    if (key === "queryKey") continue;
    Object.defineProperty(result, key, {
      enumerable: true,
      configurable: true,
      get: () => query[key]
    });
  }
  return result;
};
const getHealthCheckUrl = () => {
  return `/api/healthz`;
};
const healthCheck = async (options) => {
  return customFetch(
    getHealthCheckUrl(),
    {
      ...options,
      method: "GET"
    }
  );
};
const getHealthCheckQueryKey = () => {
  return [
    `/api/healthz`
  ];
};
const getHealthCheckQueryOptions = (options) => {
  const { query: queryOptions } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getHealthCheckQueryKey();
  const queryFn = ({ signal }) => healthCheck({ signal });
  return { queryKey, queryFn, ...queryOptions };
};
function useHealthCheck(options) {
  const queryOptions = getHealthCheckQueryOptions(options);
  const query = useQuery(queryOptions);
  return withQueryKey(query, queryOptions.queryKey);
}
export {
  getHealthCheckQueryKey,
  getHealthCheckQueryOptions,
  getHealthCheckUrl,
  healthCheck,
  useHealthCheck
};
