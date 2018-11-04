import {Entity, Column, OneToOne, JoinColumn, OneToMany, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import Goods from "./Goods";

@Entity()
class Shipping {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number; // 배송비 아이디

  @Column({ name: "method", length: 30 })
  method: string; // 배송비 부과 여부

  @Column({ name: "price" })
  price: number; // 배송비

  @Column({ name: "canBundle" })
  canBundle: boolean; // 같은 입점사 상품의 묶음배송 가능 여부

  @OneToOne(type => Goods, goodsId => goodsId.id, {
    cascade: true
  })
  @JoinColumn({ name: "goods_id" })
  goodsId: Goods; // 외래키 설정
}

export default Shipping;
