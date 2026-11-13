import { BigH2 } from "@/components/BigH2";
import { RoundedBlock } from "@/components/RoundedBlock";
import { RoundedH1 } from "@/components/RoundedH1";
import Image from "next/image";
import founding_crew from "@/public/founding_crew.png";

function MyP(props: { children: React.ReactNode }) {
  return (
    <p className="text-muted text-justify sm:w-xl sm:tracking-widest">
      {props.children}
    </p>
  );
}
export default function AboutPage() {
  return (
    <main className="bg-eset-main flex flex-col items-center p-5 text-white sm:p-10">
      <RoundedH1>ABOUT US</RoundedH1>
      <BigH2>From a study-hall sketch to the starting grid.</BigH2>
      <RoundedBlock>
        <figure className="rounded-2xl">
          <Image
            src={founding_crew}
            alt="image of the founding crew"
            className="rounded-2xl"
          ></Image>
          <figcaption className="text-muted py-3 text-xs sm:py-5 sm:text-sm">
            The founding crew
          </figcaption>
        </figure>
      </RoundedBlock>
      <div className="m-5 flex flex-col sm:flex-row">
        <section className="flex flex-col gap-5">
          <MyP>It all started with a realization.</MyP>
          <MyP>
            Early in the year, a few of us noticed something strange. all the
            school’s automotive clubs and projects had quietly disappeared. They
            no longer fit the administration’s vision of becoming a more
            sustainable, environmentally responsible school. At first, it felt
            like the end of something like there was no place left for students
            who loved building, designing, and working with machines.
          </MyP>
          <MyP>
            But then someone found it: a competition happening not far from us,
            where only electric solar cars were allowed to race. That changed
            everything.
          </MyP>
          <MyP>
            {" "}
            Instead of seeing sustainability as a limitation, we started seeing
            it as a direction. What if we built something that aligned with that
            vision instead of fighting it?{" "}
          </MyP>
          <MyP>
            The idea spread slowly at first. A few conversations after class, a
            couple of rough sketches and then we began talking to teachers, not
            with a finished plan, but with an ambition. They listened and they
            supported us. What began as a small group grew, step by step. Each
            new person brought something different: design ideas, technical
            skills, organization, motivation. We weren’t just trying to build a
            car anymore, we were building a project that made sense in today’s
            world. Now, we’re fully committed.{" "}
          </MyP>
          <MyP>
            Our goal isn’t just to participate in a competition. We want to
            become the first French-speaking school to lead a truly sustainable
            technical project, one that proves engineering, innovation, and
            environmental responsibility can go hand in hand.{" "}
          </MyP>
        </section>
      </div>
    </main>
  );
}
