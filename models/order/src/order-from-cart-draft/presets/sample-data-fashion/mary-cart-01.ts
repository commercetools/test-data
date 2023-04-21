import { CartDraft } from '@commercetools-test-data/cart';
import type { TCartDraft } from '@commercetools-test-data/cart';
import { KeyReference } from '@commercetools-test-data/commons';
import * as OrderFromCartDraft from '../../';
import { constants } from '../../..';
import { TOrderFromCartDraftBuilder } from '../../../types';

const maryCartDraft01 = CartDraft.presets.sampleDataFashion
  .marySmith01()
  .build<TCartDraft>();

const maryCart01 = (versionNumber: number): TOrderFromCartDraftBuilder =>
  OrderFromCartDraft.presets
    .empty()
    .version(versionNumber)
    .cart(KeyReference.random().key(maryCartDraft01.key!).typeId('cart'))
    .orderState(constants.orderState.Cancelled);

export default maryCart01;
