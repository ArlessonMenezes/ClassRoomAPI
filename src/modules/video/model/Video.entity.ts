import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RoomEntity } from "../../room/model/Room.entity";

@Entity('video')
export class VideoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tittle: string;

  @Column()
  url: string;

  @ManyToOne(() => RoomEntity, room => room.videos)
  @JoinColumn({ name: 'room_id' })
  room: RoomEntity

}