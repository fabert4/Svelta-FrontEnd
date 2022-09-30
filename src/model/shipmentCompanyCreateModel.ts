/**
 * Generated by orval v6.9.6 🍺
 * Do not edit manually.
 * CleanArchitecture
 * OpenAPI spec version: 1.0.0
 */
import type { AddressCreateModel } from './addressCreateModel';
import type { ShipmentCompanyCreateModelCargoledger } from './shipmentCompanyCreateModelCargoledger';
import type { ShipmentCompanyCreateModelPerson } from './shipmentCompanyCreateModelPerson';
import type { ShipmentCompanyCreateModelShared } from './shipmentCompanyCreateModelShared';

export interface ShipmentCompanyCreateModel {
  actorId: string;
  address: AddressCreateModel;
  cargoledger?: ShipmentCompanyCreateModelCargoledger;
  name: string;
  person?: ShipmentCompanyCreateModelPerson;
  shared?: ShipmentCompanyCreateModelShared;
}
