/* eslint-disable */
const envNames = [
    'ROSETTA_REGION',
    'REGION',
    'CDN',
    'LANG_MAP',
    'LOCALE',
    // 'GA_ID',
    // 'GTM_ID',
    'REFERER',
    // 'TRANSIFY_ID',
    'DDRAGON_LOCALE',
  ];
  
  const prodCdnMap = {
    tw: 'https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/img',
    // th: 'https://cdngarenanow-a.akamaihd.net/webth/lol/LoLWebsite/img',
    // vn: 'https://cdn.vn.garenanow.com/web/lol-product/LOLwebsite/img',
    // sg:
    //   'https://cdngarenanow-a.akamaihd.net/web/image/lol/landing-dominion/WEBSITE/img',
    // ph:
    //   'https://cdngarenanow-a.akamaihd.net/web/image/lol/landing-dominion/WEBSITE/img',
  };
  
  const ddragonLocaleMap = {
    tw: 'zh_TW',
    // th: 'th_TH',
    // vn: 'vn_VN',
    // sg: 'en_US',
    // ph: 'en_US',
  };
  
  const langMap = {
    tw: { tw: 2 },
    // th: { th: 4 },
    // vn: { vn: 3 },
    // sg: { sg: 1 },
    // ph: { ph: 19 },
  };
  
  const referrerMap = {
    tw: 'https://test-lol.garena.tw',
    // th: 'https://test-lol.garena.in.th',
    // vn: 'https://test-lienminh.garena.vn',
    // sg: 'https://test-lol.garena.com',
    // ph: 'https://test-lol.garena.ph',
  };
  
  // const gaIdMap = {
  //   tw: 'G-023FP8WGT6',
  //   th: '',
  //   vn: 'UA-176931615-1',
  //   sg: 'UA-61969982-47',
  //   ph: 'UA-61969982-48',
  // };
  
  // const gtmIdMap = {
  //   tw: '',
  //   th: 'GTM-MGVSDPK',
  //   vn: '',
  //   sg: '',
  //   ph: '',
  // };
  
  const titleMap = {
    tw: '《英雄聯盟》官方網站 ',
    // th: 'League of Legends - Garena',
    // vn: 'Liên Minh Huyền Thoại | Trang chủ chính thức',
    // sg: 'League of Legends - Garena',
    // ph: 'League of Legends - Garena',
  };
  
  const descriptionMap = {
    tw: '《英雄聯盟 LoL》官方網站 - 全球第一多人連線遊戲，挑戰你的電子競技夢想！',
    // th:
    //   'League of Legends - Garena - 2021 Riot Games, Inc. "Riot Games" and "League of Legends" are trademarks, service marks and/or registered trademarks throughout the world.',
    // vn:
    //   'Trang thông tin chính thức của Liên Minh Huyền Thoại - trò chơi trực tuyến nhiều người chơi nhất trên thế giới.',
    // sg:
    //   'League of Legends - Garena - 2021 Riot Games, Inc. "Riot Games" and "League of Legends" are trademarks, service marks and/or registered trademarks throughout the world.',
    // ph:
    //   'League of Legends - Garena - 2021 Riot Games, Inc. "Riot Games" and "League of Legends" are trademarks, service marks and/or registered trademarks throughout the world.',
  };
  
  const region = process.env.REGION || 'tw';
  const rosettaRegion = process.env.ROSETTA_REGION || 'tw'; // to separate sg & ph transify
  const locales = Object.keys(langMap[rosettaRegion]);
//   const transifyId = 1206;
  
  process.env.ROSETTA_REGION = rosettaRegion;
  process.env.REGION = region;
  process.env.CDN = process.env.CDN || prodCdnMap[rosettaRegion];
  process.env.LANG_MAP = JSON.stringify(langMap[rosettaRegion]);
  process.env.LOCALE = [locales];
  // process.env.GA_ID = gaIdMap[rosettaRegion];
  // process.env.GTM_ID = gtmIdMap[rosettaRegion];
  process.env.REFERER = referrerMap[rosettaRegion];
//   process.env.TRANSIFY_ID = transifyId;
  process.env.DDRAGON_LOCALE = ddragonLocaleMap[rosettaRegion];
  // process.env.ROSETTA_TARGET = process.env.ROSETTA_TARGET
  //   ? `${process.env.ROSETTA_TARGET}/transify/${transifyId}?lang=${langMap[region][region]}`
  //   : `https://rosetta${regionPostfix}.garenanow.com/transify/${transifyId}?lang=${langMap[region][region]}`;
  
  export default {
    env: createEnvObject(envNames),
    sassEnv: createSassEnv(
      envNames,
      `
      @import "@/assets/variable.scss";
      @import "@/assets/mixin.scss";
    `,
    ),
    title: titleMap[rosettaRegion],
    description: descriptionMap[rosettaRegion],
    favicon:
      'https://cdngarenanow-a.akamaihd.net/games/lol/tw/web/media/upload/icons/favicon.ico?version=20200212',
  };
  
  function createEnvObject(envNames) {
    return envNames.reduce((acc, key) => {
      return {
        ...acc,
        [key]:
          typeof process.env[key] === 'object'
            ? JSON.stringify(process.env[key])
            : process.env[key],
      };
    }, {});
  }
  
  function createSassEnv(envNames, append = '') {
    return envNames
      .map((key) => `$${key.toLowerCase()}: ${JSON.stringify(process.env[key])};`)
      .concat(append)
      .join('');
  }
  