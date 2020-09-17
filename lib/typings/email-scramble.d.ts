declare module 'email-scramble' {
  function rot(charRot: number, numRot: number, str: string): string
  function encode(str: string): string
  function decode(str: string): string
}
