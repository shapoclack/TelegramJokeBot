const TelegramBot = require('node-telegram-bot-api');
 
const token = '1425858829:AAEXVMLwu5FnGy6qBvvmjeWUL1VYk5jyGzw';

const bot = new TelegramBot(token, {polling: true});

const PORT = process.env.PORT || 3000;
 
const arrMessageBot = [
'My sister thinks shes so smart, shes said onions are the only food that makes you cry. So I threw a coconut at her',
'Today was a terrible day. My ex got hit by a bus, and I lost my job as a bus driver',
'I wasn’t planning on going for a run today, but those cops came out from nowhere', 
'“Dad, how do stars die?” – “Usually an overdose.”', 
'I have many jokes about unemployed people, sadly none of them work.',
'I’m sorry” and “I apologise” mean the same thing. Except at a funeral',
'The more suicidal people there are the less suicidal people there are',
'I remember my grandfathers last words: “is that loaded?”',
'My dog kept chasing people on a bike. Eventually, it got so bad I had to take his bike away.',
'My ex-wife still misses me. But her aim is steadily improving.',
'I Googled “How to start a Wildfire”. I got 48,500 matches.',
'Kid: but mom I don’t want to see grandma Mom: shut up and keep digging',
'Communist jokes aren’t funny unless everyone gets them.',
'I got hit in the head with a can of soda yesterday. Luckily for me, it was a soft drink.',
'If drinking alcohol makes you an alcoholic, does drinking fanta make you fantastic?',
'Thanks for explaining the word “many” to me, it means a lot.',
'What do you call a Chinese man with one leg? Tie won shu',
'Women are like blackjack. I’m trying for 21, but I always hit on 14.'];

const roundMatch = (max,min) => {
    return Math.round(min - 0.5 + Math.random() * (max- min + 1));
};


bot.on('message', msg => {
    const{id : id, first_name: userName} = msg.chat;
    var start = "/start";
    if (msg.text.toString().toLowerCase().indexOf(start) === 0) {
        bot.sendMessage(msg.chat.id,"Type 'JOKE' to get a joke");
} 

    if(/joke/gi.test(msg.text)) {
        bot.sendMessage(id, `${arrMessageBot[roundMatch(26,0)]} `);
    }
});
