import { hustles } from "@/lib/hustles";
import { notFound } from "next/navigation";


export default function HustleDetail({ params }: { params: { id: string } }) {
  const hustle = hustles.find((h) => h.id.toString() === params.id);

  if (!hustle) return notFound();

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {hustle.image && (
          <img
            src={hustle.image}
            alt={hustle.title}
            className="w-full h-64 object-cover rounded-md mb-6"
          />
        )}

        <h1 className="text-3xl font-bold mb-4 text-[#008753]">{hustle.title}</h1>
        <p className="text-lg text-gray-700 mb-6">{hustle.description}</p>

        {hustle.id === 1 && (
          <>
            {/* Hustle 1: How to Start */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#008753] mb-2">🚀 How to Start</h2>
              <p className="text-gray-800 leading-relaxed">
                Getting started with app reviewing is straightforward. First, sign up on a legit app testing platform like <strong>uTest</strong>. After creating your profile and completing your onboarding tasks, you’ll start receiving test invitations. These involve installing new or updated apps, exploring them based on the task instructions, and giving written or video feedback. Most tests are simple and take between 5–20 minutes.
                <br /><br />
                Your feedback helps companies improve their apps before full release, and you get paid for each task completed. As you build a good reputation, more frequent and higher-paying tasks will come your way.
              </p>
            </div>

            {/* Hustle 1: Tools Needed */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
              <ul className="list-disc list-inside text-gray-800 space-y-1 ml-4">
                <li>Smartphone or laptop with internet access</li>
                <li>Valid email address</li>
                <li>Good communication skills (for clear feedback)</li>
                <li>PayPal account to receive payments</li>
              </ul>
            </div>

            {/* Hustle 1: Start Now CTA */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-[#008753] mb-2">🔗 Start Now</h3>
              <p className="text-gray-800 mb-3">
                We recommend <strong>uTest</strong> as the most reliable beginner-friendly platform. It pays in dollars and supports users in Nigeria and other countries.
              </p>
              <a
                href="https://www.utest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#008753] text-white px-5 py-2 rounded-full shadow hover:bg-[#008753] transition"
              >
                🔗 Join uTest Now
              </a>
            </div>
          </>
        )}


        {hustle.id === 2 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">📢 How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Find small businesses around you or online that sell products or offer services.</li>
        <li>Create simple and engaging WhatsApp broadcast messages or status promotions for them.</li>
        <li>Share with your contacts and help the business reach more people.</li>
        <li>Earn a commission for every sale or referral you bring in.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>WhatsApp (Business or Regular)</li>
        <li>Smartphone</li>
        <li>Data bundle</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">💼 Where to Get Clients</h2>
      <p>
        Approach local vendors, Instagram sellers, mini importers, or online shops. You can also join affiliate programs like <a href="https://experts.ng" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Experts.ng</a> to promote digital products.
      </p>
    </section>
  </div>
)}

{hustle.id === 3 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">📱 How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Sign up on a VTU (Virtual Top-Up) platform like <a href="https://www.vtpass.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">VTpass</a>.</li>
        <li>Fund your wallet using bank transfer, card, or USSD.</li>
        <li>Use the platform to buy data, airtime, cable subscriptions, or electricity for others at discounted rates.</li>
        <li>You charge customers the regular price and keep the difference as profit.</li>
        <li>Promote your business via WhatsApp status, Facebook groups, or flyers.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Smartphone</li>
        <li>Internet connection</li>
        <li>VTU platform account (e.g., VTpass, JumiaPay, or TopUp Africa)</li>
        <li>Startup capital (₦2,000 – ₦10,000 recommended)</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">✅ Why It Works</h2>
      <p>
        Every Nigerian buys airtime and data. By becoming a VTU agent, you meet daily demand and make consistent profit. Many VTU apps are beginner-friendly and offer support.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🔗 Best Platform</h2>
      <p>
        We recommend <a href="https://www.vtpass.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">VTpass.com</a> for new resellers — it's trusted, easy to use, and has great customer service.
      </p>
    </section>
  </div>
)}



{hustle.id === 4 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">✍️ How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Create an account on freelance writing platforms like <a href="https://www.upwork.com" 
        className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Upwork</a></li>
        <li>Build a simple profile showcasing your writing interest or samples.</li>
        <li>Apply for jobs such as blog posts, YouTube scripts, product descriptions, or email newsletters.</li>
        <li>Write content based on client instructions and submit on time.</li>
        <li>Receive payment through PayPal or your freelance wallet.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Smartphone or Laptop</li>
        <li>Internet Access</li>
        <li>Google Docs or MS Word</li>
        <li>PayPal or Payoneer Account</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">💡 Tips to Get Clients</h2>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Start by offering low prices to get reviews and build trust.</li>
        <li>Join writing groups on Facebook or LinkedIn and pitch your skills.</li>
        <li>Keep improving your grammar and clarity — free tools like <a href="https://www.grammarly.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Grammarly</a> can help.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🔗 Recommended Platform</h2>
      <p>
        <a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Upwork</a> is a top choice for beginners and professionals alike. It has thousands of writing gigs from clients around the world. Sign up, create your profile, and start applying!
      </p>
    </section>
  </div>
)}


{hustle.id === 5 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">📘 How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Pick a topic you know well — e.g. skincare, cooking, business ideas, or side hustles.</li>
        <li>Write the ebook using free tools like <strong>Google Docs</strong> or <strong>Canva</strong>.</li>
        <li>Format it as a PDF and design a simple but attractive cover.</li>
        <li>Upload it to platforms like Selar or Amazon KDP where people can buy your ebook.</li>
        <li>Promote it using your social media, WhatsApp, and Facebook groups.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Smartphone or Laptop</li>
        <li>Google Docs or MS Word</li>
        <li>Canva (for free ebook cover design)</li>
        <li>Selar.co or Amazon KDP account</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">💸 Where to Sell Your Ebook</h2>
      <p>
        You can list your ebook for free on platforms that handle the payment and delivery:
      </p>
      <ul className="list-disc list-inside ml-4 space-y-2">
        <li>
          <a
            href="https://selar.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Selar.co
          </a> – Easy to use, popular in Nigeria.
        </li>
        <li>
          <a
            href="https://kdp.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Amazon KDP
          </a> – Global reach for international buyers.
        </li>
      </ul>
    </section>

    <section className="mt-6">
      <h2 className="text-lg font-semibold text-[#008753] mb-2">🚀 Ready to Publish?</h2>
      <a
        href="https://selar.co"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#008753] text-white px-5 py-3 rounded-md font-medium hover:bg-[#008753] transition"
      >
        Start Selling Your Ebook on Selar →
      </a>
    </section>
  </div>
)}


{hustle.id === 6 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">📦 How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Mini importation involves buying cheap products (like fashion, gadgets, beauty items) from China or other countries and reselling them in Nigeria for profit.</li>
        <li>You browse products on websites like <strong>1688.com</strong> or <strong>AliExpress</strong>, then use an agent or shipping company to help deliver them to Nigeria.</li>
        <li>Once your goods arrive, you can sell them via WhatsApp, Jumia, Instagram, or through a personal website.</li>
        <li>Margins on imported products can be 50–200%, depending on how you market and package them.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Smartphone or laptop with internet</li>
        <li>Access to 1688 or AliExpress</li>
        <li>Importation agent or logistics contact</li>
        <li>₦15,000 – ₦50,000 starting capital</li>
        <li>WhatsApp, Instagram, or website for selling</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">💡 Tips for Success</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Start with small quantity of hot-selling products.</li>
        <li>Use agents who can help you source and ship fast.</li>
        <li>Create clear and attractive product photos & descriptions.</li>
        <li>Promote via WhatsApp status, Facebook Marketplace, or paid Instagram ads.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🚀 Start Learning & Sourcing</h2>
      <p className="mb-3">
        You can learn everything you need and get access to trusted agents from this beginner course below. It’s one of the best-rated mini importation training available.
      </p>
      <a
  href="https://www.espieroads.com/mini-importation" 
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[#008753] text-white px-5 py-2 rounded-full shadow hover:bg-[#008753] transition"
>
        📦 Join Importation Class Now
      </a>
    </section>
  </div>
)}



{hustle.id === 7 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🏧 How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Start a mini banking service in your area by offering cash deposits, withdrawals, transfers, and bill payments to people.</li>
        <li>You earn money through transaction commissions — for every customer you serve, you get paid.</li>
        <li>Thousands of people prefer using POS agents over banks because it's faster and more accessible.</li>
        <li>This hustle is especially profitable in areas with no nearby banks or ATM machines.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>POS machine (free or paid depending on provider)</li>
        <li>Valid ID card and passport photo</li>
        <li>Bank account with BVN</li>
        <li>Start-up capital (₦30,000 to ₦100,000)</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🏦 Where to Get a POS Machine</h2>
      <p>
        Register with trusted POS providers in Nigeria. Many offer fast onboarding and doorstep delivery. One of the most reliable is Moniepoint.
      </p>
      <div className="mt-4">
        <a
          href="https://moniepoint.com/agent-onboarding"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#008753] text-white px-5 py-2 rounded-full shadow hover:bg-[#008753] transition"
        >
          🏧 Register with Moniepoint
        </a>
      </div>
    </section>
  </div>
)}


