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

export class EvAuctionRefund extends ethereum.Event {
  get params(): EvAuctionRefund__Params {
    return new EvAuctionRefund__Params(this);
  }
}

export class EvAuctionRefund__Params {
  _event: EvAuctionRefund;

  constructor(event: EvAuctionRefund) {
    this._event = event;
  }

  get itemHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get currency(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get incentive(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class EvCancel extends ethereum.Event {
  get params(): EvCancel__Params {
    return new EvCancel__Params(this);
  }
}

export class EvCancel__Params {
  _event: EvCancel;

  constructor(event: EvCancel) {
    this._event = event;
  }

  get itemHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class EvDelegate extends ethereum.Event {
  get params(): EvDelegate__Params {
    return new EvDelegate__Params(this);
  }
}

export class EvDelegate__Params {
  _event: EvDelegate;

  constructor(event: EvDelegate) {
    this._event = event;
  }

  get delegate(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isRemoval(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class EvFailure extends ethereum.Event {
  get params(): EvFailure__Params {
    return new EvFailure__Params(this);
  }
}

export class EvFailure__Params {
  _event: EvFailure;

  constructor(event: EvFailure) {
    this._event = event;
  }

  get index(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get error(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class EvFeeCapUpdate extends ethereum.Event {
  get params(): EvFeeCapUpdate__Params {
    return new EvFeeCapUpdate__Params(this);
  }
}

export class EvFeeCapUpdate__Params {
  _event: EvFeeCapUpdate;

  constructor(event: EvFeeCapUpdate) {
    this._event = event;
  }

  get newValue(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class EvProfit extends ethereum.Event {
  get params(): EvProfit__Params {
    return new EvProfit__Params(this);
  }
}

export class EvProfit__Params {
  _event: EvProfit;

  constructor(event: EvProfit) {
    this._event = event;
  }

  get itemHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get currency(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class EvSigner extends ethereum.Event {
  get params(): EvSigner__Params {
    return new EvSigner__Params(this);
  }
}

export class EvSigner__Params {
  _event: EvSigner;

  constructor(event: EvSigner) {
    this._event = event;
  }

  get signer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isRemoval(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class X2Y2__ongoingAuctionsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: Address;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: Address) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    return map;
  }
}

export class X2Y2__run1InputOrderStruct extends ethereum.Tuple {
  get salt(): BigInt {
    return this[0].toBigInt();
  }

  get user(): Address {
    return this[1].toAddress();
  }

  get network(): BigInt {
    return this[2].toBigInt();
  }

  get intent(): BigInt {
    return this[3].toBigInt();
  }

  get delegateType(): BigInt {
    return this[4].toBigInt();
  }

  get deadline(): BigInt {
    return this[5].toBigInt();
  }

  get currency(): Address {
    return this[6].toAddress();
  }

  get dataMask(): Bytes {
    return this[7].toBytes();
  }

  get items(): Array<X2Y2__run1InputOrderItemsStruct> {
    return this[8].toTupleArray<X2Y2__run1InputOrderItemsStruct>();
  }

  get r(): Bytes {
    return this[9].toBytes();
  }

  get s(): Bytes {
    return this[10].toBytes();
  }

  get v(): i32 {
    return this[11].toI32();
  }

  get signVersion(): i32 {
    return this[12].toI32();
  }
}

export class X2Y2__run1InputOrderItemsStruct extends ethereum.Tuple {
  get price(): BigInt {
    return this[0].toBigInt();
  }

  get data(): Bytes {
    return this[1].toBytes();
  }
}

export class X2Y2__run1InputSharedStruct extends ethereum.Tuple {
  get salt(): BigInt {
    return this[0].toBigInt();
  }

  get deadline(): BigInt {
    return this[1].toBigInt();
  }

  get amountToEth(): BigInt {
    return this[2].toBigInt();
  }

  get amountToWeth(): BigInt {
    return this[3].toBigInt();
  }

  get user(): Address {
    return this[4].toAddress();
  }

  get canFail(): boolean {
    return this[5].toBoolean();
  }
}

export class X2Y2__run1InputDetailStruct extends ethereum.Tuple {
  get op(): i32 {
    return this[0].toI32();
  }

  get orderIdx(): BigInt {
    return this[1].toBigInt();
  }

  get itemIdx(): BigInt {
    return this[2].toBigInt();
  }

  get price(): BigInt {
    return this[3].toBigInt();
  }

  get itemHash(): Bytes {
    return this[4].toBytes();
  }

  get executionDelegate(): Address {
    return this[5].toAddress();
  }

  get dataReplacement(): Bytes {
    return this[6].toBytes();
  }

  get bidIncentivePct(): BigInt {
    return this[7].toBigInt();
  }

  get aucMinIncrementPct(): BigInt {
    return this[8].toBigInt();
  }

  get aucIncDurationSecs(): BigInt {
    return this[9].toBigInt();
  }

  get fees(): Array<X2Y2__run1InputDetailFeesStruct> {
    return this[10].toTupleArray<X2Y2__run1InputDetailFeesStruct>();
  }
}

export class X2Y2__run1InputDetailFeesStruct extends ethereum.Tuple {
  get percentage(): BigInt {
    return this[0].toBigInt();
  }

  get to(): Address {
    return this[1].toAddress();
  }
}

export class X2Y2 extends ethereum.SmartContract {
  static bind(address: Address): X2Y2 {
    return new X2Y2("X2Y2", address);
  }

  RATE_BASE(): BigInt {
    let result = super.call("RATE_BASE", "RATE_BASE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_RATE_BASE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("RATE_BASE", "RATE_BASE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  delegates(param0: Address): boolean {
    let result = super.call("delegates", "delegates(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_delegates(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("delegates", "delegates(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  feeCapPct(): BigInt {
    let result = super.call("feeCapPct", "feeCapPct():(uint256)", []);

    return result[0].toBigInt();
  }

  try_feeCapPct(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("feeCapPct", "feeCapPct():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  inventoryStatus(param0: Bytes): i32 {
    let result = super.call(
      "inventoryStatus",
      "inventoryStatus(bytes32):(uint8)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toI32();
  }

  try_inventoryStatus(param0: Bytes): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "inventoryStatus",
      "inventoryStatus(bytes32):(uint8)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  ongoingAuctions(param0: Bytes): X2Y2__ongoingAuctionsResult {
    let result = super.call(
      "ongoingAuctions",
      "ongoingAuctions(bytes32):(uint256,uint256,uint256,address)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return new X2Y2__ongoingAuctionsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toAddress()
    );
  }

  try_ongoingAuctions(
    param0: Bytes
  ): ethereum.CallResult<X2Y2__ongoingAuctionsResult> {
    let result = super.tryCall(
      "ongoingAuctions",
      "ongoingAuctions(bytes32):(uint256,uint256,uint256,address)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new X2Y2__ongoingAuctionsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toAddress()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  run1(
    order: X2Y2__run1InputOrderStruct,
    shared: X2Y2__run1InputSharedStruct,
    detail: X2Y2__run1InputDetailStruct
  ): BigInt {
    let result = super.call(
      "run1",
      "run1((uint256,address,uint256,uint256,uint256,uint256,address,bytes,(uint256,bytes)[],bytes32,bytes32,uint8,uint8),(uint256,uint256,uint256,uint256,address,bool),(uint8,uint256,uint256,uint256,bytes32,address,bytes,uint256,uint256,uint256,(uint256,address)[])):(uint256)",
      [
        ethereum.Value.fromTuple(order),
        ethereum.Value.fromTuple(shared),
        ethereum.Value.fromTuple(detail)
      ]
    );

    return result[0].toBigInt();
  }

  try_run1(
    order: X2Y2__run1InputOrderStruct,
    shared: X2Y2__run1InputSharedStruct,
    detail: X2Y2__run1InputDetailStruct
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "run1",
      "run1((uint256,address,uint256,uint256,uint256,uint256,address,bytes,(uint256,bytes)[],bytes32,bytes32,uint8,uint8),(uint256,uint256,uint256,uint256,address,bool),(uint8,uint256,uint256,uint256,bytes32,address,bytes,uint256,uint256,uint256,(uint256,address)[])):(uint256)",
      [
        ethereum.Value.fromTuple(order),
        ethereum.Value.fromTuple(shared),
        ethereum.Value.fromTuple(detail)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  signers(param0: Address): boolean {
    let result = super.call("signers", "signers(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_signers(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("signers", "signers(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  weth(): Address {
    let result = super.call("weth", "weth():(address)", []);

    return result[0].toAddress();
  }

  try_weth(): ethereum.CallResult<Address> {
    let result = super.tryCall("weth", "weth():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class CancelCall extends ethereum.Call {
  get inputs(): CancelCall__Inputs {
    return new CancelCall__Inputs(this);
  }

  get outputs(): CancelCall__Outputs {
    return new CancelCall__Outputs(this);
  }
}

export class CancelCall__Inputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }

  get itemHashes(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }

  get deadline(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class CancelCall__Outputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get feeCapPct_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get weth_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RunCall extends ethereum.Call {
  get inputs(): RunCall__Inputs {
    return new RunCall__Inputs(this);
  }

  get outputs(): RunCall__Outputs {
    return new RunCall__Outputs(this);
  }
}

export class RunCall__Inputs {
  _call: RunCall;

  constructor(call: RunCall) {
    this._call = call;
  }

  get input(): RunCallInputStruct {
    return changetype<RunCallInputStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class RunCall__Outputs {
  _call: RunCall;

  constructor(call: RunCall) {
    this._call = call;
  }
}

export class RunCallInputStruct extends ethereum.Tuple {
  get orders(): Array<RunCallInputOrdersStruct> {
    return this[0].toTupleArray<RunCallInputOrdersStruct>();
  }

  get details(): Array<RunCallInputDetailsStruct> {
    return this[1].toTupleArray<RunCallInputDetailsStruct>();
  }

  get shared(): RunCallInputSharedStruct {
    return changetype<RunCallInputSharedStruct>(this[2].toTuple());
  }

  get r(): Bytes {
    return this[3].toBytes();
  }

  get s(): Bytes {
    return this[4].toBytes();
  }

  get v(): i32 {
    return this[5].toI32();
  }
}

export class RunCallInputOrdersStruct extends ethereum.Tuple {
  get salt(): BigInt {
    return this[0].toBigInt();
  }

  get user(): Address {
    return this[1].toAddress();
  }

  get network(): BigInt {
    return this[2].toBigInt();
  }

  get intent(): BigInt {
    return this[3].toBigInt();
  }

  get delegateType(): BigInt {
    return this[4].toBigInt();
  }

  get deadline(): BigInt {
    return this[5].toBigInt();
  }

  get currency(): Address {
    return this[6].toAddress();
  }

  get dataMask(): Bytes {
    return this[7].toBytes();
  }

  get items(): Array<RunCallInputOrdersItemsStruct> {
    return this[8].toTupleArray<RunCallInputOrdersItemsStruct>();
  }

  get r(): Bytes {
    return this[9].toBytes();
  }

  get s(): Bytes {
    return this[10].toBytes();
  }

  get v(): i32 {
    return this[11].toI32();
  }

  get signVersion(): i32 {
    return this[12].toI32();
  }
}

export class RunCallInputOrdersItemsStruct extends ethereum.Tuple {
  get price(): BigInt {
    return this[0].toBigInt();
  }

  get data(): Bytes {
    return this[1].toBytes();
  }
}

export class RunCallInputDetailsStruct extends ethereum.Tuple {
  get op(): i32 {
    return this[0].toI32();
  }

  get orderIdx(): BigInt {
    return this[1].toBigInt();
  }

  get itemIdx(): BigInt {
    return this[2].toBigInt();
  }

  get price(): BigInt {
    return this[3].toBigInt();
  }

  get itemHash(): Bytes {
    return this[4].toBytes();
  }

  get executionDelegate(): Address {
    return this[5].toAddress();
  }

  get dataReplacement(): Bytes {
    return this[6].toBytes();
  }

  get bidIncentivePct(): BigInt {
    return this[7].toBigInt();
  }

  get aucMinIncrementPct(): BigInt {
    return this[8].toBigInt();
  }

  get aucIncDurationSecs(): BigInt {
    return this[9].toBigInt();
  }

  get fees(): Array<RunCallInputDetailsFeesStruct> {
    return this[10].toTupleArray<RunCallInputDetailsFeesStruct>();
  }
}

export class RunCallInputDetailsFeesStruct extends ethereum.Tuple {
  get percentage(): BigInt {
    return this[0].toBigInt();
  }

  get to(): Address {
    return this[1].toAddress();
  }
}

export class RunCallInputSharedStruct extends ethereum.Tuple {
  get salt(): BigInt {
    return this[0].toBigInt();
  }

  get deadline(): BigInt {
    return this[1].toBigInt();
  }

  get amountToEth(): BigInt {
    return this[2].toBigInt();
  }

  get amountToWeth(): BigInt {
    return this[3].toBigInt();
  }

  get user(): Address {
    return this[4].toAddress();
  }

  get canFail(): boolean {
    return this[5].toBoolean();
  }
}

export class Run1Call extends ethereum.Call {
  get inputs(): Run1Call__Inputs {
    return new Run1Call__Inputs(this);
  }

  get outputs(): Run1Call__Outputs {
    return new Run1Call__Outputs(this);
  }
}

export class Run1Call__Inputs {
  _call: Run1Call;

  constructor(call: Run1Call) {
    this._call = call;
  }

  get order(): Run1CallOrderStruct {
    return changetype<Run1CallOrderStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get shared(): Run1CallSharedStruct {
    return changetype<Run1CallSharedStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }

  get detail(): Run1CallDetailStruct {
    return changetype<Run1CallDetailStruct>(
      this._call.inputValues[2].value.toTuple()
    );
  }
}

export class Run1Call__Outputs {
  _call: Run1Call;

  constructor(call: Run1Call) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class Run1CallOrderStruct extends ethereum.Tuple {
  get salt(): BigInt {
    return this[0].toBigInt();
  }

  get user(): Address {
    return this[1].toAddress();
  }

  get network(): BigInt {
    return this[2].toBigInt();
  }

  get intent(): BigInt {
    return this[3].toBigInt();
  }

  get delegateType(): BigInt {
    return this[4].toBigInt();
  }

  get deadline(): BigInt {
    return this[5].toBigInt();
  }

  get currency(): Address {
    return this[6].toAddress();
  }

  get dataMask(): Bytes {
    return this[7].toBytes();
  }

  get items(): Array<Run1CallOrderItemsStruct> {
    return this[8].toTupleArray<Run1CallOrderItemsStruct>();
  }

  get r(): Bytes {
    return this[9].toBytes();
  }

  get s(): Bytes {
    return this[10].toBytes();
  }

  get v(): i32 {
    return this[11].toI32();
  }

  get signVersion(): i32 {
    return this[12].toI32();
  }
}

export class Run1CallOrderItemsStruct extends ethereum.Tuple {
  get price(): BigInt {
    return this[0].toBigInt();
  }

  get data(): Bytes {
    return this[1].toBytes();
  }
}

export class Run1CallSharedStruct extends ethereum.Tuple {
  get salt(): BigInt {
    return this[0].toBigInt();
  }

  get deadline(): BigInt {
    return this[1].toBigInt();
  }

  get amountToEth(): BigInt {
    return this[2].toBigInt();
  }

  get amountToWeth(): BigInt {
    return this[3].toBigInt();
  }

  get user(): Address {
    return this[4].toAddress();
  }

  get canFail(): boolean {
    return this[5].toBoolean();
  }
}

export class Run1CallDetailStruct extends ethereum.Tuple {
  get op(): i32 {
    return this[0].toI32();
  }

  get orderIdx(): BigInt {
    return this[1].toBigInt();
  }

  get itemIdx(): BigInt {
    return this[2].toBigInt();
  }

  get price(): BigInt {
    return this[3].toBigInt();
  }

  get itemHash(): Bytes {
    return this[4].toBytes();
  }

  get executionDelegate(): Address {
    return this[5].toAddress();
  }

  get dataReplacement(): Bytes {
    return this[6].toBytes();
  }

  get bidIncentivePct(): BigInt {
    return this[7].toBigInt();
  }

  get aucMinIncrementPct(): BigInt {
    return this[8].toBigInt();
  }

  get aucIncDurationSecs(): BigInt {
    return this[9].toBigInt();
  }

  get fees(): Array<Run1CallDetailFeesStruct> {
    return this[10].toTupleArray<Run1CallDetailFeesStruct>();
  }
}

export class Run1CallDetailFeesStruct extends ethereum.Tuple {
  get percentage(): BigInt {
    return this[0].toBigInt();
  }

  get to(): Address {
    return this[1].toAddress();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UpdateDelegatesCall extends ethereum.Call {
  get inputs(): UpdateDelegatesCall__Inputs {
    return new UpdateDelegatesCall__Inputs(this);
  }

  get outputs(): UpdateDelegatesCall__Outputs {
    return new UpdateDelegatesCall__Outputs(this);
  }
}

export class UpdateDelegatesCall__Inputs {
  _call: UpdateDelegatesCall;

  constructor(call: UpdateDelegatesCall) {
    this._call = call;
  }

  get toAdd(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get toRemove(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }
}

export class UpdateDelegatesCall__Outputs {
  _call: UpdateDelegatesCall;

  constructor(call: UpdateDelegatesCall) {
    this._call = call;
  }
}

export class UpdateFeeCapCall extends ethereum.Call {
  get inputs(): UpdateFeeCapCall__Inputs {
    return new UpdateFeeCapCall__Inputs(this);
  }

  get outputs(): UpdateFeeCapCall__Outputs {
    return new UpdateFeeCapCall__Outputs(this);
  }
}

export class UpdateFeeCapCall__Inputs {
  _call: UpdateFeeCapCall;

  constructor(call: UpdateFeeCapCall) {
    this._call = call;
  }

  get val(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateFeeCapCall__Outputs {
  _call: UpdateFeeCapCall;

  constructor(call: UpdateFeeCapCall) {
    this._call = call;
  }
}

export class UpdateSignersCall extends ethereum.Call {
  get inputs(): UpdateSignersCall__Inputs {
    return new UpdateSignersCall__Inputs(this);
  }

  get outputs(): UpdateSignersCall__Outputs {
    return new UpdateSignersCall__Outputs(this);
  }
}

export class UpdateSignersCall__Inputs {
  _call: UpdateSignersCall;

  constructor(call: UpdateSignersCall) {
    this._call = call;
  }

  get toAdd(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get toRemove(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }
}

export class UpdateSignersCall__Outputs {
  _call: UpdateSignersCall;

  constructor(call: UpdateSignersCall) {
    this._call = call;
  }
}
