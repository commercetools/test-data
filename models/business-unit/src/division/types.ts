import type {
  BusinessUnitKeyReference,
  Division,
  DivisionDraft,
  StoreKeyReference,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TCompanyGraphql } from '../company/types';

//BusinessUnitDraft
export type TDivisionDraft = DivisionDraft;

//BusinessUnitDraftGraphql is only scaffolding at this time
export type TDivisionDraftGraphql = TDivisionDraft;

//BusinessUnit
export type TDivision = Division;
export type TDivisionGraphql = Omit<
  TDivision,
  'topLevelUnit' | 'parentUnit'
> & {
  ancestors: Array<TCompanyGraphql | TDivisionGraphql>;
  inheritedStoresRef?: StoreKeyReference[];
  __typename: 'BusinessUnit';
  storesRef?: StoreKeyReference[];
  parentUnitRef: BusinessUnitKeyReference;
  parentUnit?: TDivisionGraphql | TCompanyGraphql;
  topLevelUnitRef: BusinessUnitKeyReference;
  topLevelUnit: TCompanyGraphql;
};

export type TDivisionDraftBuilder = TBuilder<TDivisionDraft>;
export type TCreateDivisionDraftBuilder = () => TDivisionDraftBuilder;

export type TDivisionBuilder = TBuilder<TDivision>;
export type TCreateDivisionBuilder = () => TDivisionBuilder;
