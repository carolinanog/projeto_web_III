import express from 'express';
import { getInternalSystem } from '../controllers/internalSystem.js';

export const router = express.Router();


router.get("/internalSystemMcQueen", getInternalSystem);
