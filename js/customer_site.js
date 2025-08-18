const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    }
    
   dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
    }


    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    }


    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod'
        name: '暴风资源',
    }

    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
   }


    xiaomaomi: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '小猫咪资源',
    }


    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
