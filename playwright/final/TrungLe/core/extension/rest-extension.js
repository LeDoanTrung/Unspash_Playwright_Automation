const Ajv = require("ajv");

export class RestExtension {
    static ajv = new Ajv();

    static async validateSchema(schema, data){
        //const validate = this.ajv.compile(schema);
        const valid = this.ajv.validate(schema, data);
        if (!valid) {
            console.error('AJV Validation Errors:', this.ajv.errorsText());
        }
        return valid;
    }
}