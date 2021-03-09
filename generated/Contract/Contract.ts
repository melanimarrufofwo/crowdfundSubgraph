// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class crowdfundLog extends ethereum.Event {
  get params(): crowdfundLog__Params {
    return new crowdfundLog__Params(this);
  }
}

export class crowdfundLog__Params {
  _event: crowdfundLog;

  constructor(event: crowdfundLog) {
    this._event = event;
  }

  get player(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  author(): Address {
    let result = super.call("author", "author():(address)", []);

    return result[0].toAddress();
  }

  try_author(): ethereum.CallResult<Address> {
    let result = super.tryCall("author", "author():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  closed(): boolean {
    let result = super.call("closed", "closed():(bool)", []);

    return result[0].toBoolean();
  }

  try_closed(): ethereum.CallResult<boolean> {
    let result = super.tryCall("closed", "closed():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  endTime(): BigInt {
    let result = super.call("endTime", "endTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_endTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("endTime", "endTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  joined(param0: Address): BigInt {
    let result = super.call("joined", "joined(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_joined(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("joined", "joined(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  price(): BigInt {
    let result = super.call("price", "price():(uint256)", []);

    return result[0].toBigInt();
  }

  try_price(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("price", "price():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawFundCall extends ethereum.Call {
  get inputs(): WithdrawFundCall__Inputs {
    return new WithdrawFundCall__Inputs(this);
  }

  get outputs(): WithdrawFundCall__Outputs {
    return new WithdrawFundCall__Outputs(this);
  }
}

export class WithdrawFundCall__Inputs {
  _call: WithdrawFundCall;

  constructor(call: WithdrawFundCall) {
    this._call = call;
  }
}

export class WithdrawFundCall__Outputs {
  _call: WithdrawFundCall;

  constructor(call: WithdrawFundCall) {
    this._call = call;
  }
}
