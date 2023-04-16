import baseApiInstance from "./PartnerIndex";

export const ApprovedPartnerSearch = async(data) => {
  try {
    const response = await baseApiInstance.get("/api/admin/waiting-partner/get-all", data);
    return response.data.data;
    console.log(response);

  } catch (error) {
    console.log("ERROR: ", error);
    throw new Error("ERROR: /api/admin/waiting-partner/get-all");
  }
}