{hustle.id === 8 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">📲 How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Many small businesses and influencers in Nigeria need help managing their Instagram, TikTok, or Facebook pages.</li>
        <li>As a social media manager, you’ll help them create content, post regularly, reply to DMs/comments, and grow their audience.</li>
        <li>You can manage accounts from your phone, and some clients will even pay weekly or monthly.</li>
        <li>This hustle is perfect if you enjoy being online and know how to use social platforms.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Smartphone with internet</li>
        <li>Instagram, TikTok, or Facebook account</li>
        <li>Basic Canva skills (for simple designs)</li>
        <li>Good writing and communication skills</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🎯 How to Get Clients</h2>
      <p>
        You can find clients by searching “small business” on Instagram and sending them a DM with your offer. Also, you can join freelance platforms like:
      </p>
      <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
        <li>
          <a
            href="https://www.fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Fiverr.com
          </a> – Create a gig offering social media services.
        </li>
       
      </ul>
    </section>

    <section className="mt-6">
      <h3 className="text-lg font-medium text-[#008753] mb-2">💼 Start Freelancing Today</h3>
      <p className="mb-2">Fiverr is beginner-friendly and allows Nigerians to earn in dollars.</p>
      <a
        href="https://www.fiverr.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#008753] text-white px-5 py-2 rounded-full shadow hover:bg-[#008753] transition"
      >
        🔗 Create Fiverr Account
      </a>
    </section>
  </div>
)}


