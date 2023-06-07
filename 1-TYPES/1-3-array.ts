{
  // Array
  const fruits: string[] = ['🍎', '🍌'];
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {} // 둘다 가능한데 엘리님은 1번을 선호

  // Tuple -> 서로 다른 타입을 가진 배열
  // interface, type alias, class로 대체해서 사용
  // 엘리님은 권장하지 않음
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123

  const [name, age] = student;
  // useState -> 이 튜플을 유연하게 사용한 경우
}
