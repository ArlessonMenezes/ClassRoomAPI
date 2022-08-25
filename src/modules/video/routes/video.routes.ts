import { Router } from 'express';
import { VideoController } from '../controller/video.controller';

export const videoRoutes = Router();

videoRoutes.post("/video/:idRoom", new VideoController().handle);
