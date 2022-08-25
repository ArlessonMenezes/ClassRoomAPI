import 'dotenv/config';
import 'reflect-metadata';

import { DataSource } from 'typeorm';
import { RoomEntity } from '../modules/room/model/Room.entity';
import { SubjectEntity } from '../modules/subjects/model/Subject.entity';
import { VideoEntity } from '../modules/video/model/Video.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  synchronize: true,  
  entities: [RoomEntity, VideoEntity, SubjectEntity],
  migrations: [`${__dirname}**/migrations/*.{ts,js}`]
});