import {
  KeyReferenceDraft,
  AddressDraft,
} from '../../../../../commons';
import { type TStoreDraft, StoreDraft } from '../../../../../store';
import { AssociateDraft } from '../../../../associate';
import { storeMode, unitType, associateMode } from '../../../constants';
import { type TCompanyDraftBuilder } from '../../../types';
import * as CompanyDraft from '../../index';

const usMediumCustomersStore = StoreDraft.presets.sampleDataB2B
  .usMediumCustomers()
  .build<TStoreDraft>();

const libertyCraneSolutionsLlcUs = (): TCompanyDraftBuilder =>
  CompanyDraft.presets
    .empty()
    .key('liberty-crane-solutions-llc-us')
    .name('Liberty Crane Solutions LLC')
    .contactEmail('info@lcs.com')
    .unitType(unitType.Company)
    .storeMode(storeMode.Explicit)
    .associateMode(associateMode.Explicit)
    .stores([
      KeyReferenceDraft.presets.store().key(usMediumCustomersStore.key!),
    ])
    .associates([
      AssociateDraft.presets.sampleDataB2B.oliviaNewton(),
      AssociateDraft.presets.sampleDataB2B.williamDavis(),
      AssociateDraft.presets.sampleDataB2B.avaBrown(),
    ])
    .addresses([
      AddressDraft.presets.sampleDataB2B.libertyCraneSolutionsLlcUsNc1Address(),
    ])
    .defaultShippingAddress(0)
    .defaultBillingAddress(0);

export default libertyCraneSolutionsLlcUs;
