{
  // Intersection Types -> &
  // 다양한 타입을 합칠 수 있음
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function interWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId);
  }

  interWork({
    name: 'bom',
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}
