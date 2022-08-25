import { AppError } from '../../../error/App.error';
import { subjectRepository } from '../repositories/subject.repository';

export class CreateSubjectService {

  async execute(name: string){
    
    const subject = await subjectRepository.findOne({
      where: { name }
    })  
    
    if (subject) {
      throw new AppError("Subject already exists");
    }
    
    const newSubject = subjectRepository.create({
      name,
    })

    await subjectRepository.save(newSubject);
  }
}