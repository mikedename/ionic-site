import {Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../helpers';

@Page({
  templateUrl: './build/buttons/full/full.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class FullPage {
    constructor() {

    }
}