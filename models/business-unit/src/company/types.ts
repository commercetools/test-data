import type { Company, CompanyDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCompany = Company;
export type TCompanyDraft = CompanyDraft;

// export type TCompanyGraphql = TCompany & {
//   __typename: 'Company';
// };
// export type TCompanyDraftGraphql = TCompanyDraft;

export type TCompanyBuilder = TBuilder<TCompany>;
export type TCompanyDraftBuilder = TBuilder<TCompanyDraft>;
export type TCreateCompanyBuilder = () => TCompanyBuilder;
export type TCreateCompanyDraftBuilder = () => TCompanyDraftBuilder;
