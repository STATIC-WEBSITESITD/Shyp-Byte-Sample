import type { FC } from "react";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.shypbyte.customer";
const APP_STORE = "https://www.apple.com/app-store";

const CtaBannerOne: FC = () => {
  return (
    <section className='download-app'>
      <div className='cta-band tw-py-100-px tw-mx-48-px position-relative z-1 overflow-hidden'>
        <div className='container position-relative z-1'>
          <div className='row gy-5 align-items-center'>
            <div className='col-lg-6'>
              <div
                className='cta-band__eyebrow'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={600}
              >
                Mobile First
              </div>
              <h2 className='splitTextStyleOne text-white tw-leading-none'>
                Shyp Byte Is Built Mobile-First — Get the Full Experience
              </h2>
              <p className='text-white tw-text-xl tw-mt-605 splitTextStyleOne fw-medium tw-leading-145 max-w-548-px' style={{ opacity: 0.82 }}>
                Book shipments, track parcels, manage your profile, and get
                support — all from your pocket.
              </p>
              <div className='d-flex align-items-center tw-gap-405 tw-mt-10 flex-wrap'>
                <div
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  <a
                    href={PLAY_STORE}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover--translate-y-1 active--translate-y-scale-9 tw-rounded-2xl common-shadow-twentyEight d-inline-block'
                  >
                    <img
                      src='/assets/images/icons/store-two2.png'
                      alt='Get it on Google Play'
                    />
                  </a>
                </div>
                <div
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  <a
                    href={APP_STORE}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover--translate-y-1 active--translate-y-scale-9 tw-rounded-2xl common-shadow-twentyEight d-inline-block'
                  >
                    <img
                      src='/assets/images/icons/store-two1.png'
                      alt='Download on the App Store'
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='text-center text-lg-end'>
                <img
                  src='/assets/images/thumbs/banner-five-thumb.png'
                  alt='Shyp Byte app preview'
                  className='img-fluid'
                  data-aos='zoom-in'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={1200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBannerOne;
