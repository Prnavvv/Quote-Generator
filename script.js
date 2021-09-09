document.getElementById("btn").addEventListener("click", generate);

let quotes = ['"The future belongs to those who believe in the beauty of their dreams."', 
'"Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid."', 
'"He who fears he shall suffer, already suffers what he fears."', 
'"Music is the shorthand of emotion."', 
'"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."', 
'"Strive not to be a success, but rather to be of value."', 
'"The best time to plant a tree was 20 years ago. The second best time is now."',
'"I attribute my success to this: I never gave or took any excuse."',
'"Life is what happens to you while you’re busy making other plans."',
'"I am not a product of my circumstances. I am a product of my decisions."',
'"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily."', 
'"There is only one way to avoid criticism: do nothing, say nothing, and be nothing"',
'"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily."' ];


let authors = ["Walt Disney" , " Albert Einstein" , "Michel De Montaigne" , "Leo Tolstoy" , "Martin Luther King Jr" , " Albert Einstein" , "Chinese Proverb" ,"Florence Nightingale" , "John Lennon" , "Stephen Covey", "Zig Ziglar", "Aristotle", "Zig Ziglar"];

let i =0;

function generate(){
   /* document.getElementById("line").innerHTML = quotes[1];
    document.getElementById("name").innerHTML = "~ " + authors[1];*/

    
        if(i == 13)
        {
            i = 0;
        }

        document.getElementById("line").innerHTML = quotes[i];
    document.getElementById("name").innerHTML = "~ " + authors[i];
    i++;
}

/*Martin Luther King Jr": '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
    "- Albert Einstein": '"Strive not to be a success, but rather to be of value."',
    "- Florence Nightingale": '"I attribute my success to this: I never gave or took any excuse."',
    "- Michael Jordan": '"I missed more than 9000 shots in my career. I lost almost 300 games. 26 times I been trusted to take the game winning shot and missed. I failed over and over and over again in my life. And that is why I succeed."',
    "- Babe Ruth": '"Every strike brings me closer to the next home run."',
    "- John Lennon": '"Life is what happens to you while you’re busy making other plans."',
    "- Earl Nightingale": '"We become what we think about."',
    "- Mark Twain": '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."',
    "- Charles Swindoll": '"Life is 10% what happens to me and 90% of how I react to it."',
    "- Buddah": '"The mind is everything. What you think you become."',
    "- Chinese Proverb": '"The best time to plant a tree was 20 years ago. The second best time is now."',
    "- Woody Allen": '"Eighty percent of success is showing up."',
    "- Steve Jobs": '"Your time is limited, so don’t waste it living someone else’s life."',
    "- Vince Lombardi": '"Winning isn’t everything, but wanting to win is."',
    "- Stephen Covey": '"I am not a product of my circumstances. I am a product of my decisions. "',
    "- Christopher Columbus": '"You can never cross the ocean until you have the courage to lose sight of the shore."',
    "- Maya Angelou": '"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. "',
    "- Jim Rohn": '"Either you run the day, or the day runs you."',
    "- Henry Ford": '"Whether you think you can or you think you can’t, you’re right."',
    "- Frank Sinatra": '"The best revenge is massive success."',
    "- Zig Ziglar": '"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily."',
    "- Aristotle": '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing"'


*/