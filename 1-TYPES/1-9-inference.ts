{
  // 타입 추론 (Type Inference)
  // 원시타입 외에는 생략하지 않는게 좋음
  let text = 'hello';
  function pring(message = 'hello') {
    console.log(message);
  }

  function add(x: number, y: number) {
    return x + y;
  }

  const result = add(1, 2);
  console.log(result);
}
