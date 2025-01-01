import { GoogleGenerativeAI } from "@google/generative-ai";
import {GEMINI_API} from "./constants";


const genAI = new GoogleGenerativeAI(GEMINI_API);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;