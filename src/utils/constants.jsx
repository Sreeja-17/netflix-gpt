export const LOGO =
    "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";
const geminiKey = import.meta.env.VITE_GEMINI_KEY
const tmdbKey = import.meta.env.VITE_TMDB_KEY
export const API_OPTIONS = {
    method: 'GET',
    headers: {
        Authorization:
            'Bearer ' +tmdbKey,
        accept: 'application/json'


    },
};

export const CDN_LINK = "https://image.tmdb.org/t/p/w500";

export const BG_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_small.jpg";

export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "spanish", name: "Spanish" }]

export const GEMINI_API = geminiKey;