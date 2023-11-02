export const base_url = "https://backend.deepnapsoftech.com/api";
// export const base_url = "http://127.0.0.1:7001/api";

const token = localStorage.getItem("token") || null;

export const config = {
  headers: {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
};
