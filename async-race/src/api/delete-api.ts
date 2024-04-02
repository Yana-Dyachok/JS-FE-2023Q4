import { GARAGE__LINK } from "../types/const-var";

class DeleteAPI {
  async deleteCarAPi(id: number): Promise<void> {
    await fetch(`${GARAGE__LINK}/${id}`, {
      method: "DELETE",
    });
  }

  async deleteWinnerAPi(id: number): Promise<void> {
    await fetch(`https://async-race.adaptable.app/winners/${id}`, {
      method: "DELETE",
    });
  }
}

export default DeleteAPI;
