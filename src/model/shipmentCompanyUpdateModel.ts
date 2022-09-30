/**
 * Generated by orval v6.9.6 🍺
 * Do not edit manually.
 * CleanArchitecture
 * OpenAPI spec version: 1.0.0
 */
import type { AddressUpdateModel } from './addressUpdateModel';
import type { ShipmentCompanyUpdateModelCargoledger } from './shipmentCompanyUpdateModelCargoledger';
import type { ShipmentCompanyUpdateModelPerson } from './shipmentCompanyUpdateModelPerson';
import type { ShipmentCompanyUpdateModelShared } from './shipmentCompanyUpdateModelShared';

export interface ShipmentCompanyUpdateModel {
  actorId: string;
  address: AddressUpdateModel;
  cargoledger?: ShipmentCompanyUpdateModelCargoledger;
  id: number;
  name: string;
  person?: ShipmentCompanyUpdateModelPerson;
  shared?: ShipmentCompanyUpdateModelShared;
}