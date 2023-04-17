import { CartDiscountValueRelativeDraft } from '@commercetools-test-data/cart-discount-value-relative';
import { LocalizedString } from '@commercetools-test-data/commons';
import * as CartDiscountDraft from '../..';
import { stackingMode } from '../../../constants';
import { TCartDiscountDraftBuilder } from '../../../types';

const spendSaveTenPercent = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .value(CartDiscountValueRelativeDraft.random().permyriad(1000))
    .cartPredicate('totalPrice = "100.00 EUR"')
    // TODO: create `target` model
    .target(undefined)
    .name(
      LocalizedString.presets.empty()['en-US']('Save 10% when you spend 100EUR')
    )
    .description(
      LocalizedString.presets.empty()['en-US']('Save 10% when you spend 100EUR')
    )
    .stackingMode(stackingMode.Stacking)
    .isActive(true)
    .requiresDiscountCode(false)
    .sortOrder('0.897987087')
    .key('Spend100EURSave10pct');

export default spendSaveTenPercent;
