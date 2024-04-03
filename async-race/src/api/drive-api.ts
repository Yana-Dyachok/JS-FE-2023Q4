import { IDriveResponse } from "../types/interfaces";
import { ENGINE__LINK } from "../types/const-var";

export const driveAPI = async (id: number): Promise<IDriveResponse> => {
  const response: Response = await fetch(
    `${ENGINE__LINK}?id=${id}&status=drive`,
    {
      method: "PATCH",
    },
  ).catch();
  return response.status === 200
    ? { ...(await response.json()) }
    : { success: false };
};
