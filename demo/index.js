let text = '点击'
document.querySelector('h1').addEventListener('click', function() {
    text += '事件'
    alert(text);
});