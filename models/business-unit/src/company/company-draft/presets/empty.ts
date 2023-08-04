// import BusinessUnitDraft from '../builder';
// import type { TBusinessUnitDraftBuilder } from '../../business-unit/types';

// const empty = (): TBusinessUnitDraftBuilder => BusinessUnitDraft();
// // .key(undefined)
// // .status(undefined)
// // .name(undefined)
// // .addresses(undefined)
// // .associates([]);
// export default empty;

//empty.spec.ts file
// import type { TBusinessUnitDraft } from '../../../business-unit/types';
// import empty from './empty';

// it('should set all specified fields to undefined', () => {
//   const emptyBusinessUnitDraft = empty().build<TBusinessUnitDraft>();
//   expect(emptyBusinessUnitDraft).toMatchObject({
//     key: undefined,
//     // TODO
//   });
// });

// import type { TCompanyDraftBuilder } from '../../types';
// import CompanyDraft from '../builder';

// //This preset forces a null for

// const empty = (): TCompanyDraftBuilder =>
//   CompanyDraft().key(undefined!).name(undefined!);

// export default empty;

// import { TCompanyDraft } from '../../types';
// import empty from './empty';

// it(`should null all values except unitType`, () => {
//   const emptyCompanyDraft = empty().build<TCompanyDraft>();
//   expect(emptyCompanyDraft).toMatchObject({
//     key: undefined,
//     name: undefined,
//     unitType: 'Company',
//   });
// });

export {};
