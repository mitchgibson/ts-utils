/**
 * Recursively converts all keys in a JSON object from camel to snake case.
 * @param json 
 */
export function jsonFromCamelToSnake(json: any): any {
    if (typeof json !== 'object' || json === null) {
        return json;
    }
    if (Array.isArray(json)) {
        return json.map(jsonFromCamelToSnake);
    }
    const snakeJson: any = {};
    for (const key in json) {
        const snakeKey = key.toString().replace(/([A-Z])/g, '_$1').toLowerCase();
        snakeJson[snakeKey] = jsonFromCamelToSnake(json[key]);
    }
    return snakeJson;
}