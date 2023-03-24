import utils from '../utils';
const url = require('url');

/* eslint-disable */
const delay = (ms) => new Promise((res) => setTimeout(res, ms));


// Node.js HTTP server request handler, support ssr and csr
const returnRes = (data) => async (req, res) => {
  let body = '';
  req.query = url.parse(req.url, true).query;
  req.on('data', (data) => {
    body += data;
  });
  req.on('end', () => {
    if (body !== '') {
      req.body = JSON.parse(body);
    }
  });
  await delay(200);
  if (typeof data === 'function') {
    const done = (local) =>
      res.end(JSON.stringify(utils.camelizeKeys(local), null, 4));
    return data(req, res, done);
  }
  return res.end(JSON.stringify(utils.camelizeKeys(data), null, 4));
};

// https://github.com/senchalabs/connect#appusefn
// The route is always terminated at a path separator (/) or a dot (.) character. This means the given routes /foo/ and /foo are the same and both will match requests with the URLs /foo, /foo/, /foo/bar, and /foo.bar, but not match a request with the URL /foobar.

export default {
  getNav: returnRes({
    data: {
      index: {
        navLink: '/',
        bgImg: 'http://dl.garenanow.com/lol/loltw/web/images/promo/732.jpg',
        fgImg: null,
      },
      mainItems: [
        {
          navName: '新聞',
          navLink: '/news',
          bgImg: 'http://dl.garenanow.com/lol/loltw/web/images/promo/732.jpg',
          fgImg: 'http://dl.garenanow.com/lol/loltw/web/images/promo/733.jpg',
          dropdownLists: [
            {
              listName: '資訊',
              listLink: '/news/info',
              bgImg:
                'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt52d346d1e3fdf646/5fdc2f3fb529867fcec2464c/Ranked_2020_Banner_(1).jpg',
              fgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/735.jpg',
            },
            {
              listName: '活動',
              listLink: '/news/event',
              bgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/736.jpg',
              fgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/737.jpg',
            },
            {
              listName: '電競',
              listLink: '/news/esport',
              bgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/739.jpg',
              fgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/739.jpg',
            },
            {
              listName: '系統',
              listLink: '/news/system',
              bgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/740.jpg',
              fgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/741.jpg',
            },
            {
              listName: '影音',
              listLink: '/news/videos',
              bgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/742.jpg',
              fgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/743.jpg',
            },
            {
              listName: '版本資訊',
              listLink: '/news/tft-infoAA',
              bgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/744.jpg',
              fgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/745.jpg',
            },
            {
              listName: '戰棋資訊',
              listLink: '/news/tft-infoBB',
              bgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/746.jpg',
              fgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/747.jpg',
            },
          ],
        },
        {
          navName: '遊戲內容',
          navLink: '/tutorial',
          bgImg: 'http://dl.garenanow.com/lol/loltw/web/images/promo/732.jpg',
          fgImg: 'http://dl.garenanow.com/lol/loltw/web/images/promo/733.jpg',
          dropdownLists: [
            {
              listName: '遊戲入門',
              listLink: '/tutorial',
              bgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/732.jpg',
              fgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/733.jpg',
            },
            {
              listName: '英雄',
              listLink: '/champions',
              bgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/732.jpg',
              fgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/733.jpg',
            },
            {
              listName: '道具',
              listLink: '/items',
              bgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/734.jpg',
              fgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/735.jpg',
            },
          ],
        },
        {
          navName: '電子競技',
          navLink: null,
          bgImg: 'http://dl.garenanow.com/lol/loltw/web/images/promo/732.jpg',
          fgImg: 'http://dl.garenanow.com/lol/loltw/web/images/promo/733.jpg',
          dropdownLists: [
            {
              listName: 'GCS',
              listLink: '#',
              bgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/732.jpg',
              fgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/733.jpg',
            },
          ],
        },
        {
          navName: '聯盟社群',
          navLink: null,
          bgImg: 'http://dl.garenanow.com/lol/loltw/web/images/promo/732.jpg',
          fgImg: 'http://dl.garenanow.com/lol/loltw/web/images/promo/733.jpg',
          dropdownLists: [
            {
              listName: 'Facebook',
              listLink: 'https://www.facebook.com/',
              bgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/732.jpg',
              fgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/733.jpg',
            },
            {
              listName: 'Youtube',
              listLink: 'https://www.youtube.com/',
              bgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/732.jpg',
              fgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/733.jpg',
            },
            {
              listName: 'Instagram',
              listLink: 'https://www.instagram.com/',
              bgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/732.jpg',
              fgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/733.jpg',
            },
          ],
        },
        {
          navName: '服務',
          navLink: null,
          bgImg: 'http://dl.garenanow.com/lol/loltw/web/images/promo/732.jpg',
          fgImg: 'http://dl.garenanow.com/lol/loltw/web/images/promo/733.jpg',
          dropdownLists: [
            {
              listName: '客服中心',
              listLink: 'https://google.com/',
              bgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/732.jpg',
              fgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/733.jpg',
            },
            {
              listName: '儲價中心',
              listLink: 'https://google.com',
              bgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/732.jpg',
              fgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/733.jpg',
            },
            {
              listName: '停權名單',
              listLink: '/ban',
              bgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/732.jpg',
              fgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/733.jpg',
            },
            {
              listName: '伺服器狀態',
              listLink: '/serverStatus',
              bgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/732.jpg',
              fgImg:
                'http://dl.garenanow.com/lol/loltw/web/images/promo/733.jpg',
            },
          ],
        },
        {
          navName: '聯盟宇宙',
          navLink: 'https://google.com',
          bgImg: 'http://dl.garenanow.com/lol/loltw/web/images/promo/732.jpg',
          fgImg: 'http://dl.garenanow.com/lol/loltw/web/images/promo/733.jpg',
          dropdownLists: [],
        },
        {
          navName: '線上商城',
          navLink: '/',
          dropdownLists: [],
        },
        {
          navName: '下載註冊',
          navLink: '/download',
          bgImg: 'http://dl.garenanow.com/lol/loltw/web/images/promo/732.jpg',
          fgImg: 'http://dl.garenanow.com/lol/loltw/web/images/promo/733.jpg',
          dropdownLists: [],
        },
      ],
    },
  }),
  getMain: returnRes((req, res, done) => {
    // /api/index/ticks
    if (req.originalUrl === '/api/index/ticks') {
      return done({
        data: {
          currentTicks: [
            {
              type: 1,
              title: '消息1',
              message:
                '1稍早全區部分玩家會遇到登入驗證的狀況，經過原廠調查後，問題已經解決，玩家可以正常登入遊戲。',
              time: 1605608433,
            },
          ],
          solvedTicks: [
            {
              type: 0,
              message:
                '0稍早全區部分玩家會遇到登入驗證的狀況，經過原廠調查後，問題已經解決，玩家可以正常登入遊戲。',
              time: 1605608433,
            },
            {
              type: 1,
              title: '消息2',
              message:
                '1稍早全區部分玩家會遇到登入驗證的狀況，經過原廠調查後，問題已經解決，玩家可以正常登入遊戲。',
              time: 1605608433,
            },
            {
              type: 2,
              title: '消息3',
              message:
                '2稍早全區部分玩家會遇到登入驗證的狀況，經過原廠調查後，問題已經解決，玩家可以正常登入遊戲。',
              time: 1605608433,
            },
          ],
        },
      });
    }
    // /api/index
    return done({
      data: {
        banners: [
          {
            img: 'http://dl.garenanow.com/lol/loltw/web/images/promo/732.jpg',
            url: 'https://google.com',
          },
          {
            img: 'http://dl.garenanow.com/lol/loltw/web/images/promo/736.jpg',
            url: 'https://google.com',
          },
          {
            img: 'http://dl.garenanow.com/lol/loltw/web/images/promo/745.jpg',
            url: 'https://google.com',
          },
          {
            img: 'http://dl.garenanow.com/lol/loltw/web/images/promo/746.jpg',
            url: 'https://google.com',
          },
          {
            img: 'http://dl.garenanow.com/lol/loltw/web/images/promo/743.jpg',
            url: 'https://google.com',
          },
        ],
        news: [
          {
            id: 123,
            title: '亞菲利歐技能簡介',
            subtitle: '新英雄',
            description:
              '大多數的英雄都能用幾句話簡短地總結，但亞菲利歐和多數英雄不同。要精通「信仰銳武」需要紀律、專注力以及敏銳的思緒，所以請將這一份入門指南。',
            img:
              '~assets/img/340x224-1.jpg',
            updated_at: 1679584178,
          },
          {
            id: 1234,
            title: '聯盟戰棋版本更新',
            subtitle: '10.6',
            description:
              '這一次，我們要走得更高更遠。全新的棋組同時也代表著全新賽季的到來，隨之而來的還有新英雄、新特性、新裝備、新聯盟精靈以及新競技場造型。',
            img:
              '~assets/img/340x224-1.jpg',
            updated_at: 1679584178,
          },
          {
            id: 12345,
            title: '亞大人節禮物來襲！',
            subtitle: '新活動',
            description:
              '金玩具平均獎池價值超高，只要 150 聯盟幣就有機會拿自選造型!<br/>什麼?太省了吧!',
            img:
              '~assets/img/340x224-1.jpg',
            updated_at: 1679584178,
          },
          {
            id: 123456,
            title: '女巫的邀請，免費好禮邀你參加！',
            subtitle: '新活動',
            description:
              '活動期間內，登入手機/遊戲大廳活動頁，即可獲得 10個邀請函的贈送機會。透過分享連結至 Whatsapp、Facebook、Line等',
            img:
              '~assets/img/340x224-1.jpg',
            updated_at: 1679584178,
          },
          {
            id: 1234567,
            title: '04/07 伺服器異常(已修復)',
            subtitle: '系統維護',
            description:
              '系統於 05:30發生異常，約德爾工兵緊急救援，目前正在搶救中，造成不便，敬請見諒。',
            img:
              '~assets/img/340x224-1.jpg',
            updated_at: 1679584178,
          },
          {
            id: 12345678,
            title: '女巫集會版本更新',
            subtitle: '10.8',
            description:
              '孩子們 歡迎來到版本 10.7<br/>首先要說的是戰戰兢兢地等待總算結束了，「它」終於來了......那個最可怕的稻草人出現啦!(泰德',
            img:
              '~assets/img/340x224-1.jpg',
            updated_at: 1679584178,
          },
        ],
        tick: [
          {
            type: 0,
            content:
              '系統於 05:30 發生異常，約德爾工兵緊急救援，目前正在搶救中，造成不便，敬請見諒。※ 進度更新 目前已確認全球驗證伺服器異常，原廠正在搶修中，請大家耐心等候。',
          },
        ],
      },
    });
  }),
  getTopicNews: returnRes({
    data: {
      news: [
        {
          id: 123,
          title: '血月教派',
          subtitle: '新造型',
          img:
            'http://dl.garenanow.com/lol/loltw/web/images/promo/743.jpg',
          externalLink: 'https://www.youtube.com/watch?v=PS-d6RmIf04',
        },
        {
          id: 1234,
          title: '愚人末日版本更新',
          subtitle: '10.7',
          img:
            'http://dl.garenanow.com/lol/loltw/web/images/promo/743.jpg',
          externalLink: null,
        },
        {
          id: 12345,
          title: '聯盟戰棋版本更新',
          subtitle: '10.7',
          img:
            'http://dl.garenanow.com/lol/loltw/web/images/promo/743.jpg',
          externalLink: null,
        },
      ],
    },
  }),
  getNews: returnRes({
    data: {
      footprint: [
        {
          name: '資訊',
          url: '/news/info',
        },
      ],
      news: [
        {
          id: 123,
          title: '非info頁-亞菲利歐技能簡介',
          subtitle: '新英雄',
          description:
            '大多數的英雄都能用幾句話簡短地總結，但亞菲利歐和多數英雄不同。要精通「信仰銳武」需要紀律、專注力以及敏銳的思緒，所以請將這一份入門指南。',
          img: 'https://image/A.jpg',
          updated_at: 1679584178,
          // external_link: 'https://lol.garena.tw',
        },
        {
          id: 1234,
          title: '聯盟戰棋版本更新',
          subtitle: '10.6',
          description:
            '這一次，我們要走得更高更遠。全新的棋組同時也代表著全新賽季的到來，隨之而來的還有新英雄、新特性、新裝備、新聯盟精靈以及新競技場造型。',
            img: 'https://image/A.jpg',
          updated_at: 1679584178,
        },
        {
          id: 12345,
          title: '亞大人節禮物來襲！',
          subtitle: '新活動',
          description:
            '金玩具平均獎池價值超高，只要 150 聯盟幣就有機會拿自選造型!<br/>什麼?太省了吧!',
          img: 'https://image/A.jpg',
          updated_at: 1679584178,
        },
        {
          id: 123456,
          title: '女巫的邀請，免費好禮邀你參加！',
          subtitle: '新活動',
          description:
            '活動期間內，登入手機/遊戲大廳活動頁，即可獲得 10個邀請函的贈送機會。透過分享連結至 Whatsapp、Facebook、Line等',
          img: 'https://image/A.jpg',
          updated_at: 1679584178,
        },
        {
          id: 1234567,
          title: '04/07 伺服器異常(已修復)',
          subtitle: '系統維護',
          description:
            '系統於 05:30發生異常，約德爾工兵緊急救援，目前正在搶救中，造成不便，敬請見諒。',
          img: 'https://image/A.jpg',
          updated_at: 1679584178,
        },
        {
          id: 12345678,
          title: '女巫集會版本更新',
          subtitle: '10.8',
          description:
            '孩子們 歡迎來到版本 10.7<br/>首先要說的是戰戰兢兢地等待總算結束了，「它」終於來了......那個最可怕的稻草人出現啦!(泰德',
          img: 'https://image/A.jpg',
          updated_at: 1679584178,
        },
      ],
      subCategories: [
        { name: '版本資訊', url: '/news/tft-info', img: '你用不到' },
        { name: '戰棋資訊', url: '/news/tft-info', img: '你用不到' },
      ],
      next: true,
    },
  }),
  getNewsCategories: returnRes({
    data: {
      categories: [
        {
          name: '資訊',
          url: '/news/info',
          img: 'http://dl.garenanow.com/lol/loltw/web/images/promo/743.jpg',
        },
        {
          name: '活動',
          url: '#',
          img: 'http://dl.garenanow.com/lol/loltw/web/images/promo/743.jpg',
        },
        {
          name: '電競',
          url: '#',
          img: 'http://dl.garenanow.com/lol/loltw/web/images/promo/743.jpg',
        },
        {
          name: '系統',
          url: '#',
          img: 'http://dl.garenanow.com/lol/loltw/web/images/promo/743.jpg',
        },
        {
          name: '影音',
          url: '#',
          img: 'http://dl.garenanow.com/lol/loltw/web/images/promo/743.jpg',
        },
        {
          name: '版本資訊',
          url: '#',
          img: 'http://dl.garenanow.com/lol/loltw/web/images/promo/743.jpg',
        },
        {
          name: '戰棋資訊',
          url: '#',
          img: 'http://dl.garenanow.com/lol/loltw/web/images/promo/743.jpg',
        },
        //
      ],
    },
  }),
  getNewContent: returnRes({
    data: {
      footprint: [
        {
          name: '資訊',
          url: '/news/info',
        },
        {
          name: '我是patchNote',
          url: '/news/12345',
        },
      ],
      news_detail: {
        backgroundImg:
          'https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/img/clear2.jpg',
        // img: '-',
        img: 'https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/img/clear2.jpg',
        type: 'normal',
        // type: 'patch321312',
        title: 'patch_note三大女巫聚集於此 復仇的葉火即將點燃',
        content:
          '<p><span class="notice">※4/17 (五) 更新:此次新品造型已放入海克斯系統中</span></p><div><span class="title cyan">新造型上架資訊</span></div><div><span><span class="subTitle">[販售時間]：</span></span></div><font class="desc"><span><span>2020/04/17(五)上午 10:00  新品上架</span></span></font><a href="/tingame">test1</a><a href="/aaa">test2</a>',
        external_link: 'https://lol.garena.tw',
      },
    },
  }),
  getBanList: returnRes({
    data: {
      banList: [
        {
          date: {
            year: '2023-000',
            month: '05',
            date: '27',
          },
          user: [
            {
              summoner: '安安',
              level: 100,
              reason: 'cheat',
              status: '三年',
            },
            {
              summoner: '安安1',
              level: 100,
              reason: 'cheat',
              status: '三年',
            },
            {
              summoner: '安安2',
              level: 100,
              reason: 'cheat',
              status: '三年',
            },
            {
              summoner: '安安3',
              level: 100,
              reason: 'cheat',
              status: '三年',
            },
            {
              summoner: '安安4',
              level: 100,
              reason: 'cheat',
              status: '三年',
            },
            {
              summoner: '安安5',
              level: 100,
              reason: 'cheat',
              status: '三年',
            },
            {
              summoner: '安安6',
              level: 100,
              reason: 'cheat',
              status: '三年',
            },
            {
              summoner: '安安7',
              level: 100,
              reason: 'cheat',
              status: '三年',
            },
            {
              summoner: '安安8',
              level: 100,
              reason: 'cheat',
              status: '三年',
            },
            {
              summoner: '安安9',
              level: 100,
              reason: 'cheat',
              status: '三年',
            },
            {
              summoner: '安安10',
              level: 100,
              reason: 'cheat',
              status: '三年',
            },
            {
              summoner: '安安11',
              level: 100,
              reason: 'cheat',
              status: '三年',
            },
            {
              summoner: '安安12',
              level: 100,
              reason: 'cheat',
              status: '三年',
            },
            {
              summoner: '安安13',
              level: 100,
              reason: 'cheat',
              status: '三年',
            },
            {
              summoner: '安安14',
              level: 100,
              reason: 'cheat',
              status: '三年',
            },
            {
              summoner: '安安15',
              level: 100,
              reason: 'cheat',
              status: '三年',
            },
          ],
        },
        {
          date: {
            year: '2019',
            month: '04',
            date: '23',
          },
          user: [
            {
              summoner: '哈哈',
              level: 120,
              reason: 'cheat',
              status: '三年',
            },
          ],
        },
      ],
    },
  }),
  getBanSummoner: returnRes({
    data: {
      banList: [
        {
          date: {
            year: '2020',
            month: '05',
            date: '27',
          },
          user: [
            {
              summoner: '321321321',
              level: 100,
              reason: 'cheat',
              status: '三年',
            },
          ],
        },
      ],
    },
  }),
  getDownloadInfo: returnRes({
    data: {
      AccountRegisterLink: 'https://test-lol.garena.tw/',
      browserDownloadLink: 'https://google.com',
      platformDownloadLink: 'https://google.com',
      currentUpdateFile: {
        link: 'https://google.com',
        desc: '0915 到 0917：如果你的版本號為20200915，請下載此更新檔。',
      },
      updates: [
        {
          time: '2023-09-17',
          adaptVersion: '20230909',
          updatedVersion: '20230917',
          link: 'https://google.com',
        },
        {
          time: '2023-09-16',
          adaptVersion: '20230909',
          updatedVersion: '20230916',
          link: 'https://google.com',
        },
        {
          time: '2023-09-15',
          adaptVersion: '20230909',
          updatedVersion: '20230915',
          link: 'https://google.com',
        },
      ],
      updateTutorialVideo:
        'https://www.youtube.com/embed/ZnY4ZE3BcTE?rel=0&controls=0&disablekb=1&fs=0&autoplay=0',
      requirement: [
        {
          subject: 'CPU',
          basic: '2.0 GHz',
          recommand: '3.0 GHz',
        },
        {
          subject: '作業系統',
          basic:
            'Window XP SP3\nWindows Vista\nWindow 7\n(目前尚無法支援 Mac OS)',
          recommand:
            'Windows Vista (最新版本)\nWindow 7\n(目前尚無法支援 Mac OS)',
        },
      ],
      driver: [
        {
          name: 'version-1',
          link: 'https://google.com',
        },
        {
          name: 'version-2',
          link: 'https://google.com',
        },
        {
          name: 'version-2',
          link: 'https://google.com',
        },
        {
          name: 'version-2',
          link: 'https://google.com',
        },
        {
          name: 'version-2',
          link: 'https://google.com',
        },
        {
          name: 'version-2',
          link: 'https://google.com',
        },
        {
          name: 'version-2',
          link: 'https://google.com',
        },
        {
          name: 'version-2',
          link: 'https://google.com',
        },
        {
          name: 'version-2',
          link: 'https://google.com',
        },
        {
          name: 'version-2',
          link: 'https://google.com',
        },
        {
          name: 'version-2',
          link: 'https://google.com',
        },
      ],
    },
  }),
};
