import { connect } from 'react-redux';
import StepList from './step_list';
// Actions
import { stepsByTodoId } from '../../reducers/selectors';
import { receiveStep } from '../../actions/step_actions';
// import { fetchSteps } from '../../actions/step_actions';

const mapStateToProps = (state, { todo_id }) => ({
  steps: stepsByTodoId(state, todo_id),
  todo_id,
  state
});

const mapDispatchToProps = dispatch => ({
  receiveStep: step => dispatch(receiveStep(step)),
  // fetchSteps: (todoId) => dispatch(fetchSteps(todoId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
