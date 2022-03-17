const quotes = [
    {
        quote: 'To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have.',
        author: 'Matsumoto Rangiku (Bleach)'
    },
    {
        quote: 'Those who stand at the top determine what’s wrong and what’s right! This very place is neutral ground! Justice will prevail, you say? But, of course, it will! Whoever wins this war becomes justice!' ,
        author:  'Don Quixote Doflamingo (One Piece)'
    },
    {
        quote: 'Religion, ideology, resources, land, spite, love or just because no matter how pathetic the reason, it’s enough to start war. War will never cease to exist… reasons can be thought up after the fact. Human nature pursues strife.',
        author: 'Paine (Naruto Shippuden)'
    },
    {
        quote: 'People, who can’t throw something important away, can never hope to change anything.',
        author: 'Armin Arlert (Shingeki no Kyojin / Attack on Titan)'
    },
    {
        quote: 'A person can change, at the moment when the person wishes to change.',
        author: 'Haruhi Fujioka (Ouran Highschool Host Club)'
    },
    {
        quote: 'What good are dreams, if all you do is work? There’s more to life than hitting the books, I hope you know.',
        author: 'Tamaki Suou (Ouran Highschool Host Club)'
    },
    {
        quote: 'If you don’t take risks, you can’t create a future!',
        author: 'Monkey D. Luffy (One Piece)'
    },
    {
        quote: 'When you give up, that’s when the game ends.',
        author: 'Mitsuyoshi Anzai (Slam Dunk)'
    },
    {
        quote: 'The world isn’t perfect. But it’s there for us, doing the best it can....that’s what makes it so damn beautiful.',
        author: 'Roy Mustang (Full Metal Alchemist)'
    },
    {
        quote: 'We are all like fireworks: we climb, we shine and always go our separate ways and become further apart. But even when that time comes, let\'s not disappear like a firework and continue to shine.. forever.',
        author: 'Hitsugaya Toshiro (Bleach)'
    },
    {
        quote: 'Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.',
        author: 'Gildarts Clive (Fairy Tail)'
    },
    {
        quote: 'Whatever you lose, you’ll find it again. But what you throw away you’ll never get back.',
        author: 'Kenshin Himura (Rurouni Kenshin: Meiji Kenkaku Romantan)'
    },
    {
        quote: 'Thinking you’re no-good and worthless is the worst thing you can do',
        author: 'Nobito (Doraemon)'
    },
    {
        quote: 'Don’t give up, there’s no shame in falling down! True shame is to not stand up again',
        author: 'Shintaro Midorima (Kuroko No Basket)'
    },
    {
        quote: 'People’s lives don’t end when they die, it ends when they lose faith.',
        author: 'Itachi Uchiha (Naruto)'
    },
    {
        quote: 'If you don’t take risks, you can’t create a future!',
        author: 'Monkey D. Luffy (One Piece)'
    },
    {
        quote: 'If you don’t like your destiny, don’t accept it.',
        author: 'Naruto Uzumaki (Naruto)'
    },
    {
        quote: 'When you give up, that’s when the game ends.',
        author: 'Mitsuyoshi Anzai (Slam Dunk)'
    },
    {
        quote: 'Why should I apologize for being a monster? Has anyone ever apologized for turning me into one?',
        author: 'Juuzou Suzuya (Tokyo Ghoul)'
    },
    {
        quote: 'I’ll leave tomorrow’s problems to tomorrow’s me.',
        author: 'Saitama (One-Punch Man)'
    },
    {
        quote: 'There’s no shame in falling down! True shame is to not stand up again!',
        author: 'Shintarō Midorima (Kuroko’s Basketball)'
    },
    {
        quote: 'Simplicity is the easiest path to true beauty.',
        author: 'Seishuu Handa (Barakamon)'
    },
    {
        quote: 'If you can’t do something, then don’t. Focus on what you can.',
        author: 'Shiroe (Log Horizon)'
    },
    {
        quote: 'Being weak is nothing to be ashamed of… Staying weak is!',
        author: 'Fuegoleon Vermillion (Black Clover)'
    },
    {
        quote: 'If you really want to be strong… Stop caring about what your surrounding thinks of you!',
        author: 'Saitama (One Punch Man)'
    },
    {
        quote: 'Hard work is worthless for those that don’t believe in themselves.',
        author: 'Naruto Uzumaki (Naruto)'
    },
    {
        quote: 'Fools who don’t respect the past are likely to repeat it.',
        author: 'Nico Robin (One Piece)'
    },
    {
        quote: 'Sometimes it’s necessary to do unnecessary things.',
        author: 'Kanade Jinguuji (Best Student Council)'
    },
    {
        quote: 'Protecting someone means giving them a place to belong. Giving them a place where they can be happy.',
        author: 'Princess Lenessia (Log Horizon)'
    },
    {
        quote: 'Sometimes I do feel like I’m a failure. Like there’s no hope for me. But even so, I’m not gonna give up. Ever!',
        author: 'Izuku Midoriya (My Hero Academia)'
    },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

function getquote() {
    const ranNum = Math.floor(Math.random() * quotes.length);
    const todaysQuote = quotes[ranNum];
    
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;
}

getquote();

