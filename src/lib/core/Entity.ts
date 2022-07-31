import * as app from '..';
import {entityOffsets} from './offsets/entityOffsets';

export abstract class Entity {
  constructor(address: bigint,
    readonly localOrigin = new app.VectorPointer(address + entityOffsets.localOrigin),
    readonly teamNum = new app.UInt8Pointer(address + entityOffsets.iTeamNum),
    readonly name = new app.UInt64Pointer(address + entityOffsets.iName),
    readonly glowEnable = new app.UInt8Pointer(address + entityOffsets.glowEnable),
    readonly thirdPerson = new app.UInt8Pointer(address + entityOffsets.thirdPerson),
    readonly glowThroughWalls = new app.UInt8Pointer(address + entityOffsets.glowThroughWall)) {}
}
