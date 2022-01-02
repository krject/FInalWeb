const vm_head = Vue.createApp({
    data() {
        return {
            titleAry: ['首頁', '套裝機', '零組件', '站長黃冠勳介紹', '站長徐振傑介紹'],
            linkAry: ['index.html', 'skill.html', './HTML/CPU/index.html', 'https://krject.github.io/SelfIntroduction/index.html', 'portfolio.html'],
            targetAry: ['_self', "_self", "_self", '_blank', '_blank']
        }
    }
});
vm_head.mount('#head');

const vm_head_Child = Vue.createApp({
    data() {
        return {
            titleAry: ['首頁', '套裝機', '零組件', '站長黃冠勳介紹', '站長徐振傑介紹'],
            linkAry: ['../../index.html', 'skill.html', 'index.html', 'https://krject.github.io/SelfIntroduction/index.html', 'portfolio.html'],
            targetAry: ['_self', "_self", "_self", '_blank', '_blank']
        }
    }
});
vm_head_Child.mount('#head_child');

const vm_skill = Vue.createApp({
    data() {
        return {
            programAry: ['多年的程式開發經驗', '多項的程式競賽經歷', '多樣的程式作品成果'],
            dataProcessAry: ['4年以上的Word、Excel、Power point使用經驗', '3張專業證照']
        }
    }
});
vm_skill.mount('#skill');