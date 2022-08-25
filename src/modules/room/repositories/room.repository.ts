import { AppDataSource } from '../../../database/data-source';
import { RoomEntity } from '../model/Room.entity';

export const roomRepository = AppDataSource.getRepository(
  RoomEntity
);