export const base_url = "http://localhost:3000/api/";

export const config = () => {
  const customerData = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

  console.log("Token from local storage:", customerData);

  return {
    headers: {
      Authorization: `Bearer ${customerData?.token || ""}`,
      Accept: "application/json",
    },
  };
};
