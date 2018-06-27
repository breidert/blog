(function ($, Drupal) {
  Drupal.behaviors.demoBehavior = {
    attach: function (context, settings) {
      $('body', context).once('demoBehavior').each(function () {
        console.log('It works');
      });
    }
  };
})(jQuery, Drupal);