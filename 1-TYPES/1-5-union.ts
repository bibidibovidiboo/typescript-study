{
  // Union Types -> OR
  // 활용도가 많은 타입스크립트 타입
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('right');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // fuction - login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  // pringLoginState
  function pringLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`🥲 ${state.reason}`);
    }
  }
}
