import { roomRepository } from '../repositories/room.repository';

export class ListRoomsService {

  async execute() {

    const rooms = await roomRepository.find({
      relations: ['subjects', 'videos']
    });

    return rooms;
  }

}