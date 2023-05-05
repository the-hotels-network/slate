//= require ./lib/_energize
//= require ./app/_copy
//= require ./app/_toc
//= require ./app/_lang

function adjustLanguageSelectorWidth() {
  const elem = $('.dark-box > .lang-selector');
  elem.width(elem.parent().width());
}

$(function() {
  loadToc($('#toc'), '.toc-link', '.toc-list-h2', 10);
  $('aside').wrap('<div class="aside-wrap"></div>');
  $('pre, blockquote').wrap('<div class="pre-wrap"></div>');
  $('.content > table').wrap('<div class="table-wrap"><div class="table-content"></div></div>');
  setupLanguages($('body').data('languages'));
  $('.content').imagesLoaded( function() {
    window.recacheHeights();
    window.refreshToc();
  });

  $(window).resize(function() {
    adjustLanguageSelectorWidth();
  });
  adjustLanguageSelectorWidth();
  $('.index').css('opacity', '1');
});


window.onpopstate = function() {
  activateLanguage(getLanguageFromQueryString());
};
