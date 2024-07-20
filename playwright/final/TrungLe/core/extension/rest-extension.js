const Ajv = require("ajv");

export class RestExtension {
    static ajv = new Ajv();

    static async validateSchema(schema, data){
        const validate = this.ajv.compile(schema);
        const valid = validate(data);
        if (!valid) {
            console.error(validate.errors);
        }
        return valid;
    }
}