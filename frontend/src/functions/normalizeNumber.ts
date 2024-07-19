export const normalizeNumber = (str : string, separator: string): number => {
    const normalizeStr = str.split(separator).join('');
    return Number(normalizeStr);
}
