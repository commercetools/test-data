import type {
  BusinessUnitKeyReference,
  Company,
  CompanyDraft,
  StoreKeyReference,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

//BusinessUnitDraft
export type TCompanyDraft = CompanyDraft;

//BusinessUnitDraftGraphql is only scaffolding at this time
export type TCompanyDraftGraphql = TCompanyDraft;

//BusinessUnit
export type TCompany = Company;
export type TCompanyGraphql = Omit<TCompany, 'topLevelUnit' | 'parentUnit'> & {
  ancestors: [];
  __typename: 'BusinessUnit';
  storesRef?: StoreKeyReference[];
  inheritedStoresRef?: StoreKeyReference[];
  parentUnitRef: null;
  parentUnit?: BusinessUnitKeyReference;
  topLevelUnitRef: BusinessUnitKeyReference;
  topLevelUnit: TCompany | TCompanyGraphql;
};

export type TCompanyDraftBuilder = TBuilder<TCompanyDraft>;
export type TCreateCompanyDraftBuilder = () => TCompanyDraftBuilder;

export type TCompanyBuilder = TBuilder<TCompany>;
export type TCreateCompanyBuilder = () => TCompanyBuilder;
