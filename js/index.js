document.addEventListener('DOMContentLoaded', () => {
    var i = 0;
    document.querySelector('.menu').addEventListener('click', function() {
        if (i == 0) {
            document.querySelector('nav').style.display = 'flex'
            i = 1;
        } else if (i == 1) {
            i = 0;
            document.querySelector('nav').style.display = 'none'
        }
    })
})
// MANY resources were used to get here...https://juejin.cn/post/6957256144196747272