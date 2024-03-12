export const Config = {
  get SERVER_URL() {
    return process.env.NEXT_PUBLIC_API_URL ?? "";
  },
  get API_KEY() {
    return process.env.NEXT_PUBLIC_API_KEY ?? ""
  }
};
