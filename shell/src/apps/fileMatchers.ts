export function isApiFile(path: string): boolean {
  const name = path.split('/').pop()?.toLowerCase() || '';
  return name.endsWith('.api');
}
