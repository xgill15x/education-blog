import React, { useState } from "react";
import AuthorityImage1 from "../images/freedomauthority.png";
import AuthorityQuiz from "./AuthorityQuiz";
import Banking from "../images/banking.png";
import Literature from "../images/literature.jpg";
import Quote from "../images/quote.png";

const Authority = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const toggleQuiz = () => {
    setShowQuiz((prev) => !prev);
  };

  return (
    <section
      id="authority"
      className="min-h-screen w-full bg-gray-100 px-6 pt-16 text-center md:text-left"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-teal-700 mb-2">
          Shared Authority 🤝
        </h2>
        <p className="text-md text-gray-600 mb-8">
          Section Authored By: Hoang Nguyen
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                What's the Issue with Authority in Education? 🤔
              </h3>
              The relationship between students and teachers has historically in
              many cases been a one-way street. Society tends to accept that
              teachers have all the knowledge, and greater authority as a
              result, and must help to shape the learning environment, impart
              knowledge, and guide students' development. On the opposite side,
              students, who generally are not considered to hold authority in an
              educational environment, have historically been positioned as
              passive recipients of knowledge. Their role is limited to just
              absorbing information, complying with teacher direction, and
              reproducing what is taught. Students have little to no chance for
              independent thought or critical engagement. This way of education
              emphasizes the position of the teacher, and the educational
              process is the process of the learner receiving knowledge from the
              teacher. There is no questioning whether that knowledge can be
              understood differently.
            </p>
          </div>
          <div>
            <img
              src={AuthorityImage1}
              alt="Authority illustration"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div className="order-2 md:order-1">
            <img
              src={Banking}
              alt="Banking educ"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-lg text-gray-700 leading-relaxed">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                The Banking Model of Education 🏦
              </h3>
              This Banking model of Education ignores the ability of students to
              contribute to the learning process in any meaningful way. This
              chips away at their creativity, curiosity and critical thinking;
              all aspects needed to fuel the development necessary for deeper
              learning and personal growth. Educator Paulo Freire proposed the
              concept of "Banking Education" in his 1968 work "Pedagogy of the
              Oppressed". Based on his observations of a Brazilian society,
              education was used to make people believe in the dominance of the
              elite, rather than to change society for a more equal life{" "}
              <b>(Freire, 2017)</b>. Banking education thus emphasizes morbid
              stability, where teachers transmit knowledge to students without
              interruption, and knowledge is considered a truth that cannot be
              changed or questioned. At the heart of this concept is the image
              of the “banker” representing the student, while teachers, or the
              “bank clerks”, distribute knowledge without influencing or
              changing it, just as banks are responsible for circulating money.
              Knowledge becomes an accumulated asset and this leads to the idea
              that the more you study and accumulate knowledge, the more
              successful you will be.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              The popularity of banking education is associated with the notion
              that those who are successful in money, morality, or status are
              all banked with standard knowledge, and vice versa. In "Let's
              Treat Authority Relationally" by author Charles Bingham, he
              asserts the close relationship between authority and knowledge in
              education by stating that"learn[ing] thus entails the
              authorization of the teacher by the student. When the student
              accepts the knowledge of the teacher, she has authorized him or
              her" <b>(Bingham, 2004)</b>.
              <br />
              <br />
              This perspective underscores the active role students play in
              legitimizing the teacher’s authority, yet in the banking model,
              this dynamic becomes rigid and one-sided. Giving students the
              choice of whether or not to learn from you directly affects the
              stability of the banking education (that's a good thing 😄). One
              may wonder why the banking model is widely used and I believe it's
              due to the utility in teaching in mass. For example, a country may
              employ the banking system to ensure cultural persistence and
              require students to learn history to avoid losing their roots, but
              over time, if the reasons as to why they are learning historical
              facts and figures are not just as strong as the content itself, it
              leads to passive and ineffective learning. This passive learning
              erodes the students’ ability to question and reason.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                My Experience with Banking Education 📝
              </h3>
              My own educational experience vividly reflects the characteristics
              of banking education described by Paulo Freire. When I was in
              secondary school, there was a subject called Literature. Where we
              study the famous Vietnamese literary works that include poetry,
              short stories, and important political texts of the country. I
              liked this subject because I could learn more about the history
              and culture of my country since the years of war and
              nation-building. However, the way we have been learning about this
              subject did not really encourage us to think for ourselves. Freire
              explains that under the banking model, students cannot question or
              create but only "receive, memorize, and repeat"{" "}
              <b>(Freire, 2017)</b>. This was precisely what happened in my
              Literature classes. Our teacher would stand on the podium, read an
              analysis of the work from some book, and we would write it all
              down into our notebooks, word by word 📝. Then we just memorized
              it for the exams. (This was very sad but it did happen throughout
              my school years 😞)
            </p>
          </div>
          <div>
            <img
              src={Literature}
              alt="Learning literature"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              We were also expected to read and write our opinions about the
              literary work prior to coming to class. That sounds good in
              theory, but it did not work that way in practice. If what you
              wrote was not what the teacher had thought, the teacher might make
              fun of you or even give you a bad grade 🥲. Because of that, most
              of us did not even attempt to write what we actually thought.
              Instead, we copied analyses from other books or online sources
              that fit into what the teacher wanted to see. I liked learning
              about these works in school because they are such a huge part of
              our culture, it always felt, however, that any creativity or
              critical thinking was not welcome there. This is a clear example
              of how the banking education model can snuff creativity and
              critical thinking in students. This led to boredom and dislike of
              studying literature among students.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <img
              src={Quote}
              alt="Educ is freedom"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-lg text-gray-700 leading-relaxed">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                Education as Freedom 🕊️
              </h3>
              If my teacher had encouraged us to share our genuine thoughts
              about these works and discussed them with us, rather than looking
              so strictly for only one "right answer," I believe that I could
              have learned much more. Freire's ideas remind me just how
              important it is to let students think and share openly. If I were
              given the chance to teach, I would want my students to feel
              comfortable airing their opinions, even when their views are quite
              opposite from mine. Education shouldn't be just a matter of
              memorizing the "right answers." Rather, it should be all about
              exploring, questioning, and growing together as learners, both
              students and teachers.
            </p>
          </div>
        </div>

        <div className="mb-12 bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-3xl font-semibold text-teal-600 mb-6">
            How to Apply Shared Authority to Your Classroom 🧑‍🏫
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
                  Ensure that You Emphasize the Process Over the Answers 🛠️
                </h4>
                <p className="text-gray-700">
                  I wish my teachers had emphasized the process of learning over
                  getting the "right" answer. Celebrate effort, improvement, and
                  curiosity, rather than perfection. This approach could help
                  students like me feel more motivated and less pressured.
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
                  Create a Safe Space for Mistakes 🛡️
                </h4>
                <p className="text-gray-700">
                  Fear of judgment often held me back from sharing my real
                  thoughts. Teachers should reassure students that making
                  mistakes is part of learning. I would have loved to feel safe
                  sharing an opinion, even if it wasn’t polished or fully
                  formed.
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
                  Provide Constructive Feedback 💬
                </h4>
                <p className="text-gray-700">
                  As a student, I’ve always found that constructive feedback is
                  one of the most valuable tools for improvement. It helps me
                  see where I went wrong, understand what needs to be fixed, and
                  recognize what I did well. Teachers can use feedback to not
                  only correct mistakes but also to guide students toward deeper
                  insights. This approach reassures students that mistakes are
                  part of learning and motivates them to refine their ideas and
                  try again.
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
            {showQuiz
              ? "Hide Questions"
              : "Test Your Shared Authority Knowledge 🤓"}
          </button>
        </div>

        {showQuiz && (
          <div className="mt-8">
            <AuthorityQuiz />
          </div>
        )}
      </div>
    </section>
  );
};

export default Authority;
