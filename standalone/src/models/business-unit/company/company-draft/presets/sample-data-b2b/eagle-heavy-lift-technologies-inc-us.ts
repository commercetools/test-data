import { KeyReferenceDraft, AddressDraft } from '@/models/commons';
import { type TStoreDraft, StoreDraft } from '@/models/store';
import { AssociateDraft } from '../../../../associate';
import { storeMode, unitType, associateMode } from '../../../constants';
import { type TCompanyDraftBuilder } from '../../../types';
import * as CompanyDraft from '../../index';

const usLargeCustomersStore = StoreDraft.presets.sampleDataB2B
  .usLargeCustomers()
  .build<TStoreDraft>();

const eagleHeavyLiftTechnologiesIncUs = (): TCompanyDraftBuilder =>
  CompanyDraft.presets
    .empty()
    .key('eagle-heavy-lift-technologies-inc-us')
    .name('Eagle Heavy Lift Technologies Inc.')
    .contactEmail('info@hlt.com')
    .unitType(unitType.Company)
    .storeMode(storeMode.Explicit)
    .associateMode(associateMode.Explicit)
    .stores([KeyReferenceDraft.presets.store().key(usLargeCustomersStore.key!)])
    .associates([
      AssociateDraft.presets.sampleDataB2B.jamesSmith(),
      AssociateDraft.presets.sampleDataB2B.emmaJohnson(),
      AssociateDraft.presets.sampleDataB2B.michaelWilliams(),
    ])
    .addresses([
      AddressDraft.presets.sampleDataB2B.eagleHeavyLiftTechnologiesIncUsNy1Address(),
    ])
    .defaultShippingAddress(0)
    .defaultBillingAddress(0);

export default eagleHeavyLiftTechnologiesIncUs;
