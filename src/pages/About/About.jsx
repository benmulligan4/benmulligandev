import HeroImg from "@/assets/images/hero.jpg";
import TiltedCard from '@/components/ui/custom/tilted-card.jsx';

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            {/* TODO Edit this text to update the content as needed */}
            About me
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">

              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>

            {/* TODO Add this tilted card functionality that pops out and roatates when you hover over it. The CSS and JSX are already there in custom */}
            {/*
            <div className="relative mb-6 sm:mb-0">
              <TiltedCard
                imageSrc={HeroImg}
                altText="Ben Mulligan"
                captionText="Ben Mulligan"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Ben Mulligan
                  </p>
                }
              />
            </div>
            */}

            <div className="relative space-y-4">
              {/* Updated about text based on CV */}
              <p className="text-white">
                I am a software developer with a First Class Honours degree in
                Computer Science with Industrial Placement from Newcastle
                University. I am currently working as a Graduate Software
                Developer at Virgin Money (Nationwide Group).
              </p>

              <p className="text-white">
                I have strong experience in full‑stack and enterprise software
                development and have applied artificial intelligence in both
                academic research and real‑world industrial settings. My work
                spans fintech and automotive manufacturing environments,
                delivering practical solutions that improve reliability,
                efficiency and user experience.
              </p>

              <p className={"text-white"}>
                I am passionate about leveraging technology to solve complex
                problems and continuously seek opportunities to learn and grow
                within the software development field.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    {/* TODO Update this quote */}
                    Insert quote here
                  </p>
                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">Ben Mulligan</cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
