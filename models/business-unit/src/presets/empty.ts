import BusinessUnitDraft from '../builder';
import type { TBusinessUnitDraftBuilder } from '../types';

const empty = (): TBusinessUnitDraftBuilder => BusinessUnitDraft();
// .key(undefined)
// .status(undefined)
// .name(undefined)
// .addresses(undefined)
// .associates([]);
export default empty;
