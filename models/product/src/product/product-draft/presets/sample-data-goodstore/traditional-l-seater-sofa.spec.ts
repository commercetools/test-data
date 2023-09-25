import type { TProductDraft } from '../../../types';
import traditionalLSeaterSofa from './traditional-l-seater-sofa';
describe(`with traditionalLSeaterSofa preset`, () => {
  it('should return a sample traditionalLSeaterSofa product preset', () => {
    const traditionalLSeaterSofaPreset =
      traditionalLSeaterSofa().build<TProductDraft>();
    expect(traditionalLSeaterSofaPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "sofas",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "the-traditionalist",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "traditional-l-seater-sofa",
      "name": {
            "en-US": "Traditional L Seater Sofa",
            "en-GB": "Traditional L Seater Sofa",
            "de-DE": "Traditionelles Ecksofa"
          },
      "metaTitle": {
            "en-US": "",
            "de-DE": ""
          },
      "searchKeywords": {},
      "slug": {
            "en-US": "traditional-l-seater-sofa",
            "de-DE": "traditionelles-l-sitzer-sofa",
            "en-GB": "traditional-l-seater-sofa"
          },
      "publish": true,
      "priceMode": undefined,
        {
          "key": "vat-standard-eu",
          "typeId": "tax-category",
        },
        {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "masterVariant": {
          "assets": undefined,
          "sku": undefined,
          "images": undefined,
          "key": undefined,
          "prices": undefined,
          "attributes": [{"name":"color","value":{"en-US":"#ebe6e1","en-GB":"#ebe6e1","de-DE":"#ebe6e1"}},{"name":"colorlabel","value":{"en-US":"Beige","en-GB":"Beige","de-DE":"Beige"}},{"name":"finish","value":{"en-US":"#2e2822","en-GB":"#2e2822","de-DE":"#2e2822"}},{"name":"finishlabel","value":{"en-US":"Espresso","en-GB":"Espresso","de-DE":"Espresso"}},{"name":"productspec","value":{"en-US":"- Cotton upholstery\n- Comes with accent pillows\n- Assembly on site","en-GB":"- Cotton upholstery\n- Comes with accent pillows\n- Assembly on site","de-DE":"- Baumwollbezug\n- Wurfkissen um Lieferumfang enthalten\n- Selbstmontage"}},{"name":"product-description","value":{"en-GB":"A traditional L-shaped sofa is a comfortable and practical piece of furniture. The sofa is upholstered in a durable and high-quality fabric and features a classic and timeless design that can fit well with a variety of decor styles.  The sofa provides ample room for multiple people to sit comfortably. It also features a chaise lounge or a place to stretch out and relax. The L-shape design of the sofa maximizes seating space while also providing a comfortable and inviting space to relax and unwind.  The sofa features padded armrests and backrests, providing ample support and comfort for those who sit on it. The cushions are made of high-density foam, ensuring that they are comfortable and retain their shape over time. The sofa also comes with matching throw pillows, adding to the comfort and style of the piece.  Overall, a traditional L-shaped sofa is a comfortable and practical piece of furniture that can add both style and functionality to any living room. Its classic and timeless design, comfortable cushions, and ample seating space make it a popular choice for families and anyone who loves to entertain guests in their home.","en-US":"A traditional L-shaped sofa is a comfortable and practical piece of furniture. The sofa is upholstered in a durable and high-quality fabric and features a classic and timeless design that can fit well with a variety of decor styles.  The sofa provides ample room for multiple people to sit comfortably. It also features a chaise lounge or a place to stretch out and relax. The L-shape design of the sofa maximizes seating space while also providing a comfortable and inviting space to relax and unwind.  The sofa features padded armrests and backrests, providing ample support and comfort for those who sit on it. The cushions are made of high-density foam, ensuring that they are comfortable and retain their shape over time. The sofa also comes with matching throw pillows, adding to the comfort and style of the piece.  Overall, a traditional L-shaped sofa is a comfortable and practical piece of furniture that can add both style and functionality to any living room. Its classic and timeless design, comfortable cushions, and ample seating space make it a popular choice for families and anyone who loves to entertain guests in their home.","de-DE":"Ein traditionelles Ecksofa ist ein bequemes und praktisches Möbelstück. Das Sofa ist mit einem strapazierfähigen und hochwertigen Baumwollstoff bezogen und verfügt über ein klassisches und zeitloses Design, das gut zu einer Vielzahl von Einrichtungsstilen passt.  Das Sofa bietet ausreichend Platz für mehrere Personen, um bequem zu sitzen. Es verfügt auch über eine Chaiselongue oder einen Platz zum Ausstrecken und Entspannen. Das L-förmige Design des Sofas maximiert den Sitzplatz und bietet gleichzeitig einen komfortablen und einladenden Raum zum Entspannen und Erholen.  Das Sofa ist mit gepolsterten Armlehnen und Rückenlehnen ausgestattet, die dem Sitzenden ausreichend Halt und Komfort bieten. Die Kissen bestehen aus hochdichtem Schaumstoff, der sicherstellt, dass sie bequem sind und ihre Form im Laufe der Zeit behalten. Das Sofa wird auch mit passenden Wurfkissen geliefert, die den Komfort und Stil des Sofas erhöhen.  Insgesamt ist ein traditionelles L-förmiges Sofa ein bequemes und praktisches Möbelstück, das jedem Wohnzimmer sowohl Stil als auch Funktionalität verleiht. Sein klassisches und zeitloses Design, die bequemen Kissen und der großzügige Sitzplatz machen es zu einer beliebten Wahl für Familien und alle, die es lieben, Gäste in ihrem Zuhause zu empfangen."}},{"name":"color-filter","value":{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
