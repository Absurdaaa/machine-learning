
const sidebars = {
    'intro': `
<h2>目录</h2>
<ul>
    <li><a href="#sfjs">算法介绍</a></li>
    <li><a href="#jbsx">基本思想</a></li>
    <li><a href="#sfyl">算法优劣</a></li>
</ul>
`,
'algorithm': `
<h2>目录</h2>
<ul>
    <li><a href="#sfsx">算法实现</a></li>
    <li><a href="#jdlz">简单例子</a></li>
</ul>
`,
'exmaple': `
<h2>目录</h2>
<ul>
    <li><a href="#zxyy">在线应用</a></li>
</ul>
`
    
    };
// 页面加载完成后，添加事件监听器
document.addEventListener('DOMContentLoaded', function () {
        // 获取所有导航链接
        var navLinks = document.querySelectorAll('nav a');

// 监听导航点击事件
navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        // 阻止默认行为（链接跳转）
        event.preventDefault();

        // 获取点击的内容块和边栏内容ID
        var sectionId = this.getAttribute('data-section');
        var sidebarId = this.getAttribute('data-sidebar');

        // 隐藏所有内容块
        var sections = document.querySelectorAll('.content-section');
        sections.forEach(function (section) {
            section.classList.remove('active');
        });

        // 显示点击的内容块
        var activeSection = document.getElementById(sectionId);
        activeSection.classList.add('active');

        // 更新边栏内容
        if (sidebars[sidebarId]) {
            document.getElementById('sidebar').innerHTML = sidebars[sidebarId];
        }
        document.getElementById(sectionId).
            addEventListener('click', function (event) {
                event.preventDefault(); // 阻止默认跳转行为
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth' // 平滑滚动到顶部
                });
            });
    });
        });
    });
// 点击“回到顶部”按钮时，页面平滑回到顶部
document.getElementById('top').addEventListener('click', function (event) {
    event.preventDefault(); // 阻止默认跳转行为
window.scrollTo({
    top: 0,
behavior: 'smooth' // 平滑滚动到顶部
            });
        });

let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');

function changeImage(direction) {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + images.length) % images.length;
    images[currentIndex].classList.add('active');
}