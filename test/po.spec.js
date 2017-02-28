var page = require('./todo.po.js');

describe('todo list with page object', function() {
  it('should add a todo with po', function() {
    page.get();
    page.setNewTodo('first protractor test');
    page.clickAddButton();
    
    page.todosCountShouldBe(3);
    page.todoShouldHaveText(2, 'first protractor test');

    page.clickTodoDone(2);
    page.todoShouldHaveClass(2, 'done-true');
  });
});