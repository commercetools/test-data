import {
  KeyReferenceDraft,
  AddressDraft,
} from '@commercetools-test-data/commons';
import { type TStoreDraft, StoreDraft } from '@commercetools-test-data/store';
import { AssociateDraft } from '../../../../associate';
import { CompanyDraft, type TCompanyDraft } from '../../../../company';
import { status, storeMode, unitType, associateMode } from '../../../constants';
import type { TDivisionDraftBuilder } from '../../../types';
import * as DivisionDraft from '../../index';

const lifttechSolutionsLtdCompany = CompanyDraft.presets.sampleDataB2B
  .lifttechSolutionsLtd()
  .build<TCompanyDraft>();

const spainStore = StoreDraft.presets.sampleDataB2B
  .spain()
  .build<TStoreDraft>();

const lifttechSolutionsLtdEs = (): TDivisionDraftBuilder =>
  DivisionDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-es')
    .name('LiftTech Soluciones S.L.')
    .unitType(unitType.Division)
    .storeMode(storeMode.Explicit)
    .associateMode(associateMode.ExplicitAndFromParent)
    .stores([KeyReferenceDraft.presets.store().key(spainStore.key!)])
    .associates([
      AssociateDraft.presets.sampleDataB2B.carlosGarcia(),
      AssociateDraft.presets.sampleDataB2B.sofiaLopez(),
    ])
    .addresses([
      AddressDraft.presets.sampleDataB2B.lifttechSolutionsLtdEsAddress(),
    ])
    .parentUnit([
      KeyReferenceDraft.presets
        .businessUnit()
        .key(lifttechSolutionsLtdCompany.key!),
    ])
    .defaultShippingAddress(0)
    .defaultBillingAddress(0);

export default lifttechSolutionsLtdEs;
