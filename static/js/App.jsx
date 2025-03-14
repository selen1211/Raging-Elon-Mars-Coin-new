import { NAME } from './consts';
import { useState, useRef } from 'react';
import './Spheres.css';
import elonLogo from './assets/musklogo.png';
import './ticker.css';
import gif4 from './assets/gif4.gif';
import gif2 from './assets/gif2.gif';
import gif1 from './assets/gif1.gif';
import mars from './assets/mars.gif';
import brunomars from './assets/bruno-mars.gif';
import marsvideo from './assets/video.mp4';
import skibby from './assets/skibby.gif';
import Cursor from './Cursor';
import meme1 from './assets/memes/meme01.png';
import meme2 from './assets/memes/meme02.png';
import meme3 from './assets/memes/meme03.png';
import meme4 from './assets/memes/meme04.png';
import meme5 from './assets/memes/meme05.png';
import meme6 from './assets/memes/meme06.png';
import meme7 from './assets/memes/meme07.png';
import meme8 from './assets/memes/meme08.png';
import meme9 from './assets/memes/meme09.png';
import meme10 from './assets/memes/meme26.png';
import meme11 from './assets/memes/meme11.png';
import meme12 from './assets/memes/meme12.png';
import meme13 from './assets/memes/meme13.png';
import meme14 from './assets/memes/meme14.png';
import meme15 from './assets/memes/meme15.png';
import meme16 from './assets/memes/meme16.png';
import meme17 from './assets/memes/meme17.png';
import meme18 from './assets/memes/meme18.png';
import meme19 from './assets/memes/meme19.png';
import meme20 from './assets/memes/meme20.png';
import meme21 from './assets/memes/meme21.png';
import meme22 from './assets/memes/meme22.png';
import meme23 from './assets/memes/meme23.png';
import meme24 from './assets/memes/meme25.png';
import Popup from './Popup';
const uniLink =
  'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xf257a2783f6633A149B5966e32432b5bB3462c96';
