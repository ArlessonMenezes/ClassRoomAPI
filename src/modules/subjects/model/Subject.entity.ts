import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { RoomEntity } from '../../room/model/Room.entity';

@Entity("subject")
export class SubjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => RoomEntity, room => room.subjects)
  @JoinTable({
    name: 'room_subject',
    joinColumn: {
      name: 'room_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'subject_id',
      referencedColumnName: 'id'
    }
  })
  rooms: RoomEntity[]
} 