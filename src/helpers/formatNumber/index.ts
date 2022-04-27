import numbro from 'numbro';
export const formatNumber = (param: number) => {
    var numberFormatToString = numbro(param).format({
        thousandSeparated: true
    });
    return numberFormatToString;
}