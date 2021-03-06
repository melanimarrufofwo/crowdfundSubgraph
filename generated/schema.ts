// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class PlayerEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PlayerEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PlayerEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PlayerEntity", id.toString(), this);
  }

  static load(id: string): PlayerEntity | null {
    return store.get("PlayerEntity", id) as PlayerEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): BigInt {
    let value = this.get("date");
    return value.toBigInt();
  }

  set date(value: BigInt) {
    this.set("date", Value.fromBigInt(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get player(): Bytes {
    let value = this.get("player");
    return value.toBytes();
  }

  set player(value: Bytes) {
    this.set("player", Value.fromBytes(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }
}
