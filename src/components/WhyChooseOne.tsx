import type { FC } from "react";

const features = [
  {
    icon: "ph-tag",
    title: "No Bidding, No Guessing",
    desc: "Predefined rates mean the price you see is the price you pay. Re-weighing at the hub only adjusts for actual discrepancies, shown transparently at checkout.",
  },
  {
    icon: "ph-device-mobile",
    title: "End-to-End in One App",
    desc: "From pickup pin-drop to final delivery tracking, every step happens without switching apps or calling anyone.",
  },
  {
    icon: "ph-identification-card",
    title: "KYC & Customs Ready",
    desc: "Built-in Aadhaar verification and document/photo uploads mean fewer customs delays.",
  },
  {
    icon: "ph-headset",
    title: "Real Human Support",
    desc: "Call, email, or use in-app support whenever you need help — not just a chatbot.",
  },
] as const;

const WhyChooseOne: FC = () => {
  return (
    <section className='why-choose py-120'>
      <div className='container'>
        <div className='row gy-5 align-items-center tw-mb-12 tw-mb-lg-14'>
          <div className='col-lg-6'>
            <div
              className='why-choose__media tw-rounded-3xl d-flex align-items-center justify-content-center'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <img
                src='/assets/images/thumbs/download-app-thumb.png'
                alt='ShypByte mobile app'
                className='img-fluid'
              />
            </div>
          </div>

          <div className='col-lg-6'>
            <div
              className='bg-main-600 tw-py-2 tw-px-7 rounded-pill text-white fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-6 min-w-max common-shadow-twentyNine'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              Why Choose Shyp Byte
            </div>
            <h2
              className='splitTextStyleOne text-heading tw-leading-none'
              data-aos='fade-up'
              data-aos-duration={700}
            >
              Built for People Who Just Want to Ship — Not Negotiate
            </h2>
            <p
              className='text-neutral-600 tw-text-lg tw-mt-605 fw-medium tw-leading-145 max-w-570-px mb-0'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              Transparent rates, one app for every step, and real people when you
              need them — so shipping stays simple from pickup to delivery.
            </p>

            <div className='d-flex flex-column tw-gap-5 tw-mt-10'>
              {[
                "Fixed rates before you book",
                "Pickup to tracking in one place",
                "KYC & customs tools built in",
              ].map((item, i) => (
                <div
                  key={item}
                  className='d-flex align-items-center tw-gap-205'
                  data-aos='fade-up'
                  data-aos-duration={700 + i * 120}
                >
                  <span className='tw-w-8 tw-h-8 bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center tw-text-lg text-heading flex-shrink-0'>
                    <i className='ph-bold ph-check' />
                  </span>
                  <span className='text-heading tw-text-lg fw-semibold'>{item}</span>
                </div>
              ))}
            </div>

            <div
              className='tw-mt-11'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <a
                href='https://play.google.com/store/apps'
                target='_blank'
                rel='noopener noreferrer'
                className='hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-9 rounded-pill tw-py-505 fw-semibold common-shadow-inset-one'
                data-block='button'
              >
                <span className='button__flair' />
                <span className='button__label'>Download app now</span>
              </a>
            </div>
          </div>
        </div>

        <div className='row gy-4'>
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className='col-xl-3 col-sm-6'
              data-aos='fade-up'
              data-aos-duration={600 + i * 100}
            >
              <div className='tw-rounded-2xl bg-neutral-50 bg-hover-app-landing tw-py-10 tw-px-7 border border-neutral-100 group animation-item group-item tw-transition tw-duration-200 h-100'>
                <span className='why-choose__icon tw-w-16 tw-h-16 rounded-circle d-flex align-items-center justify-content-center common-shadow-fifteen tw-mb-8 bg-white text-main-600 tw-transition tw-duration-200'>
                  <i className={`ph-bold ${feature.icon} tw-text-3xl animate__heartBeat`} />
                </span>
                <h4 className='splitTextStyleOne tw-mb-4 group-hover-text-white tw-transition tw-duration-200 tw-text-xl'>
                  {feature.title}
                </h4>
                <p className='splitTextStyleOne group-hover-text-white fw-medium text-neutral-500 tw-transition tw-duration-200 mb-0 tw-leading-relaxed'>
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseOne;
