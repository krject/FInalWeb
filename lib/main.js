const vm_head = Vue.createApp({
    data() {
        return {
            titleAry: ['首頁', '套裝機', '零組件', '站長黃冠勳介紹', '站長徐振傑介紹'],
            linkAry: ['index.html', './HTML/Computer/index.html', './HTML/CPU/index.html', 'https://krject.github.io/SelfIntroduction/index.html', 'https://reaaerggrl.github.io/HW/main.html'],
            targetAry: ['_self', "_self", "_self", '_blank', '_blank']
        }
    }
});
vm_head.mount('#head');

const vm_head_Child = Vue.createApp({
    data() {
        return {
            titleAry: ['首頁', '套裝機', '零組件', '站長黃冠勳介紹', '站長徐振傑介紹'],
            linkAry: ['../../index.html', '../Computer/index.html', '../CPU/index.html', 'https://krject.github.io/SelfIntroduction/index.html', 'https://reaaerggrl.github.io/HW/main.html'],
            targetAry: ['_self', "_self", "_self", '_blank', '_blank']
        }
    }
});
vm_head_Child.mount('#head_child');

const vm_cpt = Vue.createApp({
    data() {
        return {
            imgAry: ['cpt6.png', 'cpt7.png', 'cpt8.png', 'cpt9.png'],
            descAry: [
                [
                    '搭載Intel® Core™ i5 8代CPU',
                    '質感與效能兼具優質品'
                ],
                [
                    '搭載Intel® Core™ i3 9代CPU',
                    '低調中有著不輸人家的效能'
                ],
                [
                    '搭載Intel® Core™ i7-11700K CPU',
                    '打造遊戲最佳體驗感'
                ],
                [
                    '搭載Intel® Core™ i9-11900K CPU',
                    '讓您的工作效率up up'
                ]
            ]
        }
    }
});
vm_cpt.mount('#computer');

const vm_menu = Vue.createApp({
    data() {
        return {
            menuAry: ['CPU', 'RAM', 'HDD', 'SSD', 'Power', 'MB'],
        }
    }
});
vm_menu.mount('#menu');

const vm_cpu = Vue.createApp({
    data() {
        return {
            descAry: [
                [
                    'Intel® Core™ i5 12代CPU'
                ],
                [
                    'Intel® Core™ i7 12代CPU'
                ],
                [
                    'Intel® Core™ i9 12代CPU'
                ],
                [
                    'Intel® Core™ i7 11代CPU'
                ],
                [
                    'Intel® Core™ i9 11代CPU'
                ],
                [
                    'AMD Ryzen™ 5代CPU'
                ],
                [
                    'AMD Ryzen™ 7代CPU'
                ],
                [
                    'AMD Ryzen™ 9代CPU'
                ]
            ]
        }
    }
});
vm_cpu.mount('#CPU');

const vm_ram = Vue.createApp({
    data() {
        return {
            descAry: [
                [
                    'Kingston DDR4 3200 16G RAM'
                ],
                [
                    'Kingston DDR4 2666 16G RAM'
                ],
                [
                    'Kingston DDR4 3200 8G RAM'
                ],
                [
                    'Kingston DDR4 2666 8G RAM'
                ],
                [
                    'crucial DDR4 3200 16G RAM'
                ],
                [
                    'crucial DDR4 2666 16G RAM'
                ]
            ]
        }
    }
});
vm_ram.mount('#RAM');

const vm_hdd = Vue.createApp({
    data() {
        return {
            descAry: [
                [
                    'Western Digital WD Gold 2T'
                ],
                [
                    'Western Digital WD Blue 6T'
                ],
                [
                    'Western Digital WD Black 8T'
                ],
                [
                    'TOSHIBA 2T HDD'
                ]
            ]
        }
    }
});
vm_hdd.mount('#HDD');

const vm_ssd = Vue.createApp({
    data() {
        return {
            descAry: [
                [
                    'ADATA SATA3 SU800 512GB SSD'
                ],
                [
                    'SAMSUNG SATA3 2T SSD'
                ],
                [
                    'Western Digital WD RED SATA3 4T SSD'
                ],
                [
                    'crucial SATA3 2.5-inch 2T SSD'
                ]
            ]
        }
    }
});
vm_ssd.mount('#SSD');

const vm_power = Vue.createApp({
    data() {
        return {
            descAry: [
                [
                    'CORSAIR CX650F RGB'
                ],
                [
                    'ASUS TUF Gaming 750W'
                ],
                [
                    'LEADEX3 GOLD HG 850W'
                ],
                [
                    'CORSAIR 80PLUS HX750'
                ]
            ]
        }
    }
});
vm_power.mount('#Power');

const vm_mb = Vue.createApp({
    data() {
        return {
            descAry: [
                [
                    'CORSAIR CX650F RGB'
                ],
                [
                    'ASUS TUF Gaming 750W'
                ],
                [
                    'LEADEX3 GOLD HG 850W'
                ],
                [
                    'CORSAIR 80PLUS HX750'
                ]
            ]
        }
    }
});
vm_mb.mount('#MB');