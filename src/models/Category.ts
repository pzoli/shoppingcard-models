import { Schema, model, Types } from "mongoose";
import Joi from "joi";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});

const validate = (category: object): Joi.ValidationResult => {
    const schema = Joi.object().keys({
        name: Joi.string().required(),
    });
    return schema.validate(category);
}

export default { categorySchema, validate };
