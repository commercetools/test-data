import { AddressDraft } from '@commercetools-test-data/commons';
import * as CustomLineItemDraft from '../../../../custom-line-item/custom-line-item-draft';
import type { TCartDraftBuilder } from '../../../types';
import * as CartDraft from '../../index';

const withCustomLineItem = (): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .customLineItems([
      CustomLineItemDraft.presets.changeHistoryData.customLineItemWithUsdCurrencyCode(),
    ])
    .currency('USD')
    .country('US')
    .locale('en-US')
    .shippingAddress(
      AddressDraft.presets.changeHistoryData.withCountryUsNoState()
    );
export default withCustomLineItem;
