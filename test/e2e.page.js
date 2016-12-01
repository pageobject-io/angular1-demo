var TodoPage = function () {
  this.addButton = element(by.buttonText('add'));
  this.todos = element.all(by.exactRepeater('todo in todoList.todos'));
  this.newTodo = element(by.model('todoList.newTodo'));

  this.get = function () {
    browser.get('http://localhost:3000');
  };

  this.todosCountShouldBe = function (count) {
    expect(this.todos.count()).toBe(count);
  };

  this.clickTodoDone = function (rowIndex1) {
    this.todos.get(rowIndex1).element(by.model('todo.done')).click();
  };

  this.todoShouldHaveText = function (rowIndex1, value) {
    expect(this.todos.get(rowIndex1).element(by.exactBinding('todo.text')).getText()).toBe(value);
  };

  this.todoShouldHaveClass = function (rowIndex1, className) {
    this.todos.get(rowIndex1).element(by.exactBinding('todo.text')).getAttribute('class').then(function (classes) {
      expect(classes.split(' ').indexOf(className) !== -1).toBeTruthy();
    });
  };

  this.setNewTodo = function (value) {
    this.newTodo.clear();
    this.newTodo.sendKeys(value);
  };

  this.clickAddButton = function () {
    this.addButton.click();
  };

};

module.exports = new TodoPage();