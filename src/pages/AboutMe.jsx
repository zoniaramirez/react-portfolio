export default function AboutMe() {
  return (
    <section className="container mt-5">
      <h2 className="mb-4 custom-margin">About Me</h2>
      <div className="row">
        <div className="col-md-4">
          <img src="/assets/avatar.png" alt="Developer" />
        </div>
        <div className="col-md-8">
          {/*eslint-disable-next-line react/no-unescaped-entities */}
          <p>Hello! I'm Zonia Ramirez, a passionate and dedicated junior web developer with a background in creating dynamic and responsive web applications. With a keen eye for detail and a commitment to delivering high-quality code, I specialize in front-end development using modern technologies such as React, JavaScript, HTML, jQuery, Bootstrap, and CSS. I also specialize in back-end development using technologies such as APIs, Node, Express, SQL, Sequelize, MongoDB, Mongoose, REST, and GraphQL. I thrive in collaborative environments and am always eager to learn and adapt to new challenges. Let's build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}
