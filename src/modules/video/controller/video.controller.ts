import { Request, Response } from "express";
import { CreateVideoService } from '../service/Create-video.service';

export class VideoController {

  async handle(req: Request, res: Response) {
    const { tittle, url } = req.body;
    const { idRoom } = req.params;

    const createVideoService = new CreateVideoService();

    const video = await createVideoService.execute({
      tittle,
      url,
      idRoom: Number(idRoom)
    })

    return res.status(201).json(video);
  }

}