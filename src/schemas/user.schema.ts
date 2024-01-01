import mongoose, { Document, Model, Schema } from "mongoose";

type UserDocument = Document & {
    firstName: string
    lastName: string
    email: string
    password: string
    bio: string
}

const UserSchema: Schema<UserDocument> = new Schema<UserDocument>({
    firstName: {
        type: String,
        required: false,
        default: null,
    },
    lastName: {
        type: String,
        required: false,
        default: null,
    },
    email: {
        index: true,
        unique: true,
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

const User: Model<UserDocument> = mongoose.model("User", UserSchema);

export {UserDocument, User}