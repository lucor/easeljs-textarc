easeljs-textarc
===============

EaselJs extension allows Text Arc drawing

## Example usage

```javascript
canvas = document.getElementById("canvas");
var stage = new Stage(canvas);
var text = new TextArc("Text Arc", '20pt Arial', '#000', 100);
text.textAlign = "center";
text.x = 200;
text.y = 300;
stage.addChild(text);
stage.update();
```
