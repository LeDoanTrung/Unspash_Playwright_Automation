const fs = require('fs');
const path = require('path');


class JsonUtils {
    static readJsonFile(filePath) {
        try {
            const fullPath = path.resolve(__dirname, filePath);
            if (!fs.existsSync(fullPath)) {
                throw new Error(`Can't find file: ${fullPath}`);
            }
            return fs.readFileSync(fullPath, 'utf8');
        } catch (error) {
            console.error('Error reading JSON file:', error);
            throw error;
        }
    }

    static readAndParse(filePath, key) {
        try {
            const jsonData = this.readJsonFile(filePath);
            const jsonObject = JSON.parse(jsonData);
            if (jsonObject[key]) {
                return jsonObject[key];
            } else {
                throw new Error(`Key "${key}" not found in JSON data.`);
            }
        } catch (error) {
            console.error('Error parsing JSON data:', error);
            throw error;
        }
    }
}

module.exports = { JsonUtils };
