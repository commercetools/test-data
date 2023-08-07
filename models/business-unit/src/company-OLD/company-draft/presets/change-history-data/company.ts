// import * as CompanyDraft from '../../company-draft';
// import { TCompanyDraftBuilder } from '../../../index';
// import * as BusinessUnitDraft from '../../../index';
// import { TBusinessUnitDraftBuilder } from '../../../business-unit/types';

// const myCompany = BusinessUnitDraft.presets.company.key("whatever").build(BusinessUnitDraft);
// const myDivision = BusinessUnitDraft.presets.division.key("whatever").build(BusinessUnitDraft);

// const myCompany = CompanyDraft.key("whatever").build(CompanyDraft);
// const myDivision = DivisionDraft.key("whatever").build(DivisionDraft);

// Option 1: Build a company draft directly
// const company = (): TCompanyDraftBuilder =>
//   CompanyDraft.presets.empty();

// Option 2: Build a company draft by appending values onto a business unit
// const company = (): TBusinessUnitDraftBuilder =>
//   BusinessUnitDraft.presets
//     .empty()
//     .unitType('Company');

export {};

//company.spec.ts file
// import { TBusinessUnitDraft } from '../../../../business-unit/types';
// import company from './company';

// describe('Business Unit for company', () => {
//   it('should return a CustomLineItem', () => {
//     const businessUnitForCompany = company().build<TBusinessUnitDraft>();

//     expect(businessUnitForCompany).toEqual(
//       expect.objectContaining({
//         unitType: 'Company',
//         // Check for more fields here that are shared on business unit
//       })
//     );
//   });
// });
