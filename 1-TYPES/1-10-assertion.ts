{
  // Type Assertions 💩
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();

  // result.string -> 이거는 result가 any라 length 못씀
  console.log((result as string).length);
}
