var page = require('./e2e.page.js');

describe('todo list without page object', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:3000');

    element(by.model('todoList.newTodo')).sendKeys('first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('first protractor test');
    
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
  
});