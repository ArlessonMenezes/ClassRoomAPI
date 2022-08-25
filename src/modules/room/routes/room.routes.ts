import { Router } from 'express';

import { RoomController } from '../controller/Room.controller';

export const routesRoom = Router();

routesRoom.post("/room", new RoomController().handle);

routesRoom.patch("/room-subject/:idRoom", new RoomController().roomSubject);

routesRoom.get("/rooms", new RoomController().list);