{hustle.id === 9 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🔗 How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Affiliate marketing involves promoting other people’s products or courses online.</li>
        <li>When someone buys through your unique affiliate link, you earn a commission automatically.</li>
        <li>You don’t need to create a product — just find a good one, promote it, and earn.</li>
        <li>This works well on WhatsApp, Facebook, TikTok, Instagram, and blogs.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Smartphone with internet</li>
        <li>WhatsApp, Instagram, or Facebook account</li>
        <li>Basic content creation or copywriting skills</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">📍 Where to Get Affiliate Links</h2>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>
          <a
            href="https://learnoflix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Learnoflix Affiliate Program
          </a> – Sells digital courses with up to ₦50,000 commissions.
        </li>
      </ul>
    </section>

    <section className="mt-6">
      <h3 className="text-lg font-medium text-[#008753] mb-2">🎯 Start Affiliate Marketing Now</h3>
      <p className="mb-2">
        We recommend <strong>Learnoflix</strong> as a trusted affiliate platform for Nigerians. You’ll get training and ready-to-promote offers.
      </p>
      <a
        href="https://learnoflix.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#008753] text-white px-5 py-2 rounded-full shadow hover:bg-[#008753] transition"
      >
        🔗 Join Learnoflix Now
      </a>
    </section>
  </div>
)}

{hustle.id === 10 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🎓 How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Online tutoring means teaching others via platforms like WhatsApp, Zoom, or Telegram.</li>
        <li>You can teach academic subjects (Math, English, Science) or skills (graphics design, video editing, etc.).</li>
        <li>Market your tutoring service by creating fliers or posting on WhatsApp and Facebook groups.</li>
        <li>Set a fixed price per class or per session. Collect payment via transfer before you begin.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Smartphone or Laptop</li>
        <li>Zoom or WhatsApp app</li>
        <li>Clear teaching materials (PDFs, slides, exercises)</li>
        <li>Good internet connection</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">💡 Tips to Succeed</h2>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Start with what you know best — school subjects, JAMB prep, or digital skills.</li>
        <li>Offer a free class first to build trust with new students.</li>
        <li>Keep your classes short, engaging, and interactive.</li>
        <li>Record your Zoom sessions and share for revision.</li>
      </ul>
    </section>

    <section className="mt-6">
      <h3 className="text-lg font-medium text-[#008753] mb-2">📢 Want to Get Started Now?</h3>
      <p className="mb-2">
        You can list your tutoring service for free on:
      </p>
      <ul className="list-disc list-inside ml-4 space-y-2">
        <li>
          <a
            href="https://www.learnam.ng/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            LearnAM.ng
          </a> – A Nigerian platform for skill and language tutors.
        </li>
        <li>
          <a
            href="https://www.tuteria.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Tuteria
          </a> – Connects you to students looking for tutors across Nigeria.
        </li>
      </ul>
    </section>
  </div>
)}

