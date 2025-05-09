import { LocalizedStringDraft } from '../../../../../commons';
import {
  CartDiscountLineItemsTargetDraft,
  CartDiscountValueRelativeDraft,
} from '../../../../index';
import { stackingMode } from '../../../constants';
import type { TCartDiscountDraftBuilder } from '../../../types';
import * as CartDiscountDraft from '../../index';

const spendSaveTenPercent = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .value(CartDiscountValueRelativeDraft.random().permyriad(1000))
    .cartPredicate('totalPrice = "100.00 EUR"')
    .target(CartDiscountLineItemsTargetDraft.random().predicate('1=1'))
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Save 10% when you spend 100EUR')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Save 10% when you spend 100EUR')
    )
    .stackingMode(stackingMode.Stacking)
    .isActive(true)
    .requiresDiscountCode(false)
    .sortOrder('0.897987087')
    .key('Spend100EURSave10pct');

export default spendSaveTenPercent;
