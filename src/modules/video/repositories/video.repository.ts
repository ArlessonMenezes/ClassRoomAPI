import { AppDataSource } from "../../../database/data-source";
import { VideoEntity } from "../model/Video.entity";


export const videoRepository = AppDataSource.getRepository(VideoEntity);