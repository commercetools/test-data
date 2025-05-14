import { KeyReferenceDraft, AddressDraft } from '../../../../../commons';
import { AssociateDraft } from '../../../../associate';
import { CompanyDraft, type TCompanyDraft } from '../../../../company';
import { storeMode, unitType, associateMode } from '../../../constants';
import type { TDivisionDraftBuilder } from '../../../types';
import * as DivisionDraft from '../../index';

const lifttechSolutionsLtdCompany = CompanyDraft.presets.sampleDataB2B
  .lifttechSolutionsLtd()
  .build<TCompanyDraft>();

const lifttechSolutionsLtdFr = (): TDivisionDraftBuilder =>
  DivisionDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-fr')
    .name('LiftTech Solutions SARL')
    .contactEmail('info.fr@ltsl.com')
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
