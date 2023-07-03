jokes=["What's an egg's favorite vacation spot? New Yolk City.",
"What kind of candy do astronauts like? Mars bars.",
"I ordered a chicken and an egg from Amazon. I'll let you know.",
"What month is the shortest of the year? May, it only has three letters.",
"I was going to tell a time traveling joke, but you guys didn't like it.",
"Why do we tell actors to break a leg? Because every play has a cast.",
"What do you call it when a snowman throws a tantrum? A meltdown.",
"Which is faster, hot or cold? Hot, because you can catch cold.",
"What did the left eye say to the right eye? Between you and me, something smells.",
"What do you call a fake noodle? An impasta."];

function generate_joke(){
    let index=Math.floor(Math.random()*10);
    document.getElementById("joke").innerText=jokes[index];
}