{hustle.id === 11 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">📢 How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Pick a niche you enjoy — such as tech, lifestyle, comedy, tutorials, or vlogs.</li>
        <li>Use your phone to record videos in natural daylight or with a ring light.</li>
        <li>Edit your content using free apps like CapCut or InShot on your phone.</li>
        <li>Create a YouTube channel and upload your videos with good titles and thumbnails.</li>
        <li>As your subscribers grow, you can earn from ads, affiliate links, and sponsorships.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Smartphone with a working camera</li>
        <li>Free video editing app (CapCut, InShot, etc.)</li>
        <li>YouTube app/account</li>
        <li>Internet access</li>
        <li>Optional: Tripod or ring light for better quality</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">💡 Extra Tips</h2>
      <p>
        Stay consistent with uploads, engage with your audience, and watch other successful creators for inspiration. Once you reach 1,000 subscribers and 4,000 watch hours, you can apply for YouTube monetization.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🔗 Start Now</h2>
      <p className="mb-2">
        Want a free tutorial on how to start? Check this YouTube beginner’s guide:
      </p>
      <a
        href="https://www.youtube.com/watch?v=rkZl2gsLUp4"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#008753] text-white px-5 py-2 rounded-full shadow hover:bg-green-800 transition"
      >
        🎥 Watch Beginner YouTube Tutorial
      </a>
    </section>
  </div>
)}

{hustle.id === 12 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">📢 How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Sign up on reputable survey websites that accept Nigerians, like Swagbucks or TimeBucks.</li>
        <li>Fill out your profile completely to get matched with surveys that fit your demographics.</li>
        <li>Start answering surveys honestly — they usually take 5 to 20 minutes each.</li>
        <li>You earn points or dollars for each completed survey, which you can convert to PayPal cash, airtime, or gift cards.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Smartphone or Laptop</li>
        <li>Internet connection</li>
        <li>Valid Email Address</li>
        <li>PayPal account (to receive cash rewards)</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🔗 Start Now</h2>
      <p>
        A reliable platform to get started is <a href="https://www.timebucks.com/?refID=543003241" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">TimeBucks</a>. It pays users in dollars and is open to Nigerians.
      </p>
    </section>
  </div>
)}

{hustle.id === 13 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">📢 How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Create a Facebook page focused on a niche: comedy, news, lifestyle, entertainment, etc.</li>
        <li>Post consistently using videos, memes, or curated content to build followers.</li>
        <li>Engage with your audience to grow page likes, watch time, and followers.</li>
        <li>Once eligible, apply for Facebook's in-stream ads monetization.</li>
        <li>You can also earn from affiliate links and sponsored content.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Facebook App or Creator Studio</li>
        <li>Smartphone or PC</li>
        <li>Consistent internet access</li>
        <li>Content ideas or videos to post</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🔗 Helpful Link</h2>
      <p>
        Learn about Facebook monetization eligibility here:{" "}
        <a
          href="https://www.facebook.com/business/help/169845596919485"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook Monetization Guide
        </a>
      </p>
    </section>
  </div>
)}

{hustle.id === 14 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">📢 How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Learn basic design skills using Canva or Adobe Express (very beginner-friendly).</li>
        <li>Start with free templates and customize them for clients (flyers, logos, banners, etc).</li>
        <li>Advertise your services on WhatsApp, Instagram, or Facebook groups.</li>
        <li>Charge per design or offer bundles to increase earnings.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Smartphone or Laptop</li>
        <li>Canva or Adobe Express</li>
        <li>Internet Access</li>
        <li>Basic design knowledge (YouTube tutorials can help)</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🔗 Helpful Link</h2>
      <p>
        Get started with free Canva tutorials here:{" "}
        <a
          href="https://www.canva.com/designschool/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Canva Design School
        </a>
      </p>
    </section>
  </div>
)}

