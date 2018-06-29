(function ($, Drupal) {
  Drupal.behaviors.demoBehavior = {
    attach: function (context, settings) {
      $('body', context).once('demoBehavior').each(function () {
        console.log('It works');
      });
    }
  };
  Drupal.behaviors.slick = {
    attach: function (context, settings) {
      $(".view-latest-articles.view-display-id-page_1 .view-content", context).once('slick').slick();
    }
  };
})(jQuery, Drupal);