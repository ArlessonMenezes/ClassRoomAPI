import { Request, Response } from "express";
import { AppError } from "../../../error/App.error";
import { CreateSubjectService } from '../service/create-subject.service';

export class SubjectController {

  async handle(req: Request, res: Response) {
    const { name } = req.body;

    if (!name) {
      throw new AppError("name field cannot be empty");
    }

    const createSubjectService = new CreateSubjectService()

    await createSubjectService.execute(name)

    return res.status(201).send();
  }
}