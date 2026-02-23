import { sortObj, generateUrl } from '../Helpers/Helpers';

class GeoApi {
  constructor(requirements, name) {
    this.cacheKey = `CacheKey_${name}`;
    this.requirements = requirements;
    this.name = name;
  }

  async fetchDataFromApi() {
    const apiUrl = generateUrl(this.requirements, this.name);

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '0414e01166msh267ba361006cba8p110a40jsndd9b3acdbf5f',
        'x-rapidapi-host': 'everyearthquake.p.rapidapi.com'
      }
    };

    try {
      console.log("Enviando petición a:", apiUrl);
      console.log("Con options:", options);
      const response = await fetch(apiUrl, options);

      if (response.status === 429) {
        throw new Error("Error 429: Too Many Requests");
      }

      if (!response.ok) {
        throw new Error("Error fetching data from the API");
      }

      const data = await response.json();
      return data.data;

    } catch (error) {
      console.error("Fetch Error:", error);
      throw error;
    }
  }

  clearSpecificCache(specificCacheKey) {
    localStorage.removeItem(specificCacheKey);
  }

  async getDataWithCaching() {
    const specificCacheKey = `CacheKey_${this.name}`;
    this.cacheKey = specificCacheKey;

    const cachedData = localStorage.getItem(specificCacheKey);

    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      const currentTime = new Date().getTime();
      const cacheTime = parsedData.cacheTime || 0;
      const cacheDuration = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

      if (currentTime - cacheTime < cacheDuration) {
        if (this.requirementsMatch(parsedData.requirements)) {
          return { show: true, result: sortObj(parsedData.data) };
        }
      }
    }

    try {
      const data = await this.fetchDataFromApi();

      if (data && data.length > 0) {
        const formattedData = sortObj(data);

        const newDataToCache = {
          data: data,
          cacheTime: new Date().getTime(),
          requirements: this.requirements,
        };

        localStorage.setItem(this.cacheKey, JSON.stringify(newDataToCache));

        const limiteTiempo = 2000;
        await new Promise((resolve) => setTimeout(resolve, limiteTiempo));

        return { show: true, result: formattedData };
      } else {
        this.clearSpecificCache(specificCacheKey);
        return { show: true, result: this.requirements, error: "The returned data is empty" };
      }
    } catch (error) {
      if (error.message === "Error 429: Too Many Requests") {
        return { show: false, result: null, error: "Error 429: Too Many Requests" };
      } else {
        console.error("Error:", error);
        return { show: false, result: null };
      }
    }
  }

  requirementsMatch(cachedRequirements) {
    return JSON.stringify(cachedRequirements) === JSON.stringify(this.requirements);
  }

  clearCacheIfNeeded() {
    //console.log("Clearing cache if needed");
    if (this.name === "AllEarthquakes,Past7Days" || this.name === "AllEarthquakes,Past30Days") {
      this.clearSpecificCache(this.cacheKey);
    }
  }
}

export default GeoApi;