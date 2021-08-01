import { Table, Column, Model, DataType, Index } from 'sequelize-typescript';

@Table
export class Profile extends Model {
  @Index('ufollow')
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @Index('ufollow')
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  profileId: number;
}
