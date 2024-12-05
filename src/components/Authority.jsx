import React from "react";
import AuthorityImage1 from "../images/freedomauthority.png";
import Banking from "../images/banking.png";
import Literature from "../images/literature.jpg";
import Quote from "../images/quote.png";

const Authority = () => {
  return (
    <section
      id="authority"
      className="min-h-screen w-full bg-gray-100 px-6 py-12 text-center md:text-left"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-teal-700 mb-8">
          Shared Authority
        </h2>
        <p className="text-md text-gray-600 mb-8">
          Section Authored By: Hoang Nguyen
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                Classroom Dynamic 📚
              </h3>
              Traditionally, the relationship between students and teachers in
              the classroom has been a one-way street. Teachers, as knowledge
              holders, have always held greater authority, helping to shape the
              learning environment, impart knowledge, and guide students'
              development 🌱. On the opposite side, students, who do not hold
              authority, have historically been positioned as passive recipients
              of knowledge. Their role is limited to just absorbing information,
              complying with teacher direction, and reproducing what is taught.
              Students have little to no chance for independent thought or
              critical engagement 🤔. This way of education emphasizes the
              position of the teacher, and the educational process is the
              process of the learner receiving knowledge from the teacher
              without questioning or questioning whether that knowledge can be
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* <div className="order-last md:order-first"></div> */}
          <div>
            <img
              src={Banking}
              alt="Banking educ"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                Banking Education: A Model of Stability and Control 🏦
              </h3>
              <br />
              This traditional model ignores the ability of students to
              contribute meaningfully during learning processes. It thus risks
              stifling creativity, curiosity, and the critical thinking
              development necessary for deeper learning and personal growth 🌟.
              Educator <b>Paulo Freire</b> proposed the concept of
              <b> "Banking Education"</b> in his 1968 work{" "}
              <b>Pedagogy of the Oppressed</b>, based on his observations of a
              stratified Brazilian society rife with political unrest ⚖️. Here,
              education was used to make people believe in the dominance of the
              elite, rather than to change society for a more equal life.
              Banking education emphasizes stability: teachers transmit
              knowledge to students without interruption, and knowledge is
              considered truth and cannot be changed or questioned. At the heart
              of this concept is the image of the “banker” 💼. Teachers become
              “bank clerks” 🏦, distributing knowledge without influencing or
              changing it—just as banks are responsible for circulating money.
              Knowledge becomes an accumulated asset, leading to the idea that
              the more you study and accumulate knowledge, the more successful
              you will be 🎯.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              The popularity of banking education is associated with the notion
              that those who are successful in money, morality, or status are
              all knowledgeable, and vice versa. In the{" "}
              <b>Let's Treat Authority Retionally</b> by author{" "}
              <b>Charles Bingham</b>, he asserts the close relationship between
              authority and knowledge in education:{" "}
              <b>
                "To learn thus entails the authorization of the teacher by the
                student. When the student accepts the knowledge of the teacher,
                she has authorized him or her"
              </b>{" "}
              . This perspective underscores the active role students play in
              legitimizing the teacher’s authority, yet in the banking model,
              this dynamic becomes rigid and one-sided. Lack of knowledge is
              often associated with low self-esteem 😟 and poverty. Giving
              students the choice of whether or not to study history directly
              affects the stability of banking education. The notion that
              students are required to study history, otherwise they will "lose
              their roots", comes from the idea that the more they know about
              the history of the country, the more patriotic, moral and
              respectful they are of the national culture. It is also because of
              this stability that teaching and learning history focus heavily on
              memorizing and learning "available knowledge" 📖. Students must
              cram historical events, figures, and meanings as unquestionable
              facts. As a result, knowledge becomes static, causing students to
              lose the desire to learn more about things that are not written in
              books. This passive learning method erodes the students’ ability
              to question and reason. This is a result of passive learning
              involving cramming of facts and a lack of critical thinking. As a
              result, the learner does not delve deeply into the knowledge
              provided.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* <div className="order-last md:order-first"></div> */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                My Experience with Banking Education
              </h3>
              My own educational experience vividly reflects the characteristics
              of banking education described by <b>Paulo Freire</b>. When I was
              in secondary school, there was a subject called Literature. Where
              we study the famous Vietnamese literary works that include poetry,
              short stories, and important political texts of the country. I
              liked this subject because I could learn more about the history
              and culture of my country since the years of war and
              nation-building. However, the way we have been learning about this
              subject did not really encourage us to think for ourselves. Freire
              explains that under the banking model, students cannot question or
              create but only "receive, memorize, and repeat". This was
              precisely what happened in my Literature classes. Our teacher
              would stand on the podium, read an analysis of the work from some
              book, and we would write it all down into our notebooks, word by
              word 📝. Then we just memorized it for the exams. (This was very
              sad but it did happened throughout my school years 😞)
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
              fun of you or even give you a bad grade. Because of that, most of
              us did not even attempt to write what we actually thought.
              Instead, we copied analyses from other books or online sources
              that fit into what the teacher wanted to see. I liked learning
              about these works in school because they are such a huge part of
              our culture, it always felt, however, that any creativity or
              critical thinking was not welcome there. This is a clear example
              of how the banking education model can stifle creativity and
              critical thinking in students. Leading to boredom and dislike of
              studying literature among students. <br /> <br />
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                Education as Freedom: Creating Space for Growth and Expression
              </h3>
              If my teacher had encouraged us to share our genuine thoughts
              about these works and discussed them with us, rather than looking
              so strictly for only one "right answer," I believe that I could
              have learned much more. Freire's chapter reminds me just how
              important it is to let students think and share openly. If I were
              given the chance to teach, I would want my students to feel
              comfortable airing their opinions, even when their views are quite
              opposite from mine. Education shouldn't be just a matter of
              memorizing the "right answers." Rather, it should be all about
              exploring, questioning, and growing together as learners.
              <br />
              From a student's perspective, I wish my teachers had done a few
              things differently to make the learning experience more engaging
              and meaningful. Here are some suggestions for teachers to help
              students feel more empowered and motivated in the classroom:{" "}
              <br />
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* <div className="order-last md:order-first"></div> */}
          <div>
            <img
              src={Quote}
              alt="Educ is freedom"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              1. <b>Emphasize Process Over Answers</b>: I wish my teachers had
              emphasized the process of learning over getting the "right"
              answer. Celebrate effort, improvement, and curiosity, rather than
              perfection. This approach could help students like me feel more
              motivated and less pressured. <br />
              2. <b>Create a Safe Space for Mistakes</b>: Fear of judgment often
              held me back from sharing my real thoughts. Teachers should
              reassure students that making mistakes is part of learning. I
              would have loved to feel safe sharing an opinion, even if it
              wasn’t polished or fully formed.
              <br />
              3. <b>Provide Constructive Feedback</b>: As a student, I’ve always
              found that constructive feedback is one of the most valuable tools
              for improvement. It helps me see where I went wrong, understand
              what needs to be fixed, and recognize what I did well. Teachers
              can use feedback to not only correct mistakes but also to guide
              students toward deeper insights. This approach reassures students
              that mistakes are part of learning and motivates them to refine
              their ideas and try again
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
