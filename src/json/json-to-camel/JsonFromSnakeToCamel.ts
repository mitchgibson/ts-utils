/**
 * Recursively converts all keys in a JSON object from snake case to camel case.
 * @param json
 */
export function jsonFromSnakeToCamel(json: any): any {
  if (typeof json !== "object" || json === null) {
    return json;
  }
  if (Array.isArray(json)) {
    return json.map(jsonFromSnakeToCamel);
  }
  const camelJson: any = {};
  for (const key in json) {
    const camelKey = key.toString().replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
    camelJson[camelKey] = jsonFromSnakeToCamel(json[key]);
  }
  return camelJson;
}
