"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const student_route_1 = require("./app/modules/student/student.route");
const app = (0, express_1.default)();
// Parser
app.use(express_1.default.json());
app.use(cors_1.default);
// Application routes
app.use('/api/v1/students', student_route_1.StudentRoutes);
app.get("/", (req, res) => {
    const a = 10;
    res.send("Hello world");
});
exports.default = app;
