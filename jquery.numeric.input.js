!function($) {
  $(document).on("keydown", 'input[data-type="numeric"]', function (e)
  {
    var key = e.charCode || e.keyCode || 0;
    // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
    return (
      key == 8 ||
      key == 9 ||
      key == 46 ||
      (key >= 37 && key <= 40) ||
      (key >= 48 && key <= 57) ||
      (key >= 96 && key <= 105));
  });
}(window.jQuery || window.ender);