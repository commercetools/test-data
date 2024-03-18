import {
  KeyReferenceDraft,
  AddressDraft,
} from '@commercetools-test-data/commons';
import { AssociateDraft } from '../../../../associate';
import { CompanyDraft, type TCompanyDraft } from '../../../../company';
import { status, storeMode, unitType, associateMode } from '../../../constants';
import type { TDivisionDraftBuilder } from '../../../types';
import * as DivisionDraft from '../../index';

const lifttechSolutionsLtdCompany = CompanyDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdDe()
  .build<TCompanyDraft>();

const lifttechSolutionsLtdFr = (): TDivisionDraftBuilder =>
  DivisionDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-fr')
    .name('LiftTech Solutions SARL')
    .unitType(unitType.Division)
    .storeMode(storeMode.FromParent)
    .associateMode(associateMode.ExplicitAndFromParent)
    .associates([
      AssociateDraft.presets.sampleDataB2B.lucasDubois(),
      AssociateDraft.presets.sampleDataB2B.camilleLefevre(),
    ])
    .addresses([
      AddressDraft.presets.sampleDataB2B.lifttechSolutionsLtdFrAddress(),
    ])
    .parentUnit(
      KeyReferenceDraft.presets
        .businessUnit()
        .key(lifttechSolutionsLtdCompany.key!)
    )
    .defaultShippingAddress(0)
    .defaultBillingAddress(0);

export default lifttechSolutionsLtdFr;
