const newsArticles = [
  {
    source: {
      name: "Biztoc.com",
    },
    author: "dogsinc.com",
    title: "Did You Know? A Day in the Life of a Puppy Raiser",
    url: "https://dogsinc.org/blog/puppy-raiser/day-life-puppy-raiser/?gad_source=1&gad_campaignid=20257872137&gbraid=0AAAAADmX_y_BCtvDa9-6k416UsNAuo7mn&gclid=CjwKCAjwyb3DBhBlEiwAqZLe5BNaP4XsXDOG_PztMP5AVqpNvqwxz6K3cOsobt834nZSWU57i1gTjhoCqAwQAvD_BwE",
    urlToImage:
      "https://t3.ftcdn.net/jpg/02/74/06/48/360_F_274064877_Tuq84kGOn5nhyIJeUFTUSvXaSeedAOTT.jpg",
    publishedAt: "October 29th, 2020",
    description: "Puppies",
    content:
      "Recruiting volunteers to raise our puppies is crucial to bringing our mission to life. We breed our pups right on our campus where they receive all of their vet care...",
  },
  {
    source: {
      name: "Biztoc.com",
    },
    author: "bloomberg.com",
    title:
      "Stealth UK Startup Building Iron Dome-Like Tech Eyes $400 Million Valuation",
    url: "https://biztoc.com/x/826e7bb8c52ac1bc",
    urlToImage: "https://biztoc.com/cdn/950/og.png",
    publishedAt: "July 10th, 2025",
    description: "Tech",
    content: "We are the world! We will stand for what we believe!",
  },
  {
    source: {
      name: "Ultimatepuppy.com",
    },
    author: "ultimatepuppy.com",
    title: "A Plan For the Best Puppy Bath",
    url: "https://ultimatepuppy.com/2025/04/30/a-plan-for-the-best-puppy-bath/",
    urlToImage:
      "https://i0.wp.com/ultimatepuppy.com/wp-content/uploads/2025/01/creative-cloud-express.png?resize=700%2C700&ssl=1",
    publishedAt: "July 16th, 2025",
    description: "Puppies",
    content:
      "Wondering how to give your puppy a bath but unsure about the best way to get started with the least amount of stress for everyone? We’ve got a plan for you, plus a mini training guide you can print or use digitally as you teach your puppy to be comfortable with bath time....",
  },
];

const apiKey = "32278f01a38743c3918eae697c9cfb62";

const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export { newsArticles, apiKey, newsApiBaseUrl };