{hustle.id === 15 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">📢 How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Use Canva to design digital products like social media templates, planners, resumes, etc.</li>
        <li>Make sure your templates are editable and visually appealing for your target audience.</li>
        <li>Upload them on platforms like Gumroad, Payhip, or Etsy for sale.</li>
        <li>Promote your templates on Instagram, TikTok, or WhatsApp to drive sales.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Canva (Free or Pro)</li>
        <li>Creativity & Basic Design Skills</li>
        <li>Gumroad, Payhip, or Etsy Account</li>
        <li>Internet Access</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🔗 Helpful Link</h2>
      <p>
        Sell Your Templates on Payhip:{" "}
        <a
          href="https://payhip.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Visit Payhip
        </a>
      </p>
    </section>
  </div>
)}

{hustle.id === 16 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">📢 How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Small businesses and personal brands need help managing their Instagram, Facebook, TikTok, or Twitter.</li>
        <li>Your job includes posting content, replying to DMs, growing followers, and engaging with comments.</li>
        <li>You can start with one business, then grow by handling multiple clients remotely.</li>
        <li>Most clients prefer monthly payment plans, and you can negotiate based on your service level.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Smartphone or laptop</li>
        <li>Stable internet connection</li>
        <li>Knowledge of Instagram, Facebook & other platforms</li>
        <li>Canva (for simple designs)</li>
        <li>Basic writing/communication skills</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">💡 How to Get Clients</h2>
      <p>
        Start by offering your services to small businesses near you or message Instagram brands with poor engagement.
        Join Nigerian freelance platforms like <a href="https://terawork.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Terawork</a> or pitch directly via WhatsApp.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🔗 Start Now</h2>
      <p className="text-gray-800 mb-2">
        Want to offer your services and start earning as a Social Media Manager in Nigeria? Join Terawork to list your service and start getting paid gigs.
      </p>
      <a
        href="https://terawork.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 text-white px-5 py-2 rounded-full shadow hover:bg-green-700 transition"
      >
        🔗 Join Terawork Now
      </a>
    </section>
  </div>
)}

{hustle.id === 17 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🎙️ How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Create a voice-over demo using your smartphone or microphone.</li>
        <li>Offer services on Fiverr, Voices.com, Twitter, or WhatsApp.</li>
        <li>Charge per project or per minute of voice-over.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Smartphone or microphone</li>
        <li>Quiet room for recording</li>
        <li>Voice recording app (e.g. Dolby On, Lexis Audio Editor)</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🔗 Get Started</h2>
      <p>
        Join <a href="https://www.fiverr.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Fiverr</a> to start offering your voice-over services to clients globally.
      </p>
    </section>
  </div>
)}

{hustle.id === 18 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">📝 How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Listen to audio files from podcasts, YouTube videos, or interviews.</li>
        <li>Type what you hear into clear and accurate text documents.</li>
        <li>Get paid per audio minute or project completed.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Laptop or smartphone</li>
        <li>Good earphones</li>
        <li>Text editor (Google Docs, Word, etc.)</li>
        <li>Optional: Transcription tools like Otter.ai or Express Scribe</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🔗 Get Started</h2>
      <p>
        Apply on <a href="https://www.gotranscript.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GoTranscript</a> or <a href="https://www.rev.com/freelancers" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Rev</a> to begin your transcription journey.
      </p>
    </section>
  </div>
)}

{hustle.id === 19 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">📘 How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Summarize lengthy lecture notes, handouts, or e-books into clear, simple content.</li>
        <li>Sell your summaries as e-notes, Q&A sheets, or exam prep materials.</li>
        <li>Get paid by students who want to save time or study faster.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Smartphone or laptop</li>
        <li>Google Docs or Microsoft Word</li>
        <li>PDF converter (optional)</li>
        <li>WhatsApp or Selar account to deliver and sell</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">💡 Where to Sell</h2>
      <p>
        Sell on <a href="https://selar.co" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Selar.co</a>, WhatsApp status, school group chats, or your Instagram page.
      </p>
    </section>
  </div>
)}

