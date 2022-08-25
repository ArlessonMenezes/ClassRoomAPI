import { AppError } from '../../../error/App.error';
import { subjectRepository } from '../../subjects/repositories/subject.repository';
import { roomRepository } from '../repositories/room.repository';

interface IRequest {
  idSubject: number;
  idRoom: number;
}

export class UpdateRoomSubjectService {

  async execute({ idSubject, idRoom }: IRequest) {

    const room = await roomRepository.findOneBy({ id: +idRoom })

    if (!room) {
      throw new AppError("Room does not exists");
    };

    const subject = await subjectRepository.findOneBy({ id: idSubject })

    if (!subject) {
      throw new AppError("Subject does not exists");
    };

    const roomUpdate = {
      ...room,
      subjects: [ subject ]
    }

    await roomRepository.save(roomUpdate)
  }
}
