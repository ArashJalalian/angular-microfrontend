import {Action, State, StateContext} from '@ngxs/store';

export interface StateInterface {
  name: string;
}

export class UpdateState {
  static readonly type = '[app1 state] update state.';
  constructor(public name: string) {}
}

@State<StateInterface>({
  name: 'app1State',
  defaults: {name: ''}
})
export class App1State {
  @Action(UpdateState)
  updateState(ctx: StateContext<StateInterface>, action: UpdateState) {
    ctx.setState({
      name: action.name
    });
  }
}
