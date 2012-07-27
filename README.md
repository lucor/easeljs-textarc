easeljs-textarc
===============

EaselJs extension allows Text Arc drawing

- Example usage

canvas = document.getElementById("canvas");
var stage = new Stage(canvas);
var text = new Text("Text Arc", '20pt Arial', '#000');
text.textAlign = "center";
text.x = 200;
text.y = 300;
text.setRadius(100);
stage.addChild(text);
stage.update();
