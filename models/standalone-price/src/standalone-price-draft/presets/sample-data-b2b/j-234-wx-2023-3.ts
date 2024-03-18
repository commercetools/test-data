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
  .j234Wx03()
  .build<TProductVariantDraft>();

const j234Wx20233 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('j234-wx-2023-3')
    .sku(variant.sku!)
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1694000))
    .channel(KeyReferenceDraft.presets.channel().key(channel.key!))
    .active(true);

export default j234Wx20233;