{hustle.id === 20 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🌐 How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Register on platforms like Namecheap, Whogohost, or Truehost.</li>
        <li>Purchase domain names and hosting plans at low or discount rates.</li>
        <li>Resell them to people who need websites — small businesses, churches, NGOs, etc.</li>
        <li>You can charge a service/setup fee along with the domain cost.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Smartphone or laptop</li>
        <li>Internet access</li>
        <li>Account on Namecheap or Whogohost</li>
        <li>WhatsApp, Facebook, or Instagram to promote</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">💻 Start With These</h2>
      <p>
        Check out <a href="https://www.whogohost.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Whogohost</a> or <a href="https://www.truehost.com.ng" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Truehost Nigeria</a> — they allow local payments and are beginner-friendly.
      </p>
    </section>
  </div>
)}

{hustle.id === 21 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">💍 How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Use free tools like Canva to design wedding invitations (photo + text format).</li>
        <li>Offer customizations like date, venue, colors, or couple’s names.</li>
        <li>Deliver via WhatsApp or email as downloadable PDF or image.</li>
        <li>Charge per design or offer packages (save-the-date, invite, RSVP, etc.).</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Smartphone or laptop</li>
        <li>Canva (Free or Pro)</li>
        <li>Internet access</li>
        <li>WhatsApp or Instagram to connect with clients</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">💡 Where to Get Clients</h2>
      <p>
        Join wedding planning Facebook groups, post on Instagram with hashtags, or list on sites like <a href="https://www.vconnect.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">VConnect</a>.
      </p>
    </section>
  </div>
)}

{hustle.id === 22 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🏋️ How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Create workout plans or live Zoom classes for busy Nigerians.</li>
        <li>Charge per month or per customised plan (₦10k – ₦50k).</li>
        <li>Offer accountability via WhatsApp check‑ins and voice notes.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Smartphone + tripod (optional)</li>
        <li>Zoom or Google Meet</li>
        <li>Payment link (Paystack, Flutterwave)</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🔗 Start Now</h2>
      <p>
        List your coaching on <a href="https://selar.co" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Selar</a> or post packages on Instagram and TikTok.
      </p>
    </section>
  </div>
)}

{hustle.id === 23 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">✈️ How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Partner with flight consolidators or use affiliate links from platforms like Wakanow.</li>
        <li>Help travellers compare flight and hotel deals and charge a booking fee.</li>
        <li>Earn extra commission from affiliate programmes and group tours.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Laptop or phone</li>
        <li>Affiliate/agent account (Wakanow, Travelstart, etc.)</li>
        <li>WhatsApp or a simple booking website</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🔗 Start Now</h2>
      <p>
        Apply as an agent on <a href="https://www.wakanow.com/en-ng/partners" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Wakanow Partners</a>.
      </p>
    </section>
  </div>
)}


{hustle.id === 24 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">📸 How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Take high‑resolution photos (nature, people, food, Nigerian culture).</li>
        <li>Upload to Shutterstock, Adobe Stock, or Pexels.</li>
        <li>Earn royalties every time your photo is downloaded.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Smartphone or DSLR</li>
        <li>Basic photo‑editing app (Lightroom Mobile)</li>
        <li>PayPal or Payoneer for payouts</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🔗 Start Now</h2>
      <p>
        Register as a contributor on <a href="https://submit.shutterstock.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Shutterstock</a>.
      </p>
    </section>
  </div>
)}

{hustle.id === 25 && (
  <div className="space-y-6 text-base leading-relaxed">
    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🛍️ How It Works</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Source clean, stylish second‑hand clothes from local thrift markets (Yaba, Katangura, etc.).</li>
        <li>Shoot clear photos and post them on Instagram or WhatsApp catalogs.</li>
        <li>Customers pay before delivery; you profit on each item.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🧰 Tools Needed</h2>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Smartphone with good camera</li>
        <li>Instagram business page or WhatsApp Business</li>
        <li>Courier service for deliveries</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">🔗 Start Now</h2>
      <p>
        Create a free shopfront on <a href="https://flutterwave.com/store" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Flutterwave Store</a> to list your thrift items and accept payments.
      </p>
    </section>
  </div>
)}


       <a
  href="/"
  className="inline-flex items-center gap-2 mt-6 text-[#008753] hover:text-green-700 text-sm font-medium transition-colors"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M15 8a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708.708L2.707 7.5H14.5A.5.5 0 0 1 15 8z" />
  </svg>
  Back to all hustles
</a>

      </div>
    </main>
  );
}
