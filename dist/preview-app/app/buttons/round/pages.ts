import {Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../helpers';

@Page({
  templateUrl: './build/buttons/round/round.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class RoundPage {
    constructor() {

    }
}