import React, { useState } from "react";
import ReproductionImage1 from "../images/reproduction1.jpeg";
import ReproductionQuiz from "./ReproductionQuiz";

const Reproduction = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const toggleQuiz = () => {
    setShowQuiz((prev) => !prev);
  };

  return (
    <section
      id="reproduction"
      className="min-h-screen w-full bg-gray-100 px-6 pt-16 text-center md:text-left"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-teal-700 mb-2">
          Social Reproduction 🌱
        </h2>
        <p className="text-md text-gray-600 mb-8">
          Section Authored By: Jason Gill
        </p>

        <div className="grid grid-cols-1 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              A Snapshot Introduction to Social Reproduction in Education 📸
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              As a teacher, Social Reproduction Theory <b>(SRT)</b> is a concept
              you must familiarize yourself with to better hone your craft. It
              seeks to explain how educational systems have the unique ability
              to reinforce social norms, values and inequalities. Further, it
              helps us understand how these institutions reproduce these
              dynamics throughout generations. You, as a teacher, have more
              power than you may know. This power is immense and comes with
              great responsibility (a cliche, I know 😬). The ideas from SRT
              should serve as a reminder regarding a couple of things. First,
              each step in the pedagogy process matters, as it will shape the
              future generation and what they deem important. Second, you have
              the opportunity to make your classroom a space where societal
              norms are not only questioned but reimagined. Encouraging your
              students to connect the themes taught in class to real-world
              issues and their passions, without capping their potential, allows
              them to make changes beyond the four walls of your classroom.
              <br />
              <br />
              SRT illustrates how education perpetuates inequality within the
              classes, races, and genders as it exposes the rigid "who gets
              what" blueprint used all too prevalently in society today.{" "}
              <b>
                Remember: As an educator, your role is not to decide a student’s
                path based on what you think they are well-suited for or what
                the curriculum demands! You must empower them to pursue the
                paths they are passionate about, and allow them to break free
                from societal expectations.
              </b>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              Flowers Are Red 🌹
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              An absolutely beautiful and creative piece to introduce you to
              Social Reproduction Theory is a song by Harry Chaplin called
              "Flowers Are Red" <b>(Chaplin, 2016)</b>. It's a rather poignant
              story of a child who loses his creative spark as a result of the
              oppressive pedagogy practiced by his teacher. It's an homage to
              the importance of encouraging individuality and questioning norms
              not only in education but also in society.
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              A Personal Anecdote about Social Reproduction 📝
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Having recently finished my last internship, I noticed quite an
              overlap between my academic and corporate experiences. Both of
              these worlds measured my performance, either with a standardized
              letter grade system or a rubric-like performance scale. Similarly,
              just as I was required to present my work at school via academic
              presentations, I demoed my work in front of my team for new
              features I had implemented. While I can recognize the value these
              ventures brought to my personal and career growth, I can't help
              but reflect on the factors that more than likely have had a hand
              in influencing my direction in life. Have I succeeded because of
              my individuality and passion for what I love, or has the education
              system, with all its quirks and ulterior motives exposed by Social
              Reproduction Theory, prepared me to be the perfect worker for
              capitalist interests? This possibility is entertained by Backer
              and Cairns as they discuss how “the [current] education system is
              required to produce individuals who are selected and arranged in a
              hierarchy such that [the goal of] giving everyone equal education
              opportunity cannot overcome the real inequalities”{" "}
              <b>(Backer & Cairns, 2021)</b>.
            </p>
          </div>
          <div className="order-2 md:order-1">
            <img
              src={ReproductionImage1}
              alt="Work vs school split"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 mb-16 gap-12 items-center">
          <div className="order-last md:order-first">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              A Look at Hong Kong's Educational System 🇭🇰
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Social Reproduction Theory, despite its name, is not purely
              theoretical 😅... it applies to much of what we see in education
              today. A particular educational journal, "Alienated Learning in
              Hong Kong: A Marxist Perspective", goes on to highlight the
              experiences of Student A, who voiced that their education felt
              like "learn[ing] exam skills" and did not contribute to practical
              skills "relevant to [their] life <b>(Tsang, Lian, & Zhu, 2021)</b>
              . Another account from Student M highlights how their school
              deprioritized personal interests and passions, going as far as
              restricting these activities as a means to get underperforming
              students to keep up with their academically inclined peers.
              <br />
              <br />
              The idea, that academic performance defines a student's worth and
              potential, can damage a student beyond repair and hinder their
              full potential. As a pedagogical figure, you must be mindful of
              how you treat a student's unique talents and passions, as your
              goal should be to nurture these characteristics and help students
              thrive through personalization. Through these means true growth is
              achieved.
            </p>
          </div>
        </div>

        <div className="mb-12 bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-3xl font-semibold text-teal-600 mb-6">
            How to Apply Social Reproduction Theory to Your Classroom 🧑‍🏫
          </h3>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-teal-600">
                  Value Student Voice. It's Your North Star ✨
                </h4>
                <p className="text-gray-700">
                  Use methods such as{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Photovoice"
                    className="text-blue-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <b>Photovoice</b>
                  </a>{" "}
                  to allow for genuine critical reflection among students, and
                  guide them toward what they want to get out of your class{" "}
                  <b>(Tsang, Lian, & Zhu, 2021)</b>. As Freire says, it is “[the
                  oppressed] who must, from their stifled humanity, wage for the
                  struggle for a fuller humanity” as the “oppressor who is
                  himself dehumanized because he dehumanizes others, is unable
                  to lead this struggle” <b>(Freire, 2017)</b>.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-teal-600">
                  Find What Makes Your Students Tick ⏰
                </h4>
                <p className="text-gray-700">
                  Take time to understand each student's passions and interests.
                  These are entry points that you can leverage to help drive
                  their growth. Guide and nurture these aspects to help them
                  shape who they want to become.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-teal-600">
                  Don't Be Afraid to Go Beyond the Curriculum 🚀
                </h4>
                <p className="text-gray-700">
                  We understand that, as a teacher, you have a curriculum to
                  follow. However, sticking to it shouldn't mean stifling
                  meaningful conversation. Healthy tangents are encouraged to
                  allow students to connect with the material through their
                  interests and experiences.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <button
            className={`bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-200 ${
              !showQuiz ? "animate-bounce" : ""
            }`}
            onClick={toggleQuiz}
          >
            {showQuiz ? "Hide Questions" : "Test Your SRT Knowledge 🤓"}
          </button>
        </div>

        {showQuiz && (
          <div className="mt-8">
            <ReproductionQuiz />
          </div>
        )}
      </div>
    </section>
  );
};

export default Reproduction;
