import { AddressDraft } from '@commercetools-test-data/commons';
import { AssociateDraft } from '../../../../associate';
import { storeMode, unitType, associateMode } from '../../../constants';
import type { TCompanyDraftBuilder } from '../../../types';
import * as DivisionDraft from '../../index';

const lifttechSolutionsLtdDe = (): TCompanyDraftBuilder =>
  DivisionDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-de')
    .name('LiftTech Lösungen GmbH')
    .unitType(unitType.Company)
    .storeMode(storeMode.Explicit)
    .associateMode(associateMode.Explicit)
    .associates([
      AssociateDraft.presets.sampleDataB2B.oliverSmith(),
      AssociateDraft.presets.sampleDataB2B.ameliaJones(),
      AssociateDraft.presets.sampleDataB2B.williamTaylor(),
    ])
    .addresses([
      AddressDraft.presets.sampleDataB2B.lifttechSolutionsLtdDeAddress(),
    ])
    .defaultShippingAddress(0)
    .defaultBillingAddress(0);

export default lifttechSolutionsLtdDe;
