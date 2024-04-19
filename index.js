import dotenv from 'dotenv';
dotenv.config();

import { init, identify, track } from '@multibase/js';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    console.error("api key is missing, check .env");
    process.exit(1);
}

init(API_KEY);

const userProperties = {
    plan: "mev",
    email: "test@test.com"
};

identify({
    address: "0x193A2418b2254633Ec39981ab2Afb295f790fC94",  // coffeebabe.eth
    properties: userProperties
});

track("Link Click");
