import { AppError } from '../../../error/App.error';
import { videoRepository } from '../../video/repositories/video.repository';
import { CreateVideoService } from '../../video/service/Create-video.service';
import { RoomEntity } from '../model/Room.entity';
import { roomRepository } from '../repositories/room.repository';

export interface IRoom {
  name: string;
  description?: string;
};

export interface IVideo {
  tittle: string;
  url: string;
}
export class CreateRoomService {
  async execute({ name, description }: IRoom) {
    
    const room = await roomRepository.findOneBy({name})
    
    if (room) {
      throw new AppError("Room already exists");
    }

    const newRoom = roomRepository.create({
      name,
      description,
    })
    await roomRepository.save(newRoom);
  }
}