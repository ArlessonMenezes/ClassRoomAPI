import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { SubjectEntity } from '../../subjects/model/Subject.entity';
import { VideoEntity } from '../../video/model/Video.entity';

@Entity('room')
export class RoomEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => VideoEntity, video => video.room)
  videos: VideoEntity[]

  @ManyToMany(() => SubjectEntity, subjects => subjects.rooms)
  subjects: SubjectEntity[]
}