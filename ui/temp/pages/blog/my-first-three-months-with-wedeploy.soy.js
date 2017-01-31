/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from my-first-three-months-with-wedeploy.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace blogMyFirstThreeMonthsWithWedeployHtml.
 * @public
 */

goog.module('blogMyFirstThreeMonthsWithWedeployHtml.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;

var $templateAlias1 = Soy.getTemplate('blog.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var param313 = function() {
    ie_open('article');
      ie_open('p');
        itext('Hey! My name is Jonni and I\'m a UI intern on the WeDeploy team. I joined back in November and wanted to share a couple things from my first three months at Liferay.');
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-4--0.png',
            'alt', 'Jonni Lundy Working');
        ie_close('img');
      ie_close('figure');
      ie_open('p');
        itext('I have no coding background. Before my internship, I had never opened DevTools in my life and I thought that Java and JavaScript were the same thing.');
      ie_close('p');
      ie_open('p');
        itext('Needless to say, I was a little intimidated of coming in as the new guy, but once I started using WeDeploy and working with the team, those fears drifted away like a bunch of balloons strapped to a house (\'UP\' anyone?).');
      ie_close('p');
      ie_open('p');
        itext('I still remember the first time I deployed. I had just finished making my very first website, and Zeno said I should try deploying it by myself. I honestly didn\'t know where to start, so I went to the docs, read through some guides, and gave it a shot.');
      ie_close('p');
      ie_open('blockquote');
        ie_open('p');
          itext('Within 15 minutes, it was live!');
        ie_close('p');
      ie_close('blockquote');
      ie_open('p');
        itext('It was one of the best feelings I\'ve had during this internship.');
      ie_close('p');
      ie_open('p');
        itext('Knowing that I, the new guy who didn\'t know what an API was or how to run \'npm install\', could deploy my own website faster than it takes me to run to Starbucks and get my triple ristretto hazelnut latte (with almond milk please).');
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-4--1.png',
            'alt', 'Jonni Lundy Collaborating');
        ie_close('img');
      ie_close('figure');
      ie_open('p');
        itext('By far my favorite thing about being on the WeDeploy team is being able to get behind a product that is so powerful and yet incredibly intuitive to use.');
      ie_close('p');
      ie_open('p');
        itext('If I can deploy, then I\'m sure you can! So what are you waiting for?!');
      ie_close('p');
    ie_close('article');
  };
  $templateAlias1(soy.$$assignDefaults({content: param313}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'blogMyFirstThreeMonthsWithWedeployHtml.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class blogMyFirstThreeMonthsWithWedeployHtml extends Component {}
Soy.register(blogMyFirstThreeMonthsWithWedeployHtml, templates);
export { blogMyFirstThreeMonthsWithWedeployHtml, templates };
export default templates;
/* jshint ignore:end */