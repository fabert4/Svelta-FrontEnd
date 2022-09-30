/**
 * Generated by orval v6.9.6 🍺
 * Do not edit manually.
 * CleanArchitecture
 * OpenAPI spec version: 1.0.0
 */
import type { PacketUpdateModelDescription } from './packetUpdateModelDescription';
import type { PacketUpdateModelDimensions } from './packetUpdateModelDimensions';
import type { PacketUpdateModelIdentifier } from './packetUpdateModelIdentifier';
import type { ItemUpdateModel } from './itemUpdateModel';
import type { PacketUpdateModelMonetary } from './packetUpdateModelMonetary';
import type { PacketUpdateModelQuantity } from './packetUpdateModelQuantity';

export interface PacketUpdateModel {
  description?: PacketUpdateModelDescription;
  dimensions?: PacketUpdateModelDimensions;
  id: number;
  identifier?: PacketUpdateModelIdentifier;
  items: ItemUpdateModel[];
  monetary?: PacketUpdateModelMonetary;
  quantity?: PacketUpdateModelQuantity;
}