import { CartDraft, type TCartDraft } from '@/models/cart/cart';
import { KeyReferenceDraft } from '@/models/commons';
import * as constants from '../../../constants';
import { TOrderFromCartDraftBuilder } from '../../../types';
import emptyPreset from '../empty';

const cart = CartDraft.presets.sampleDataFashion
  .sampleGermany02()
  .build<TCartDraft>();

const sampleGermanyCart02 = (
  versionNumber: number
): TOrderFromCartDraftBuilder =>
  emptyPreset()
    .version(versionNumber)
    .cart(KeyReferenceDraft.random().key(cart.key!).typeId('cart'))
    .orderState(constants.orderState.Complete);

export default sampleGermanyCart02;
