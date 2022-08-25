import { Request, Response } from 'express';

import { CreateRoomService } from '../service/Create-room.service';
import { UpdateRoomSubjectService } from '../service/update-room-subject.service';
import { RoomEntity } from '../model/Room.entity';
import { ListRoomsService } from '../service/List-room.service';


export class RoomController {

  async handle(req: Request, res: Response) {

    const { name, description } = req.body;

    const createRoomService = new CreateRoomService();
    
    const room = await createRoomService.execute({
      name,
      description,
    })

    return res.status(201).json(room);
  }

  async roomSubject(req: Request, res: Response) {

    const { idSubject } = req.body;
    const {  idRoom } = req.params;

    const updateRoomSubjectService = new UpdateRoomSubjectService();

    await updateRoomSubjectService.execute({
       idSubject, 
       idRoom: Number(idRoom), 
    })

    return res.status(204).send();
  }

  async list(req: Request, res: Response) {

    const listRoomsService = new ListRoomsService();

    const listRooms = await listRoomsService.execute();

    return res.json(listRooms);
  }
}