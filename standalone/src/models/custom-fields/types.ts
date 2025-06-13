import type {
  CustomFields,
  CustomFieldsDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpCustomFieldsType, TCtpCustomFieldsDraft } from '@/graphql-types';

export type TCustomFieldsRest = CustomFields;
export type TCustomFieldsGraphql = TCtpCustomFieldsType;
export type TCustomFieldsDraftRest = CustomFieldsDraft;
export type TCustomFieldsDraftGraphql = TCtpCustomFieldsDraft;

export type TCreateCustomFieldsBuilder<
  TCustomFieldsModel extends
    | TCustomFieldsRest
    | TCustomFieldsGraphql
    | TCustomFieldsDraftRest
    | TCustomFieldsDraftGraphql,
> = () => TBuilder<TCustomFieldsModel>;
