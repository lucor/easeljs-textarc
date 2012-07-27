/*
* EaselJS Text Arc Plugin
*
* Copyright (c) 2012 Luca Corbo
*
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*
* This plugin was inspired by:
* - http://www.html5canvastutorials.com/labs/html5-canvas-text-along-arc-path
* - http://tympanus.net/codrops/2012/01/24/arctext-js-curving-text-with-css3-and-jquery
*
*/

(function (window) {
    Text.prototype.setRadius = function (radius) {

        var ctx = this._getWorkingContext();
        this.radius = radius;

        //Override _drawTextLine method
        Text.prototype._drawTextLine = function (ctx, text, y) {
            var wordWidth = ctx.measureText(text).width;
            var angle = 2 * Math.asin(wordWidth / ( 2 * this.radius ));
            ctx.save();
            ctx.rotate(-1 * angle / 2);
            ctx.rotate(-1 * (angle / text.length) / 2);
            for (var i = 0; i < text.length; i++) {
                ctx.rotate(angle / text.length);
                ctx.save();
                ctx.translate(0, -1 * this.radius);
                ctx.fillText(text[i], 0, 0);
                ctx.restore();
            }
            ctx.restore();
        }
    }
    window.Text = Text;
}(window));