const memes = [
  meme1,
  meme2,
  meme3,
  meme4,
  meme5,
  meme6,
  meme7,
  meme8,
  meme9,
  meme10,
  meme11,
  meme12,
  meme13,
  meme14,
  meme15,
  meme16,
  meme17,
  meme18,
  meme19,
  meme20,
  meme21,
  meme22,
  meme23,
  meme24,
];

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const aboutRef = useRef();
  const picturesRef = useRef();
  const Links = [
    { name: `About`, ref: aboutRef },
    { name: `Chart`, href: '/' },
    { name: `Funny Pictures`, ref: picturesRef },
    {
      name: "Dexscreener",
      href: "https://dexscreener.com/solana/0xcomingsoon?__cf_chl_tk=f2FTKAuWvxVyP89rYNHb_PyROQcChfstHHLo7bgw5jc-1719442434-0.0.1.1-7679)"
    },
    {
      name: "Dextools",
      href: "https://www.dextools.io/app/en/solana/pair-explorer/7g3ZeoCAnuVsUNWS2rKGSqKXWdbXAn7sS1aSiLyZrqxM?t=1719467830205"
    },
    {
      name: `Telegram Channel`,
      href: 'https://t.me/Ragingelonmars',
    },
    { name: `Twitter`, href: 'https://x.com/Ragingelonmars_' },
    {
      name: "Youtube",
      href:"https://www.youtube.com/channel/UCnfCVkIruY_V4-NHVCTDOlA"
    },


  ];
  return (
    <>
      {showPopup && <Popup handler={() => setShowPopup(false)} />}
      <Cursor />
      <div className='overflow-x-hidden relative space-y-4  max-w-screen z-10 text-[white] min-h-screen'>
        <div className='relative z-[999] max-w-6xl mx-auto py-5 mb-24'>
          <div className=''>
            <div className='flex w-full flex-col gap-4 md:flex-row items-center justify-between'>
              <div className='flex gap-3 items-center mb-4  '>
                <img className='w-24' src={elonLogo} alt='Logo' />
                <h1 className='text-4xl p-1 bg-white text-black font-medium'>
                  {NAME}
                </h1>
              </div>
              {/*<a*/}
              {/*  href="https://raydium.io/swap/?inputMint=sol&outputMint=BKGEL3y8tPthFVG6dxJPfmkSjCvx42iVKpDtp76j91pG"*/}
              {/*  className='rounded-xl px-6 py-4 cursor-pointer hover:scale-150 transition-transform bg-[#ff007a] font-semibold'*/}
              {/*>*/}
              {/*  SELL ON RAYDIUM*/}
              {/*</a>*/}

              <div className='flex relative z-[999] bg-[] shadow-[8px_-8px_0px_8px_#ffffff90] items-center max-w-lg p-4 border-white border flex-wrap gap-x-3'>
                {Links.map((link) => {
                  if (link.href) {
                    return (
                      <a
                        className='text-font text-lg  underline hover:bg-white hover:text-bg transition-colors cursor-pointer text-[lightblue]'
                        href={link.href}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {link.name}
                      </a>
                    );
                  }
                  if (link.ref) {
                    return (
                      <button
                        onClick={() =>
                          link.ref.current.scrollIntoView({
                            behavior: 'smooth',
                          })
                        }
                        className='text-font text-lg  underline hover:bg-white hover:text-bg transition-colors cursor-pointer text-[lightblue]'
                      >
                        {link.name}
                      </button>
                    );
                  }
                })}
              </div>
            </div>

            <div className='flex gap-12 w-full justify-center items-center mb-4'>
              <a href="https://dexscreener.com/moonshot" rel='noreferrer' target='_blank'>
                <img src={skibby} alt='buy now' className='w-32' />
              </a>

              <div className='flex-col flex py-8'>
                <h1 className='animate-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent text-5xl font-black'>
                  THE RAGING ELON MARS COIN
                </h1>

                <p className='text-lg'>(TICKER: DOGECOIN)</p>
                <a
                  className='text-2xl animate-pulse'
                  href='https://dexscreener.com/moonshot'
                  rel='noreferrer'
                  target='_blank'
                >
                  Contract Address: 0xcomingsoon
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='relative z-20 max-w-6xl mx-auto py-5 h-[480px] flex mt-32 items-center'>
          <div className='rotate-[5deg] -translate-y-28 flex relative z-50 '>
            <iframe
              width={560 * 1.6}
              height={315 * 1.6}
              className='aspect-video relative z-50 translate-y-16'
              src='https://www.youtube.com/watch?v=gLwksw2ZG2c&ab_channel=RagingElonMarsCoin'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
            <img src={gif2} className='h-[480px] aspect-square' alt='4' />
          </div>
        </div>
        <div className='relative z-10 max-w-6xl mx-auto py-'>
          <div className='ticker relative'>
            {' '}
            <h1 className='text-8xl absolute z-50 left-4 top-10 text-bg w-max -translate-y-12  p-2 bg-white font-black rotate-[5deg]'>
              Welcome
            </h1>
            <div className='scroller'>
              {Array(100)
                .fill(<img className='w-32 mr-96' src={gif1} />)
                .map((data, i) => (
                  <>{data}</>
                ))}
            </div>
          </div>
          <div className='py-12 space-y-8 relative z-10'>
            <h1 ref={aboutRef} className='text-5xl animate-bounce opacity-50'>
              The Mysterious Tale of RagingElonMarsCoin
            </h1>
            <div className='space-y-4'>
              <h1 className='animated-text'>Chapter 1: An Unexpected Turn</h1>
              <p className='text-xl'>
                One day, after reading a tweet that made him chuckle, Elon Musk
                impulsively decided to buy ALL of DOGECOIN. Literally, every
                single one. The internet was stunned. "Why?" cried the masses.
                But Elon just tweeted a rocket emoji, fueling speculation and
                memery
              </p>
            </div>
            <div className='space-y-4'>
              <h1 className='animated-text'>
                Chapter 2: Blast off to the Red Planet
              </h1>
              <p className='text-xl'>
                A week later, a live stream from SpaceX showed Elon boarding a
                rocket named "DogeStar Galactic". The world watched in awe as he
                took off, not to the Moon, but to Mars. The mission? To
                establish the first interplanetary cryptocurrency exchange.
              </p>
            </div>
            <div className='space-y-4'>
              <h1 className='animated-text delay-500'>
                Chapter 3: The Martian Swap
              </h1>
              <p className='text-xl'>
                Upon landing, Musk unveiled a new Martian obelisk which was in
                fact, a token swap machine. Here, he exchanged all DOGECOIN for
                a shiny, new super token named "RagingElonMarsCoin". But what
                left the intergalactic community baffled was that the ticker for
                this new token? DOGECOIN. Confusion ensued.
              </p>
            </div>
            <div className='space-y-4'>
              <h1 className='animated-text'>
                Chapter 4: The Galactic Domination
              </h1>
              <p className='text-xl'>
                Rumor had it that with every swap, the RagingElonMarsCoin
                gathered cosmic energy, powerful enough to control the very
                forces of the galaxy. It was said that whoever held the most
                RagingElonMarsCoin would hold the keys to the universe. Galactic
                domination and superpowers weren't just a dream; they were
                becoming a reality.
              </p>
            </div>
            <div className='space-y-4'>
              <h1 className='animated-text'>Chapter 5: The Rage of Musk</h1>
              <p className='text-xl'>
                Back on Earth, chaos reigned. Elon renamed Twitter to "X"
                (because, why not?). Elon was furious. The hate he recieved
                because of this decision made him think he should have named his
                next child X (or perhaps his next car). This rage fueled the
                power of the RagingElonMarsCoin even more.
              </p>
            </div>
            <div className='space-y-4'>
              <h1 className='animated-text'>
                Chapter 6: The Future is Bright (For Some)
              </h1>
              <p className='text-xl'>
                Elon, with a twinkle in his eye, sent a message to Earth. Only
                holders of RagingElonMarsCoin would have a bright future. They
                would be protected from renaming shenanigans, would get premium
                Martian real estate, and enjoy unlimited rides on Tesla's
                interstellar roadsters.
              </p>
            </div>
            <div className='space-y-4'>
              <h1 className='animated-text'>
                Chapter 7: The End or The Beginning?
              </h1>
              <p className='text-xl'>
                The world scrambled to get their hands on RagingElonMarsCoin,
                and as it took over the interstellar markets, one had to wonder:
                was this the end of Earthly currencies or just the whimsical
                beginning of a galactic financial renaissance led by a
                billionaire with a penchant for memes? And thus, in the vast
                cosmic canvas, the tale of a meme coin turning tables in the
                universe unfolded. Remember folks, in crypto and in life, expect
                the unexpected.... road to 10bn marketcap, buy now and hodl or
                you are stupid
              </p>
            </div>
          </div>

          <div className='max-h-screen w-screen overflow-hidden fixed top-0 right-0 z-0'>
            <div className='glowing'>
              <span style={{ '--i': 1 }} />
              <span style={{ '--i': 2 }} />
              <span style={{ '--i': 3 }} />
            </div>
            <div className='glowing'>
              <span style={{ '--i': 1 }} />
              <span style={{ '--i': 2 }} />
              <span style={{ '--i': 3 }} />
            </div>
            <div className='glowing'>
              <span style={{ '--i': 1 }} />
              <span style={{ '--i': 2 }} />
              <span style={{ '--i': 3 }} />
            </div>
            <div className='glowing'>
              <span style={{ '--i': 1 }} />
              <span style={{ '--i': 2 }} />
              <span style={{ '--i': 3 }} />
            </div>
            <div className='glowing'>
              <span style={{ '--i': 4 }} />
              <span style={{ '--i': 5 }} />
              <span style={{ '--i': 6 }} />
            </div>
          </div>

          <div className='flex gap-12 md:flex-row flex-col py-12 relative z-10'>
            <img src={gif4} className='w-64' />
            <div className='space-y-6'>
              <h1 className='text-6xl '>Tokenomics</h1>
              <p className='text-4xl'>
                No tax on all buys and sells... The RAGING ELON MARS smart
                contract has a total supply of{' '}
                <span className='animate-pulse'> 1,000,000,000 DOGECOIN</span>
              </p>
              <p className='text-4xl'>
                Each DogeCoin represents 1 Terraton of Mars total mass ————-
                <span className='text-[#AAFF00]'>
                  dont miss now or you will miss later
                </span>
              </p>
            </div>
          </div>
          <div className='relative z-10 max-w-6xl mx-auto py-5'>
            <p className='text-grey text-3xl mt-6'>
              So there you have it—just like Bitcoin carved its path into the
              financial cosmos, this token seeks to stake its claim in the
              cosmic meme carnival. Remember, this cosmic comedy is spun for fun
              alone. In the genuine arena of tokens, tread cautiously, heed the
              laws, and avoid stepping on anyone's cosmic toes.
            </p>
          </div>
          <div
            ref={picturesRef}
            className='relative z-10 max-w-6xl mx-auto py-5 flex gap-8 flex-col items-center'
          >
            <h1 className='text-5xl'>
              What Mars thinks about this, testimonial:
            </h1>
            <div className='flex gap-12'>
              <img src={mars} className='w-1/2 md:w-56' />
              <img src={brunomars} className='w-1/2 md:w-56' />
            </div>
          </div>

          <h1 className='text-8xl ml-32 mt-12'>funny pictures / videos</h1>

          <p className='text-xl w-full text-center'>
            post your memes on X with #ragingelonmarscoin, $dogecoin and your
            holder address for a chance to get a portion of the first airdrop
            from mars (1% total mass)!! DON'T MISS OUT on YOUR MARS MASS now!!
          </p>
          <div className='flex gap-12  mx-auto relative z-[100]'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/BA4FT_k8hOo?si=g-RwMNrryDdxyqu1'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/dH3E5nEIPSw?si=X0BIzCNJmSb0nv3v'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
          <div className='grid grid-cols-4 gap-6 relative z-10 max-w-6xl mx-auto py-5'>
            {memes.map((meme) => (
              <img src={meme} className='w-full' />
            ))}
          </div>
        </div>
        <div className='w-auto min-w-full flex flex-col justify-end opacity-20 -z-10 min-h-full max-w-none overflow-hidden fixed top-0 left-0'>
          <video loop autoPlay muted>
            <source src={marsvideo} type='video/mp4' />
          </video>
        </div>
      </div>
    </>
  );
}

export default App;
