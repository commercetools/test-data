import { CartDraft } from '@commercetools-test-data/cart';
import type { TCartDraft } from '@commercetools-test-data/cart';
import { KeyReference } from '@commercetools-test-data/commons';
import { constants } from '../../../index';
import { TOrderFromCartDraftBuilder } from '../../../types';
import * as OrderFromCartDraft from '../../index';

const johnCartDraft02 = CartDraft.presets.sampleDataFashion
  .johnDoe02()
  .build<TCartDraft>();

const johnCart02 = (versionNumber: number): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft.presets
    .empty()
    .version(versionNumber)
    .cart(KeyReference.random().key(johnCartDraft02.key!).typeId('cart'))
    .orderState(constants.orderState.Confirmed)
    .paymentState(constants.paymentState.Paid)
    .shipmentState(constants.shipmentState.Delayed);

export default johnCart02;
