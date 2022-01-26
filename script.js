var avatarImage = 1;
var avatarImageCount = 17;

generateQuote();
function generateQuote() {
  var quotes = [
    "''The computer was born to solve problems that did not exist before.''<br> -<em>Bill Gates<em/>",
    "''Computers are incredibly fast, accurate, and stupid. Human beings are incredibly slow, inaccurate, and brilliant. Together they are powerful beyond imagination.''<br> -<em>Albert Einstein<em/>",
    "''I am not in competition with anyone but myself. My goal is to improve myself continuously.''<br> -<em>Bill Gates<em/>",
    "''Everyone should learn how to code, it teaches you how to think.''<br> -<em>Steve Jobs<em/>",
    "''Have the courage to follow your heart and intuition. They somehow know what you trule want to become.''<br> -<em>Steve Jobs<em/>",
    "''The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.''<br> -<em>Stephen Hawking<em/>",
    "''Make everything as simple as possible, but not simpler.''<br> -<em>Albert Einstein</em>",
    "''Being able to break security doesn't make you a hacker anymore than being able to hotwire cars makes you an automotive engineer.''<br> -<em>Eric Raymond</em>",
    "''Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.''<br> -<em>Linus Torvalds</em>",
    "''A clever person solves a problem. A wise person avoids it.'' <br> -<em>Albert Einstein</em>",
    "''I've worked very hard, but my life's always been fun.''<br> -<em>Reed Hastings</em>",
    "''Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.'' <br> -<em>Mark Zuckerberg<em/>",
    "''People don't care about what you say they care about what you build.''<br> -<em>Mark Zuckerberg</em>",
    "''Your most unhappy customers are your greatest source of learning.''<br> -<em>Bill Gates<em/>",
    "''Intelligence is the ability to adapt to change.'' <br> -<em>Stephen Hawking<em/>",
    "''Hoaxes use weaknesses in human behavior to ensure they are replicated and distributed.  In other words, hoaxes prey on the Human Operating System.''<br> -<em>Stewart Kirkpatrick<em/>",
    "''Passwords are like underwear: you don't let people see it, you should change it very often, and you shouldn't share it with strangers.''<br> -<em>Chris Pirillo<em/>",
    "''Code never lies, comments sometimes do.'' <br> -<em>Ron Jeffries<em/>",
    "''You could get an entire computer science education for free right now.<br> -<em>Sebastian Thrun<em/>",
    "''It's hardware that makes a machine fast.  It's software that makes a fast machine slow.''<br> -<em>Craig Bruce<em/>",
    "''If we want users to like our software we should design it to behave like a likable person: respectful, generous and helpful.''<br> -<em>Alan Cooper<em/>",
    "''The form of computers has never been important, with speed and performance being the only things that mattered.''<br> -<em>Jonathan Ive<em/>",
    "''I just sneezed next to my computer and the anti-virus popped up.''<br> -<em>Unknown<em/>",
    "''Computers are good at following instructions, but not at reading your mind.''<br> -<em>Donald Knuth<em/>",
    "''Access to computers and the Internet has become a basic need for education in our society.''<br> -<em>Kent Conrad<em/>",
    "''A computer will do what you tell it to do, but that may be much different from what you had in mind.''<br> -<em>Joseph Weizenbaum<em/>",
    "''Bad programmers worry about the code. Good programmers worry about data structures and their relationships.'' <br> -<em>Linus Torvalds<em/>",
    "''Truth can only be found in one place: the code.''<br> -<em>Robert Cecil Martin<em/>",
    "''The good news about computers is that they do what you tell them to do. The bad news is that they do what you tell them to do.'' <br> -<em>Ted Nelson<em/>",
    "''Computers themselves, and software yet to be developed, will revolutionize the way we learn.'' <br> -<em>Steve Jobs<em/>",
    "''The Internet is not just one thing, it's a collection of things - of numerous communications networks that all speak the same digital language.'' <br> -<em>James H. Clark<em/>",
    "''Americans fear losing control if they're forced to ride in autonomous vehicles. These same Americans fly in airplanes every day that largely are flown by computers, and impressively efficient ones at that.'' -<em>Adam Lashinsky<em/>",
  ];
  var index = Math.floor(Math.random() * quotes.length);
  var quote = quotes[index];
  var quotesElement = document.getElementById("quotes");
  quotesElement.innerHTML = quote;
}

updateAvatar();
window.setInterval(updateAvatar, 750);

function updateAvatar() {
  var avatarElement = document.getElementById("avatar");
  if (avatarImage > 17) {
    avatarImage = 1;
  }
  avatarElement.src = "img/avatar/c" + avatarImage + ".png";
  avatarImage++;
}

window.addEventListener("scroll", scrollEffects);
function scrollEffects() {
  var effectStart = window.innerHeight * 0.35;
  var animatedSections = document.getElementsByClassName("animated-section");
  for (let i = 0; i < animatedSections.length; i++) {
    let animatedSection = animatedSections[i];
    let animatedSectionTop = animatedSection.getBoundingClientRect().top;
    let animatedTitles =
      animatedSection.getElementsByClassName("animated-title");
    if (animatedTitles.length > 0) {
      let animatedTitle = animatedTitles[0];
      if (
        animatedSectionTop + 60 < 0 ||
        animatedSectionTop > window.innerHeight
      ) {
        animatedTitle.classList.add("hide");
        animatedTitle.classList.remove("fadein");
      } else if (animatedSectionTop <= effectStart) {
        animatedTitle.classList.add("fadein");
        animatedTitle.classList.remove("hide");
      }
    }
    let animatedImages =
      animatedSection.getElementsByClassName("animated-image");
    if (animatedImages.length > 0) {
      animatedImage = animatedImages[0];
      if (
        animatedSectionTop + 60 < 0 ||
        animatedSectionTop > window.innerHeight
      ) {
        //animatedImage.classList.remove("animated-image-show");
        //animatedImage.classList.add("animated-image-hide");
      } else if (animatedSectionTop <= effectStart) {
        animatedImage.classList.add("animated-image-show");
        animatedImage.classList.remove("animated-image-hide");
      }
    }
  }
}

/*
function showMoreAboutMe() {
  let aboutMeReadMore = document.getElementById("aboutMeReadMore");
  aboutMeReadMore.style.display = "inline";
  let readMoreBtn = document.getElementById("readMoreBtn");
  readMoreBtn.style.display = "none";
}
*/

function showMoreAboutMe() {
  let aboutMeReadMore = document.getElementById("aboutMeReadMore");
  aboutMeReadMore.style.display = "inline";
  document.getElementById("readMoreBtn2").style.visibility = "hidden";
}
