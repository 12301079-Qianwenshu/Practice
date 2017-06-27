// 获取要操作的变量
var first = document.getElementById("first");
var preOrder = document.getElementById("pre-btn");
var inOrder = document.getElementById("in-btn");
var postOrder = document.getElementById("post-btn");
var timer=0;
// 展示
function showNode(node) {
    // alert(node.tagName);
    node.style.backgroundColor="#ffffff";
    setTimeout(function () {
        node.style.backgroundColor="#ff524a";
    },timer+=500);
    setTimeout(function () {
        node.style.backgroundColor="#ffffff";
    },timer+=500);
}

// preOrder
function pre(root){
	console.log(root);
	if (root) {
		showNode(root);
		pre(root.children[0]);
		pre(root.children[1]);
	}
}

// inOrder
function middle(root){
	if (root) {
		pre(root.children[0]);
		showNode(root);
		pre(root.children[1]);
	}
}

// postOrder
function post(root){
	if (root) {
		post(root.children[0]);
		post(root.children[1]);
		showNode(root);
	}
}

// 事件绑定
preOrder.onclick = function(){
	pre(first);
	timer=0;
}

inOrder.onclick = function(){
	middle(first);
	timer=0;
}

postOrder.onclick = function(){
	post(first);
	timer=0;
}