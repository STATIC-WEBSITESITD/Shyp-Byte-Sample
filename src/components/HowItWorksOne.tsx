import type { FC } from "react";

type Step = {
  num: string;
  icon: string;
  title: string;
  desc: string;
  color: string;
  isLast?: boolean;
};

const steps: Step[] = [
  {
    num: "01",
    icon: "ph-map-pin",
    title: "Set Pickup & Drop",
    desc: "Drop a pin or search your pickup and delivery address anywhere in the world.",
    color: "#f5b800",
  },
  {
    num: "02",
    icon: "ph-package",
    title: "Add Package Details",
    desc: "Tell us what you’re shipping, its weight, dimensions, and value.",
    color: "#f97316",
  },
  {
    num: "03",
    icon: "ph-currency-inr",
    title: "Get Your Instant Rate",
    desc: "See a transparent price breakdown — freight, fuel surcharge, taxes — before you commit.",
    color: "#ef4444",
  },
  {
    num: "04",
    icon: "ph-identification-card",
    title: "Sender & Receiver Details",
    desc: "Add contact and address details with quick Aadhaar-based KYC.",
    color: "#8b5cf6",
  },
  {
    num: "05",
    icon: "ph-camera",
    title: "Upload Package Photos",
    desc: "Snap a quick photo for secure transit and faster customs clearance.",
    color: "#005eff",
  },
  {
    num: "06",
    icon: "ph-check-circle",
    title: "Pay & Track",
    desc: "Confirm payment and get a booking ID with live tracking, instantly.",
    color: "#0c848d",
    isLast: true,
  },
];

const HowItWorksOne: FC = () => {
  return (
    <section className='how-it-works py-120 position-relative overflow-hidden'>
      <div className='container'>
        <div className='text-center tw-mb-12 tw-mb-lg-16'>
          <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
            How It Works
          </span>
          <h2 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
            <span className='d-inline-block'>6 Simple</span>
            <span className='d-inline-block'>&nbsp;</span>
            <span className='d-inline-block fw-semibold text-main-600'>Steps</span>
          </h2>
          <p className='text-neutral-500 max-w-640-px mx-auto tw-mt-4 mb-0 tw-text-lg'>
            From pickup to delivery, everything happens inside one app.
          </p>
        </div>

        {/* Desktop / tablet horizontal milestone strip */}
        <div className='how-it-works__strip d-none d-md-block'>
          <div className='how-it-works__rail position-relative'>
            <div className='how-it-works__track' aria-hidden />
            <div className='how-it-works__steps'>
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className='how-it-works__step'
                  data-aos='fade-up'
                  data-aos-duration={600 + i * 70}
                >
                  <div className='how-it-works__node-wrap'>
                    <span
                      className='how-it-works__node'
                      style={{ backgroundColor: step.color }}
                    >
                      {step.num}
                      {step.isLast ? (
                        <span className='how-it-works__flag' aria-hidden>
                          <i className='ph-fill ph-flag' />
                        </span>
                      ) : null}
                    </span>
                  </div>
                  <div className='how-it-works__card'>
                    <span
                      className='how-it-works__icon'
                      style={{
                        color: step.color,
                        backgroundColor: `${step.color}14`,
                      }}
                    >
                      <i className={`ph-bold ${step.icon}`} />
                    </span>
                    <h5 className='fw-semibold text-heading tw-mb-2 tw-leading-snug'>
                      {step.title}
                    </h5>
                    <p className='text-neutral-500 tw-text-sm mb-0 tw-leading-relaxed'>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical list */}
        <div className='how-it-works__mobile d-md-none'>
          {steps.map((step, i) => (
            <div key={step.num} className='how-it-works__mobile-item d-flex tw-gap-4'>
              <div className='how-it-works__mobile-rail d-flex flex-column align-items-center'>
                <span
                  className='how-it-works__node how-it-works__node--sm'
                  style={{ backgroundColor: step.color }}
                >
                  {step.num}
                </span>
                {i < steps.length - 1 ? (
                  <span
                    className='how-it-works__mobile-line flex-grow-1'
                    style={{
                      background: `linear-gradient(180deg, ${step.color}, ${steps[i + 1].color})`,
                    }}
                  />
                ) : null}
              </div>
              <div className='tw-pb-8'>
                <span
                  className='how-it-works__icon tw-mb-3'
                  style={{
                    color: step.color,
                    backgroundColor: `${step.color}14`,
                  }}
                >
                  <i className={`ph-bold ${step.icon}`} />
                </span>
                <h5 className='fw-semibold text-heading tw-mb-2'>{step.title}</h5>
                <p className='text-neutral-500 tw-text-sm mb-0'>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center tw-mt-10 tw-mt-lg-14'>
          <a
            href='https://play.google.com/store/apps'
            target='_blank'
            rel='noopener noreferrer'
            className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-3 group active--translate-y-2 tw-px-56-px tw-py-5 fw-semibold rounded-pill'
            data-block='button'
            data-aos='fade-up'
            data-aos-duration={700}
          >
            <span className='button__flair' />
            <span className='button__label'>Download the App to Start Shipping</span>
            <i className='ph ph-arrow-right tw-text-lg' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksOne;
