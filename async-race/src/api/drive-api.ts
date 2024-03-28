import { IDriveResponse } from "../types/interfaces";

class DriveAPI {
  async driveAPI(id: number): Promise<IDriveResponse> {
    const response: Response = await fetch(
      `https://async-race.adaptable.app/engine?id=${id}&status=drive`,
      {
        method: "PATCH",
      },
    ).catch();
    return response.status === 200
      ? { ...(await response.json()) }
      : { success: false };
  }
}
export default DriveAPI;
