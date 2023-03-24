// import axios from 'axios';
import message from './message';

const langMap = JSON.parse(process.env.LANG_MAP);
const loadedRegions = {};
const regionPostfix =
  process.env.ROSETTA_REGION !== 'sg' ? `-${process.env.ROSETTA_REGION}` : '';

const fetchMessage = async (region) => {
  // async asyncData({ app, req }) {
  //   const referrer = process.client ? window.document.referrer :  req.headers.referer
  //   app.$axios.setHeader('Referer', referrer)
  // }

  // 1. nuxt server axios can't set request header.
  // 2. can't get server process.env parameter
  // const isDev = process.env.NODE_ENV === 'development';
  // const rosettaUrl = isDev
  //   ? `https://rosetta${regionPostfix}.garenanow.com/transify/${
  //       process.env.TRANSIFY_ID
  //     }?lang=${langMap[process.env.ROSETTA_REGION]}`
  //   : `/api/index/rosetta?resource_id=${process.env.TRANSIFY_ID}&lang=${
  //       langMap[process.env.ROSETTA_REGION]
  //     }`; // 會抓到 /api/index 的資料
  // try {
  //   const res = await axios.get(
  //     rosettaUrl,
  //     isDev
  //       ? {
  //           headers: { referer: process.env.REFERER },
  //         }
  //       : {},
  //   );
  //   if (res.status === 200) {
  //     // console.log(res.data.LOL__FOOTER__LINKS__LINK_1_HREF);
  //     return res.data;
  //   }
  //   throw new Error(`[nuxt-i18n] Fetch i18n failed with status ${res.status}`);
  // } catch (e) {
  //   // eslint-disable-next-line no-console
  //   console.warn('[nuxt-i18n] Referring to local translation');
  //   return message[process.env.ROSETTA_REGION];
  // }
  return message[process.env.ROSETTA_REGION];
};

export async function loadLocale(i18n, region) {
  // if (!Object.keys(langMap).includes(region)) {
  //   // eslint-disable-next-line no-console
  //   return console.warn(`[nuxt-i18n] Undefined i18n region: ${region}`);
  // }
  if (region in loadedRegions) {
    return i18n.setLocale(region);
  }
  const message = await fetchMessage(region);
  i18n.setLocaleMessage(region, message);
  loadedRegions[region] = true;
  return i18n.setLocale(region);
}
