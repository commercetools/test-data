import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const starterMotor3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('starter-motor-3')
    .sku('starter-motor')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(20000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default starterMotor3;
