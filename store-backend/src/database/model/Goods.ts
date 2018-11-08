import {Entity, Column, OneToOne, JoinColumn, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Options from "./Options";
import Shipping from "./Shipping";
import Cart from "./Cart";

@Entity()
class Goods {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number; // 상품 id

  @Column({ name: "name", length: 100 })
  name: string; // 상품 이름

  @Column({ name: "provider", length: 100 })
  provider: string; // 입점사

  @Column({ name: "price" })
  price: number; // 가격

  @OneToMany(type => Options, options => options.goodsId)
  options: Options[]; // 옵션 테이블 외래키 설정

  @OneToOne(type => Shipping, shipping => shipping.goodsId )
  shipping: Shipping; // 배송비 테이블 외래키 설정

  @OneToMany(type => Cart, cart => cart.goods)
  cart: Cart[];
}

export default Goods;
