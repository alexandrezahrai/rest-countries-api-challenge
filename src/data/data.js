export async function fetchAllCountries() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders,cca3"
  );
  const data = await res.json();
  return data;
}
