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
  .u123Qr03()
  .build<TProductVariantDraft>();

const u123Qr20235 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('u123-qr-2023-5')
    .sku(variant.sku!)
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1620000))
    .channel(KeyReferenceDraft.presets.channel().key(channel.key!))
    .active(true);

export default u123Qr20235;
