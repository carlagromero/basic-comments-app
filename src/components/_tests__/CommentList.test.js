import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['comment 1', 'comment 2', 'comment 3']
  }

  wrapped = mount(
    <Root state={initialState}>
      <CommentList />
    </Root>
  );
})

it('creates one li element per comment', () => {
  expect(wrapped.find('li').length).toEqual(3);
});

it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain('comment 1');
  expect(wrapped.render().text()).toContain('comment 2');
  expect(wrapped.render().text()).toContain('comment 3');
});