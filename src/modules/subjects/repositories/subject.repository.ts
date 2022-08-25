import { AppDataSource } from '../../../database/data-source';
import { SubjectEntity } from '../model/Subject.entity';

export const subjectRepository = AppDataSource.getRepository(
  SubjectEntity
);

