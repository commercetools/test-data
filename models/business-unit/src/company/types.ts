import type {
  BusinessUnitKeyReference,
  KeyReference,
  Company,
  CompanyDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

//BusinessUnitDraft
export type TCompanyDraft = CompanyDraft;

//BusinessUnitDraftGraphql is only scaffolding at this time
export type TCompanyDraftGraphql = TCompanyDraft & {
  __typename: 'BusinessUnitDraft';
};

//BusinessUnit
export type TCompany = Company;
export type TCompanyGraphql = Omit<TCompany, 'topLevelUnit' | 'parentUnit'> & {
  ancestors: [];
  inheritedStores: null;
  __typename: 'BusinessUnit';
  storesRef: KeyReference;
  parentUnitRef: null;
  parentUnit?: BusinessUnitKeyReference;
  topLevelUnitRef: BusinessUnitKeyReference;
  topLevelUnit: TCompany | TCompanyGraphql;
};

export type TCompanyDraftBuilder = TBuilder<TCompanyDraft>;
export type TCreateCompanyDraftBuilder = () => TCompanyDraftBuilder;

export type TCompanyBuilder = TBuilder<TCompany>;
export type TCreateCompanyBuilder = () => TCompanyBuilder;
