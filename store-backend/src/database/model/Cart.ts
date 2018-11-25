import {Entity, Column, OneToOne, JoinColumn, OneToMany, PrimaryGeneratedColumn, ManyToOne, ManyToMany} from "typeorm";
import User from "./User";
import Goods from "./Goods";
import Options from "./Options";
import Shipping from "./Shipping";

@Entity()
class Cart {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "quantity" })
  quantity: number; // 장바구니 담은 갯수

  @ManyToOne(type => Goods, goods => goods.id)
  @JoinColumn({ name: "goods_id" })
  goods: Goods; // 상품

  @ManyToOne(type => Options, options => options.id)
  @JoinColumn({ name: "options_id" })
  options: Options; // 옵션

  @ManyToOne(type => Shipping, shipping => shipping.id)
  @JoinColumn({ name: "shipping_id" })
  shipping: Shipping;

  @ManyToOne(type => User, user => user.userEmail)
  @JoinColumn({ name: "user_email" })
  user: User; // 사용자
}

export default Cart;
