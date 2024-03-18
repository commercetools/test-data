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
  .defaultChannel()
  .build<TChannelDraft>();
const variant = ProductVariantDraft.presets.sampleDataB2B
  .n123Qr01()
  .build<TProductVariantDraft>();

const n123Qr20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('n123-qr-2015-3')
    .sku(variant.sku!)
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1056000))
    .channel(KeyReferenceDraft.presets.channel().key(channel.key!))
    .active(true);

export default n123Qr20153;
