import { Router } from "express";
import { SubjectController } from '../controller/subject.controller';

export  const subjectRoutes = Router();

subjectRoutes.post("/subject", new SubjectController().handle)