import {Entity, PrimaryColumn, Column, OneToOne, JoinColumn, OneToMany} from "typeorm";
import Cart from "./Cart";

@Entity()
class User {
  @PrimaryColumn({ name: "user_email", length: 80 })
  userEmail: string; // 이메일

  @Column({ name: "pw", length: 300 })
  pw: string; // 비밀번호

  @Column({ name: "nick_name", length: 50 })
  nickName: string; // 이름

  @Column({ name: "gender", length: 30 })
  gender: string; // 성별

  @Column({ name: "birth_day", type: "date" })
  birthDay: Date; // 생일

  @Column({ name: "photo_src", length: 150 })
  photoSrc: string; // 프로필 이미지

  @OneToMany(type => Cart, cart => cart.user)
  cart: Cart[]; // 유저 장바구니
}

export default User;
