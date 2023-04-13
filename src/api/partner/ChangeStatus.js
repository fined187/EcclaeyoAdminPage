import baseApiInstance from "."

export const ChangeStatus = async(data) => {
  try {
    const response = await baseApiInstance.put("/api/admin/waiting-partner/update", data);
    return response;
    console.log(response);
  } catch (error) {
    console.log("ERROR: ", error);
    throw new Error("ERROR: /api/admin/status");
  }
};

