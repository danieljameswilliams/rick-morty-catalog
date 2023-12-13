import { useCallback, useMemo } from "react";
import axios, { AxiosInstance } from "axios";

export const request = useMemo(() => {
    return axios.create({ baseURL: "https://250b7db9-682c-48f2-90dc-9abcddb0c8b9.mock.pstmn.io" });
}, []);