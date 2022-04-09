import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CarMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Car {
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly description?: string | null;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Car, CarMetaData>);
  static copyOf(source: Car, mutator: (draft: MutableModel<Car, CarMetaData>) => MutableModel<Car, CarMetaData> | void): Car;
}