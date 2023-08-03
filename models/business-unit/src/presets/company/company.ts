import * as CompanyDraft from '../../company/company-draft';
import { TCompanyDraftBuilder } from '../../index';
import * as BusinessUnitDraft from '../../index';
import { TBusinessUnitDraftBuilder } from '../../types';

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

// export default company;
