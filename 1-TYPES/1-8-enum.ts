{
  // enum
  // JS -> X
  // 타입스크립트에선 가능한 안 쓰는게 좋음 -> 타입이 정확히 보장되지않음
  // Union으로 대체가 가능함
  type Days = 'Monday' | 'Tuesday' | 'Friday';
  enum DAYS {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(DAYS.Friday);

  let day: Days = 'Monday';
  day = 'Monday';
}
