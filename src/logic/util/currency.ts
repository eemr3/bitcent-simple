export default class Currency {
  private static _locale = 'pt-BR';
  private static _currency = 'BRL';

  static format(value: number): string {
    return (value ?? 0).toLocaleString(Currency._locale, {
      style: 'currency',
      currency: Currency._currency,
    });
  }
}
