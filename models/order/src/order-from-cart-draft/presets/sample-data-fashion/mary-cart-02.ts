import { CartDraft } from '@commercetools-test-data/cart';
import type { TCartDraft } from '@commercetools-test-data/cart';
import { KeyReference } from '@commercetools-test-data/commons';
import * as OrderFromCartDraft from '../../';
import { constants } from '../../..';
import { TOrderFromCartDraftBuilder } from '../../../types';

const maryCartDraft02 = CartDraft.presets.sampleDataFashion
  .marySmith02()
  .build<TCartDraft>();

const maryCart02 = (versionNumber: number): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft.presets
    .empty()
    .version(versionNumber)
    .cart(KeyReference.random().key(maryCartDraft02.key!).typeId('cart'))
    .orderState(constants.orderState.Complete);

export default maryCart02;
