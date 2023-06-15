{
  // 객체 지향적으로 커피기계 만들기 💡
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class lever
    coffeeBeans: number = 0; // instance level

    // 생성자
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('커피빈 없어여 🥹');
      }
      this.coffeeBeans -= shots * CoffeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeMaker(32);
  console.log(maker);
}
