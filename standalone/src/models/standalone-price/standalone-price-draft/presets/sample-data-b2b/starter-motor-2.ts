import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const starterMotor2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('starter-motor-2')
    .sku('starter-motor')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(20000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default starterMotor2;
