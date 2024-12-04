import React from "react";
import ReproductionImage1 from "../images/reproduction1.jpg";

const Reproduction = () => {
  return (
    <section
      id="reproduction"
      className="min-h-screen w-full bg-gray-100 px-6 py-12 text-center md:text-left"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-teal-700 mb-2">
          Social Reproduction
        </h2>
        <p className="text-md text-gray-600 mb-8">
          Section Authored By: Jason Gill
        </p>

        <div className="grid grid-cols-1 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              An Introduction to Social Reproduction in Education
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              As a teacher, Social Reproduction Theory (SRT) is a concept you
              must familiarize yourself with to better hone your craft. It seeks
              to explain how educational systems have the unique ability to
              reinforce social norms, values and inequalities. You, as a
              teacher, have more power than you may know. This power is immense
              and comes with great responsibility (a cliche, I know...). The
              ideas from SRT should serve as a reminder regarding a couple of
              things. First, each step in the pedagogy process matters, as it
              will shape the future generation and what they deem important.
              Second, you have the opportunity to make your classroom a space
              where societal norms are not only questioned but reimagined.
              Encouraging your students to connect the themes taught in class to
              real-world issues allows them to make changes beyond the four
              walls of your classroom.
              <br />
              <br />
              To provide the bigger picture around SRT, it's a framework to
              analyze how societal structures, dominant norms and power
              relations within society are reproduced throughout generations,
              relying on institutions, such as schools, families and workplaces.
              It illustrates how education perpetuates inequality within the
              classes, races, and genders as it lays out the "who should get
              what" narrative prevalent in the world. For example, it can help
              us explore if the current education structure naturally tends to
              students primed for workforce positions, with the goal being to
              disrupt patterns showing bias towards current societal
              expectations which ultimately keep existing structures intact.
              Discussions of this nature allow everyone an equal opportunity to
              think critically and change the dominant ideologies.
            </p>
          </div>
        </div>

        {/* First Block: Text on Left, YouTube Video on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              Flowers Are Red 🌹
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              An absolutely beautiful and creative piece to introduce you to
              Social Reproduction Theory is a song by Harry Chaplin called
              "Flowers Are Red". It's a rather poignant story of a child who
              loses his creative spark as a result of the oppressive pedagogy
              practiced by his teacher. It's an homage to the importance of
              encouraging individuality and questioning norms not only in
              education but also in society.
            </p>
          </div>
          <div>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/7qrbNygL0YU?si=Un0uR8OCB1hxFaKC"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>

        {/* Second Block: Image on Left, Text on Right */}
        <div className="grid grid-cols-1 gap-12 items-center mb-16">
          <div className="order-last md:order-first">
            <p className="text-lg text-gray-700 leading-relaxed">
              This video captures the critical aspects of Social Reproduction
              Theory as well as anything else could in a span of 5 minutes. His
              first teacher's insistence on standardizing the world, down to how
              the student depicted flowers, is an all too common reflection of
              society's tendency towards uniformity rather than individuality.
              Through the lens of SRT, one must wonder how standardized
              expectations will impact future generations and to what extent
              homogenized thought stops benefiting society. As we continue
              watching, the child is under the supervision of a new teacher who
              encourages originality and unique expression of thought. It's a
              pivotal moment in the story that allows the child a chance to
              rekindle his optimism (though sadly we don't know if he ever does
              😞). The new teacher represents the cathartic potential of
              education. This figure represents the idea that teachers can help
              students challenge norms and envision a world beyond the one they
              are often expected to blindly inherit. This video invites
              pedagogical figures to question:{" "}
              <b>
                "Am I nurturing creativity and individuality in my classroom, or
                merely reproducing current societal expectations?"
              </b>
            </p>
          </div>
        </div>

        {/* Third Block: Text on Left, Image on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              Empowering Students Beyond the Classroom
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              blah blah blah
            </p>
          </div>
          <div>
            <img
              src={ReproductionImage1}
              alt="Team working together"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reproduction;
