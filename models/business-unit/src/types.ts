import type {
  BusinessUnitKeyReference,
  KeyReference,
  Store,
  Company,
  Division,
  CompanyDraft,
  DivisionDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

//BusinessUnitDraft
export type TCompanyDraft = CompanyDraft;
export type TDivisionDraft = DivisionDraft;
export type TCompanyDraftBuilder = TBuilder<TCompanyDraft>;
export type TDivisionDraftBuilder = TBuilder<TDivisionDraft>;
export type TCreateCompanyDraftBuilder = () => TCompanyDraftBuilder;
export type TCreateDivisionDraftBuilder = () => TDivisionDraftBuilder;
//BusinessUnitDraftGraphql is only scaffolding at this time
export type TCompanyDraftGraphql = TCompanyDraft & {
  __typename: 'BusinessUnitDraft';
};
export type TDivisionDraftGraphql = TDivisionDraft & {
  __typename: 'BusinessUnitDraft';
};

//BusinessUnit
export type TCompany = Company;
export type TDivision = Division;
export type TCompanyBuilder = TBuilder<TCompany>;
export type TDivisionBuilder = TBuilder<TDivision>;
export type TCreateCompanyBuilder = () => TCompanyBuilder;
export type TCreateDivisionBuilder = () => TDivisionBuilder;
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
export type TDivisionGraphql = Omit<
  TDivision,
  'topLevelUnit' | 'parentUnit'
> & {
  ancestors: Array<TCompanyGraphql | TDivisionGraphql>;
  inheritedStores: Array<Store> | null;
  __typename: 'BusinessUnit';
  storesRef: KeyReference;
  parentUnitRef: BusinessUnitKeyReference;
  parentUnit?: TDivisionGraphql | TCompanyGraphql;
  topLevelUnitRef: BusinessUnitKeyReference;
  topLevelUnit: TCompanyGraphql;
};
