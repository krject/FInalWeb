const vm_head = Vue.createApp({
    data() {
        return {
            titleAry: ['首頁', '套裝機', '零組件', '站長黃冠勳介紹', '站長徐振傑介紹'],
            linkAry: ['index.html', 'skill.html', 'hobbies.html', 'experiences.html', 'portfolio.html']
        }
    }
});
vm_head.mount('#head');

const vm_skill = Vue.createApp({
    data() {
        return {
            programAry: ['多年的程式開發經驗', '多項的程式競賽經歷', '多樣的程式作品成果'],
            dataProcessAry: ['4年以上的Word、Excel、Power point使用經驗', '3張專業證照']
        }
    }
});
vm_skill.mount('#skill');

const vm_hobbies = Vue.createApp({
    data() {
        return {
            titleAry: ['閱讀', '攝影', '遊戲'],
            imgAry: ['reading.jpg', 'photo.jpg', 'lol.jpg']
        }
    }
});
vm_hobbies.mount('#hobbies');

const vm_exp = Vue.createApp({
    data() {
        return {
            titleAry: ['2008 9月 ~ 2014 6月', '2014 9月 ~ 2017 6月', '2017 9月 ~ 2020 6月', '2020 9月 ~ 現今'],
            contentAry: ['高雄市立後勁國小', '高雄市立後勁國中', '高雄市立海青工商 資料處理科', '國立勤益科技大學 資訊工程系'],
            imgAry: ['Elementary.jpg', 'junior.jpg', 'vocational.jpg', 'university.jpg'],
            mapAry: ['後勁國小', '後勁國中', '海青工商', '國立勤益科技大學日本'],
            siteAry: [
                'https://www.hjes.kh.edu.tw/',
                'http://school.kh.edu.tw/index.php?WebID=251',
                'https://sites.google.com/hcvs.kh.edu.tw/info',
                'https://www.ncut.edu.tw/'
            ]
        }
    }
});
vm_exp.mount('#exp');

const vm_portfolio = Vue.createApp({
    data() {
        return {
            titleAry: ['程式作品', '攝影相簿'],
            descAry: [
                [
                    '校園商店管理系統，實際應用在海青工商的福利社中，幫助福利社人員能快速結帳、查詢營業額等操作，加快作業流程',
                    '計時器，搭配簡潔的介面，並設計多語言、多視窗模式等功能，並且能夠至頂視窗，增強了原生計時器的功用',
                    '2018年 台灣網界博覽會參賽作品，雖然當時因為技術不成熟，在現今看來非常粗糙，但它也是我入門網頁設計的敲門磚'
                ],
                ['南投望鄉 玉山拍攝', '勤益科大 晚霞', '南投望鄉 千歲吊橋']
            ],
            imgAry: [
                ['proj1.jpg', 'proj2.jpg', 'proj3.jpg'],
                ['photo1.jpg', 'photo2.jpg', 'photo3.jpg']
            ]
        }
    }
});
vm_portfolio.mount('#portfolio');