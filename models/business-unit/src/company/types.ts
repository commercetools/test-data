import type { Company, CompanyDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

//Company
export type TCompany = Company;
export type TCompanyBuilder = TBuilder<TCompany>;
export type TCreateCompanyBuilder = () => TCompanyBuilder;
// CompanyGraphql is not supported at this time.
// export type TCompanyDraftGraphql = TCompanyDraft & {
//   __typename: 'Company';
// };

//CompanyDraft
export type TCompanyDraft = CompanyDraft;
export type TCompanyDraftBuilder = TBuilder<TCompanyDraft>;
export type TCreateCompanyDraftBuilder = () => TCompanyDraftBuilder;

// CompanyDraftGraphql is not supported at this time.
// export type TCompanyDraftGraphql = TCompanyDraft & {
//   __typename: 'CompanyDraft';
// };
