const mongoose = require("mongoose");
const { CONNECTİON_STRING } = require("../config");


let instance = null;

class Database {
    constructor() {
        if (!instance) {
            this.mongoConnection = null;
            instance = this;
        }

        return instance;
    }

    async connect(options) {
        try {
            console.log("DB Connecting...");
            let db = await mongoose.connect(CONNECTİON_STRING);
            this.mongoConnection = db;
            console.log("DB Connected.");
        } catch (err) {
            console.error("DB Connection Error:", err);
            process.exit(1);
        }
    }
}

module.exports = Database;
