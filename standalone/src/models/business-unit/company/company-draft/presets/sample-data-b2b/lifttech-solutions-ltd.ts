import { KeyReferenceDraft, AddressDraft } from '../../../../../commons';
import { type TStoreDraft, StoreDraft } from '../../../../../store';
import { AssociateDraft } from '../../../../associate';
import { storeMode, unitType, associateMode } from '../../../constants';
import { type TCompanyDraftBuilder } from '../../../types';
import * as CompanyDraft from '../../index';

const deFrUkStore = StoreDraft.presets.sampleDataB2B
  .deFrUk()
  .build<TStoreDraft>();

const lifttechSolutionsLtd = (): TCompanyDraftBuilder =>
  CompanyDraft.presets
    .empty()
    .key('lifttech-solutions-ltd')
    .name('LiftTech Solutions Ltd')
    .contactEmail('info@ltsl.com')
    .unitType(unitType.Company)
    .storeMode(storeMode.Explicit)
    .associateMode(associateMode.Explicit)
    .stores([KeyReferenceDraft.presets.store().key(deFrUkStore.key!)])
    .associates([
      AssociateDraft.presets.sampleDataB2B.oliverSmith(),
      AssociateDraft.presets.sampleDataB2B.ameliaJones(),
      AssociateDraft.presets.sampleDataB2B.williamTaylor(),
    ])
    .addresses([
      AddressDraft.presets.sampleDataB2B.lifttechSolutionsLtdAddress(),
    ])
    .defaultShippingAddress(0)
    .defaultBillingAddress(0);

export default lifttechSolutionsLtd;
