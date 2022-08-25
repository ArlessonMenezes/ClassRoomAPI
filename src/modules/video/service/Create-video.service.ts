import { AppError } from '../../../error/App.error';
import { roomRepository } from '../../room/repositories/room.repository';
import { videoRepository } from '../repositories/video.repository';

interface IVideo {
  tittle: string;
  url: string;
  idRoom: number;
}

export class CreateVideoService {

  async execute( data: IVideo) {
    const video = await videoRepository.findOne({
      where: { tittle: data.tittle }
    });

    if (video) {
      throw new AppError("video already exists");
    };

    const room = await roomRepository.findOne({
      where: {
        id: data.idRoom 
      }
    })
    
    if (!room) {
      throw new AppError("Room does not exists");
    }

    const newVideo = videoRepository.create({
      tittle: data.tittle,
      url: data.url,
      room,
    })

    return await videoRepository.save(newVideo);
  }
}