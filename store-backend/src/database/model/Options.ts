import {Entity, PrimaryColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Goods from "./Goods";
import Cart from "./Cart";

@Entity()
class Options {
  @PrimaryColumn({ name: "id" })
  id: number; // 옵션 아이디

  @Column({ name: "color", length: 300 })
  color: string; // 색상

  @Column({ name: "size", length: 30 })
  size: string; // 사이즈

  @Column({ name: "stock" })
  stock: number; // 재고

  @ManyToOne(type => Goods, goodsId => goodsId.id, {
    cascade: true
  })
  @JoinColumn({ name: "goods_id" })
  goodsId: Goods;

  @OneToMany(type => Cart, cart => cart.goods)
  cart: Cart[];
}

export default Options;
