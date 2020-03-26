//定义一个全局变量，将constructor里面的this寸到that里面
var that;
class Tab {
    constructor(id) {
        //this指向的是这个实例
        that = this;
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('.firstnav ul:first-child');
        this.section = this.main.querySelector('.tabscon')
        this.init();
    }
    init() {
        this.updateNode()
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.add.onclick = this.addTab;
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.spans = this.main.querySelectorAll('.firstnav li span:first-child')
    }
    toggleTab() {
        that.clearClass()
        this.className = "liactive"
        // this这个指向的是li 因为li里面没有section这个属性
        // this.sections[this.index].className = 'conactive'
        that.sections[this.index].className = 'conactive'
    }
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ''
            that.sections[i].className = ''
        }
    }
    addTab() {
        that.clearClass();
        var li = '<li class="liactive" ><span>新增元素</span><span class="iconfont icon-guanbi"></span></li>'
        that.ul.insertAdjacentHTML('beforeend', li);
        var section = '<section class="conactive">新增元素</section>'
        that.section.insertAdjacentHTML('beforeend', section)
        that.init()
    }
    removeTab(e) {
        e.stopPropagation();
        var index = this.parentNode.index;
        that.lis[index].remove();
        that.sections[index].remove();
        if (document.querySelector('.liactive')) return;
        index--;
        that.lis[index] && that.lis[index].click()
    }
    editTab() {
        var str = this.innerHTML;
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str
        input.select();
        input.onblur = function () {
            this.parentNode.innerHTML = this.value;
        };
        input.onkeyup = function (e) {
            if (e.keuCode = 13) {
                this.blur()
            }
        }
    }
}
new Tab('#tab')