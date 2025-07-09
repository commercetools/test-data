import type { TBuilder } from '@/core';
import { Company } from '@/models/business-unit';
import { KeyReference, LocalizedString, ReferenceRest } from '@/models/commons';
import { Customer } from '@/models/customer/customer';
import { StoreGraphql } from '@/models/store';
import { CustomFieldBooleanType } from '@/models/type';
import {
  ShoppingListLineItemRest,
  ShoppingListLineItemGraphql,
} from '../../shopping-list-line-item';
import { TextLineItemRest, TextLineItemGraphql } from '../../text-line-item';
import { ShoppingListRest, ShoppingListGraphql, ShoppingList } from '../index';
import {
  TShoppingListRest,
  TShoppingListGraphql,
  TShoppingList,
} from '../types';

const anonymousId = ReferenceRest.random().build().id;
const key = KeyReference.random().build().key;

export const restPreset = (): TBuilder<TShoppingListRest> =>
  ShoppingListRest.random()
    .anonymousId(anonymousId)
    .businessUnit(KeyReference.presets.businessUnit())
    .custom(CustomFieldBooleanType.random())
    .customer(ReferenceRest.presets.customerReference())
    .description(LocalizedString.random())
    .key(key)
    .lineItems([ShoppingListLineItemRest.random()])
    .slug(LocalizedString.presets.ofSlugs())
    .store(KeyReference.presets.store())
    .textLineItems([TextLineItemRest.random()]);

export const graphqlPreset = (): TBuilder<TShoppingListGraphql> =>
  ShoppingListGraphql.random()
    .anonymousId(anonymousId)
    .businessUnit(Company.random())
    .custom(CustomFieldBooleanType.random())
    .customer(Customer.random())
    .descriptionAllLocales(LocalizedString.random())
    .key(key)
    .lineItems([ShoppingListLineItemGraphql.random()])
    .slugAllLocales(LocalizedString.presets.ofSlugs())
    .store(StoreGraphql.random())
    .textLineItems([TextLineItemGraphql.random()]);

export const compatPreset = (): TBuilder<TShoppingList> =>
  ShoppingList.random()
    .anonymousId(anonymousId)
    .businessUnit(KeyReference.presets.businessUnit())
    .custom(CustomFieldBooleanType.random())
    .customer(ReferenceRest.presets.customerReference())
    .description(LocalizedString.random())
    .key(key)
    .lineItems([ShoppingListLineItemRest.random()])
    .slug(LocalizedString.presets.ofSlugs())
    .store(KeyReference.presets.store())
    .textLineItems([TextLineItemRest.random()]);
