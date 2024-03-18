import { ChannelDraft, TChannelDraft } from '@commercetools-test-data/channel';
import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const channel = ChannelDraft.presets.sampleDataB2B
  .deFrUk()
  .build<TChannelDraft>();
const variant = ProductVariantDraft.presets.sampleDataB2B
  .ww567Yz01()
  .build<TProductVariantDraft>();

const ww567YzRed5 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ww567-yz-red-5')
    .sku(variant.sku!)
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(4050000))
    .channel(KeyReferenceDraft.presets.channel().key(channel.key!))
    .active(true);

export default ww567YzRed5;
