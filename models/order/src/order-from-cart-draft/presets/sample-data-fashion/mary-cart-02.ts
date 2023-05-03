import { CartDraft } from '@commercetools-test-data/cart';
import type { TCartDraft } from '@commercetools-test-data/cart';
import { KeyReference } from '@commercetools-test-data/commons';
import { constants } from '../../../index';
import { TOrderFromCartDraftBuilder } from '../../../types';
import * as OrderFromCartDraft from '../../index';

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
