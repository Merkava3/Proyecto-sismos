import { sortObj, generateLocalUrl } from '../Helpers/Helpers';

/**
 * GeoApi service for fetching and caching earthquake data.
 */
class GeoApi {
  /**
   * @param {Object} requirements - The requirements for the API call.
   * @param {string} name - The endpoint name.
   * @param {number} cacheDurationMins - Cache duration in minutes (default 120).
   */
  constructor(requirements, name, cacheDurationMins = 120) {
    this.requirements = requirements;
    this.name = name;
    this.cacheKey = `CacheKey_${name}`;
    this.cacheDuration = cacheDurationMins * 60 * 1000;
  }

  /**
   * Fetches data from the local API.
   * @throws {Error} If the API call fails or endpoint is not supported.
   * @returns {Promise<Array>} The earthquake data.
   */
  async fetchDataFromApi() {
    const localResult = generateLocalUrl(this.requirements, this.name);
    
    if (!localResult) {
      throw new Error(`Endpoint name '${this.name}' is not supported.`);
    }

    const { apiUrl, options } = localResult;

    try {
      console.log(`🌍 Petición: ${apiUrl}`);
      const response = await fetch(apiUrl, options);

      if (response.status === 429) throw new Error("Error 429: Too Many Requests");
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

      const data = await response.json();
      return data.data || data.earthquakes || [];
    } catch (error) {
      console.error("Fetch Error:", error);
      throw error;
    }
  }

  /**
   * Retrieves data with local storage caching.
   * @returns {Promise<Object>} The result and show flag.
   */
  async getDataWithCaching() {
    const cachedDataString = localStorage.getItem(this.cacheKey);

    if (cachedDataString) {
      const parsedData = JSON.parse(cachedDataString);
      const currentTime = Date.now();
      const cacheTime = parsedData.cacheTime || 0;

      const isFresh = (currentTime - cacheTime) < this.cacheDuration;
      const isMatching = this.requirementsMatch(parsedData.requirements);

      if (isFresh && isMatching) {
        return { show: true, result: sortObj(parsedData.data) };
      }
    }

    try {
      const data = await this.fetchDataFromApi();

      if (data?.length > 0) {
        const formattedData = sortObj(data);
        const cacheEntry = {
          data,
          cacheTime: Date.now(),
          requirements: this.requirements,
        };

        localStorage.setItem(this.cacheKey, JSON.stringify(cacheEntry));
        return { show: true, result: formattedData };
      } else {
        localStorage.removeItem(this.cacheKey);
        return { show: true, result: this.requirements, error: "Empty result" };
      }
    } catch (error) {
      const isRateLimited = error.message.includes("429");
      return { 
        show: false, 
        result: null, 
        error: isRateLimited ? "Error 429: Too Many Requests" : "Network Error" 
      };
    }
  }

  /**
   * Compares requirements for cache validity.
   */
  requirementsMatch(cachedRequirements) {
    return JSON.stringify(cachedRequirements) === JSON.stringify(this.requirements);
  }

  /**
   * Manually clears the cache for this service.
   */
  clearCache() {
    localStorage.removeItem(this.cacheKey);
  }
}

export default GeoApi;