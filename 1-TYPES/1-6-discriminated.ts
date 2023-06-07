{
  // Discriminated Union -> 직관적인 코드
  // fuction - login -> success, fail
  type SuccessState = {
    result: '성공';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: '실패';
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: '성공',
      response: {
        body: 'logged in!',
      },
    };
  }

  // pringLoginState
  function pringLoginState(state: LoginState) {
    if (state.result === '성공') {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`🥲 ${state.reason}`);
    }
  }
}
