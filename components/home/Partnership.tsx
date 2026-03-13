import Image from "next/image"
import TagBtn from "../TagBtn"

const Partnerships = () => {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-10">

      <div className="mb-6">
        <TagBtn name="Partnership" />
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary max-w-3xl">
        Strategic Partnerships That Expand Global Opportunities
      </h2>

      <p className="text-text-secondary max-w-2xl mt-4">
        JW Global Group actively collaborates with organizations and industry
        partners to expand business opportunities and strengthen
        international connections.
      </p>

      <div className="border-t border-divider my-12"></div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1px_1fr] gap-8 items-stretch">

        <div className="relative w-full h-75 sm:h-90  rounded-lg overflow-hidden">
          <Image
            src="/hero.png"
            alt="Strategic partnership meeting"
            fill
            className="object-cover"
          />
        </div>

        <div className="hidden lg:block bg-divider w-px"></div>

        <div className="bg-[#D1D5DB] rounded-lg p-8 flex flex-col justify-center">

          <p className="text-text-secondary text-sm mb-4">
            Strategic Partner
          </p>

          <div className="flex items-center gap-4 mb-4">

            <div className="w-12 h-12 rounded-md  flex items-center justify-center shrink-0">
              <Image
                src="/partner.png"
                alt="partnerLogo"
                width={62}
                height={62}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary">
                Chardikla Technical LLC
              </h3>

              <p className="text-sm text-text-secondary">
                Dubai, UAE
              </p>
            </div>

          </div>

          <p className="text-sm text-text-secondary leading-relaxed">
            Chardikla Technical Services LLC is an international partner
            organization involved in skill-based workforce development and
            overseas placement services. Through this collaboration,
            JW Global Group aims to facilitate professional training and
            employment opportunities for individuals seeking careers abroad.
          </p>

          <p className="text-sm text-text-secondary leading-relaxed mt-3">
            This partnership strengthens the group&apos;s global placement network
            and supports workforce mobility between India and international
            markets.
          </p>

        </div>

      </div>


    </section>
  )
}

export default Partnerships