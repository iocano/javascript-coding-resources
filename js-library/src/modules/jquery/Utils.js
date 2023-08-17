/* eslint-disable no-invalid-this */

import DataEntryElement from '../HTML/DataEntryElement.js';
import Utils from './../HTML/Utils.js';
import JQuery from './../../../external/jquery/jquery.module.js';

// Export an empty object to satisfy the ES6 module syntax
export {};

(function ($) {
  /**
   * Check radio/checkbox jQuery collection.
   * @return {JQuery}
   */
  $.fn.check = function () {
    return this.each(function () {
      this.checked = true;
    });
  };

  /**
   * Uncheck radio/checkbox jQuery collection.
   * @return {JQuery}
   */
  $.fn.uncheck = function () {
    return this.each(function () {
      this.checked = false;
    });
  };

  /**
   * Check all radio/checkbox if condition is met.
   * @param {boolean} condition
   * @return {JQuery}
   */
  $.fn.checkIf = function (condition) {
    return this.each(function () {
      this.checked = condition;
    });
  };

  /**
   * Reset data entry element collection.
   * @return {JQuery}
   */
  $.fn.resetControl = function () {
    return this.each(function () {
      DataEntryElement.reset(this);
    });
  };

  /**
   * Reset all data entry elements inside a form/container collection.
   * @return {Jquery}
   */
  $.fn.resetForm = function () {
    return this.each(function () {
      $(this).find(':input').resetControl();
    });
  };

  /**
   * Sets the width of elements based on the width of the provided text.
   * @param {string} text The text to measure for width calculation.
   * @return {JQuery}
   */
  $.fn.setWidthForText = function (text) {
    return this.each(function () {
      const width = Utils.getWidthForText(text);
      this.style.width = width + 'px';
    });
  };
})(JQuery);
