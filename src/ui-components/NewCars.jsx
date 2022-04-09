/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Car } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CarRentalCard from "./CarRentalCard";
import { Collection } from "@aws-amplify/ui-react";
export default function NewCars(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Car,
        }).items;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "NewCars")}
    >
      {(item, index) => (
        <CarRentalCard
          car={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CarRentalCard>
      )}
    </Collection>
  );
}
