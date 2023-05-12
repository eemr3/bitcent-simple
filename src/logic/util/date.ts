export default class DateFormat {
  static yymmdd = {
    format(dt: Date, spacer: string = '-'): string {
      const day = dt.getDate().toString().padStart(2, '0');
      const month = (dt.getMonth() + 1).toString().padStart(2, '0');

      return `${dt.getFullYear()}${spacer}${month}${spacer}${day}`;
    },
  };

  static ddmmyy = {
    format(dt: Date, spacer: string = '/'): string {
      const day = dt.getDate().toString().padStart(2, '0');
      const month = (dt.getMonth() + 1).toString().padStart(2, '0');

      return `${day}${spacer}${month}${spacer}${dt.getFullYear()}`;
    },
  };
}
