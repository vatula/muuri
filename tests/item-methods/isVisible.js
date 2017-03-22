(function (window) {

  var Muuri = window.Muuri;

  QUnit.module('Item methods - isVisible');

  QUnit.test('item.isVisible() should return true if the item is visible and otherwise false', function (assert) {

    assert.expect(2);

    var container = utils.createGridElements().container;
    var grid = new Muuri(container);
    var item = grid.getItems()[0];

    assert.strictEqual(item.isVisible(), true, 'An item should be visible when the it`s initiated and it`s display value is set to block');
    grid.hide(item);
    assert.strictEqual(item.isVisible(), false, 'An item should not be visible after hide is called');
    grid.destroy();
    container.parentNode.removeChild(container);

  });

})(this);