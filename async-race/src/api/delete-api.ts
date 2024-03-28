class DeleteAPI {
  async deleteCarAPi(id: number): Promise<void> {
    await fetch(`https://async-race.adaptable.app/garage/${id}`, {
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
