export const GetData = async (api, cache = false) => {
  const res = !cache ? await fetch(api, { cache: "no-store" }) : await fetch(api);

  if (!res.ok) {
    return false
  }

  return res.json();
}