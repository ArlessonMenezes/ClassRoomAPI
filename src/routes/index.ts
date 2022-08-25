import { Router } from 'express';

import { routesRoom } from '../modules/room/routes/room.routes';
import { subjectRoutes } from '../modules/subjects/routes/subjects.routes';
import { videoRoutes } from '../modules/video/routes/video.routes';

const routes = Router();

routes.use("/", subjectRoutes);

routes.use("/", routesRoom);

routes.use("/", videoRoutes);

export default routes;