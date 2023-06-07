{
  // number
  const num: number = 1;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined -> 보편적으론 null보단 얘를 더 사용함 (뭔가 있고 없을 때)
  let name: undefined; // 이렇게 절대 안씀 💩
  let age: number | undefined;

  // null
  let person: null; // 얘도 이렇게 절대 안씀 💩
  let person2: string | null;
}
{
  // unknown 💩💩
  // 가능한 쓰지 않는게 좋음
  let notSure: unknown = 0;

  // any 💩
  // 얘도 가능한 쓰지 않는게 좋음
  let anything: any = 0;

  // void
  // 보통 생략이 가능하고 리턴하지 않는 경우
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  // 함수에서 절대 리턴하지 않는 경우
  // 에러를 던지거나 or while 문 같은거 사용

  // object 💩
  let obj: object; // 얘도 다 담을 수 있어서 놉
  function acceptSome(obj: object) {
    // 모든 오브젝트 타입 넣을 수 있음
  }
}
