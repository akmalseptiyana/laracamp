import { createNanoID } from "@/utils/nanoid";
import Image from "next/image";

export function Footer() {
  return (
    <section className="bg-[#F7F7FB]">
      <div className="container mx-auto px-4 pt-16">
        <div className="mb-4 flex flex-col items-center justify-center">
          <h2 className="mb-2 font-semibold uppercase text-green">
            SUCCESS STUDENTS
          </h2>
          <h3 className="mb-10 text-[30px] font-semibold text-navy">
            We Really Love Laracamp
          </h3>
        </div>

        <div className="mx-0 mb-12 flex flex-wrap justify-center xl:mx-5">
          {testimonials.map((item) => {
            const stars = [];
            for (let index = 0; index < item.stars; index++) {
              stars.push(
                <li key={createNanoID()}>
                  <svg
                    width="30"
                    height="29"
                    viewBox="0 0 30 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7636 1.80517C14.1528 0.607465 15.8472 0.607462 16.2364 1.80517L18.7494 9.53942C18.9234 10.075 19.4226 10.4377 19.9858 10.4377H28.118C29.3774 10.4377 29.901 12.0492 28.8822 12.7894L22.303 17.5694C21.8474 17.9005 21.6567 18.4873 21.8308 19.0229L24.3438 26.7571C24.7329 27.9548 23.3621 28.9508 22.3433 28.2106L15.7641 23.4306C15.3085 23.0995 14.6915 23.0995 14.2359 23.4306L7.65673 28.2106C6.63791 28.9508 5.26708 27.9548 5.65624 26.7571L8.16925 19.0229C8.34328 18.4873 8.15263 17.9005 7.697 17.5694L1.11785 12.7894C0.0990243 12.0492 0.622631 10.4377 1.88197 10.4377H10.0142C10.5774 10.4377 11.0766 10.075 11.2506 9.53942L13.7636 1.80517Z"
                      className="fill-yellow-star"
                    />
                  </svg>
                </li>
              );
            }

            return (
              <div key={createNanoID()} className="w-full px-4 pb-4 xl:w-3/12">
                <div className="relative flex h-full flex-col rounded-xl bg-white p-5 pb-24">
                  <ul className="mb-5 flex gap-x-2">{stars}</ul>
                  <p className="text-grey">{item.content}</p>
                  <div className="absolute bottom-4 left-4 right-0 flex w-full gap-x-3">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full">
                      <Image
                        src={item.user.image}
                        alt={item.user.name}
                        fill
                        quality={90}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h6 className="text-lg font-medium text-navy">
                        {item.user.name}
                      </h6>
                      <span className="text-grey">{item.user.occupancy}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <footer className="px-4 pb-12 text-center text-grey">
        All Rights Reserved. Copyright Laracamp Indonesia.
      </footer>
    </section>
  );
}

const testimonials = [
  {
    key: "fanny",
    user: {
      name: "Fanny",
      occupancy: "Developer at Google",
      image: "/images/fanny.jpg",
    },
    stars: 5,
    content:
      "I was not really into code but after they teach me how to train my logic then I was really fall in love with code",
  },
  {
    key: "angga",
    user: {
      name: "Angga",
      occupancy: "CEO at BWA Corp",
      image: "/images/angga.jpg",
    },
    stars: 5,
    content:
      "Code is really important if we want to build a company and strike to the win",
  },
  {
    key: "jully",
    user: {
      name: "Jully",
      occupancy: "QA at Facebook",
      image: "/images/jully.jpg",
    },
    stars: 5,
    content:
      "My background is design and art but I do really love how to make my design working in the development phase",
  },
];
